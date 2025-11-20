import { encodeTierState, decodeTierState, encodeReadable, type TierRank } from '$lib/encoding';
import { applySortOrder, type SortOrder, type Preset } from '$lib/data/presets';
import type { Song } from '$lib/data/nf-discography';

export type Theme = 'fear' | 'hope';

interface TierGroup {
	tier: TierRank;
	label: string;
	songs: Song[];
}

class TierStore {
	currentPreset = $state<Preset | null>(null);
	sortOrder = $state<SortOrder>('oldest');
	rankings = $state<Map<string, TierRank>>(new Map());
	currentSongIndex = $state(0);
	pendingRank = $state<TierRank | null>(null);
	theme = $state<Theme>('fear');
	nextSongOverride = $state<string | null>(null); // Song ID to rank next (overrides default order)
	selectedAlbumIds = $state<Set<string>>(new Set()); // For "Selected Albums" preset

	// Computed properties using getters
	get orderedSongs(): Song[] {
		if (!this.currentPreset) return [];
		return applySortOrder(this.currentPreset.getSongs(), this.sortOrder);
	}

	get currentSong(): Song | null {
		// If there's an override, use that first (if still valid)
		if (this.nextSongOverride) {
			const song = this.getSongById(this.nextSongOverride);
			if (song && !this.rankings.has(song.id)) {
				return song;
			}
		}

		const unranked = this.unrankedSongs;
		return unranked.length > 0 ? unranked[0] : null;
	}

	get unrankedSongs(): Song[] {
		return this.orderedSongs.filter((song) => !this.rankings.has(song.id));
	}

	get rankedSongs(): Song[] {
		return this.orderedSongs.filter((song) => {
			const rank = this.rankings.get(song.id);
			return rank && rank !== 'x' && rank !== 'u';
		});
	}

	get skippedSongs(): Song[] {
		return this.orderedSongs.filter((song) => this.rankings.get(song.id) === 'x');
	}

	get tierGroups(): TierGroup[] {
		const tiers: TierRank[] = ['s', 'a', 'b', 'c', 'd', 'f'];
		const labels: Record<TierRank, string> = {
			s: 'S Tier',
			a: 'A Tier',
			b: 'B Tier',
			c: 'C Tier',
			d: 'D Tier',
			f: 'F Tier',
			x: 'Skipped',
			u: 'Unranked'
		};

		return tiers.map((tier) => ({
			tier,
			label: labels[tier],
			songs: this.rankedSongs.filter((song) => this.rankings.get(song.id) === tier)
		}));
	}

	get progress(): { ranked: number; total: number; percentage: number } {
		const skipped = this.skippedSongs.length;
		const total = this.orderedSongs.length - skipped; // Exclude skipped from total
		const ranked = this.rankedSongs.length;
		return {
			ranked,
			total,
			percentage: total > 0 ? Math.round((ranked / total) * 100) : 0
		};
	}

	get shareUrl(): string {
		if (!this.currentPreset) return '';
		const encoded = encodeTierState({
			preset: this.currentPreset.shortCode,
			sortOrder: this.sortOrder,
			rankings: this.rankings
		});
		return `${window.location.origin}${window.location.pathname}?t=${encoded}`;
	}

	get readableState(): string {
		if (!this.currentPreset) return '';
		return encodeReadable({
			preset: this.currentPreset.shortCode,
			sortOrder: this.sortOrder,
			rankings: this.rankings
		});
	}

	setPreset(preset: Preset, sort: SortOrder = 'oldest') {
		this.currentPreset = preset;
		this.sortOrder = sort;
		this.rankings = new Map();
		this.currentSongIndex = 0;
		this.pendingRank = null;

		// If "Selected Albums" preset, skip songs from unselected albums
		if (preset.id === 'selected-albums' && this.selectedAlbumIds.size > 0) {
			const songs = applySortOrder(preset.getSongs(), sort);
			songs.forEach((song) => {
				if (song.albumId && !this.selectedAlbumIds.has(song.albumId)) {
					this.rankings.set(song.id, 'x');
				}
			});
			this.rankings = new Map(this.rankings);
		}
	}

	setSelectedAlbums(albumIds: Set<string>) {
		this.selectedAlbumIds = albumIds;
	}

	loadFromUrl(encoded: string) {
		const state = decodeTierState(encoded);
		if (state) {
			const preset = this.currentPreset;
			if (preset && preset.shortCode === state.preset) {
				this.sortOrder = state.sortOrder;
				this.rankings = state.rankings;
			}
		}
	}

	setPendingRank(tier: TierRank | null) {
		this.pendingRank = tier;
	}

	confirmRank() {
		if (this.currentSong && this.pendingRank) {
			this.rankings.set(this.currentSong.id, this.pendingRank);
			this.rankings = new Map(this.rankings); // Trigger reactivity
			this.pendingRank = null;
			// Clear override if the current song was ranked
			if (this.nextSongOverride === this.currentSong.id) {
				this.nextSongOverride = null;
			}
		}
	}

	rankSong(songId: string, tier: TierRank) {
		this.rankings.set(songId, tier);
		this.rankings = new Map(this.rankings);
		this.pendingRank = null;
		// Clear override if this song was ranked
		if (this.nextSongOverride === songId) {
			this.nextSongOverride = null;
		}
	}

	skipCurrentSong() {
		if (this.currentSong) {
			this.rankings.set(this.currentSong.id, 'x');
			this.rankings = new Map(this.rankings);
			this.pendingRank = null;
			// Clear override if the current song was skipped
			if (this.nextSongOverride === this.currentSong.id) {
				this.nextSongOverride = null;
			}
		}
	}

	resetPendingRank() {
		this.pendingRank = null;
	}

	rerankSong(songId: string) {
		this.rankings.delete(songId);
		this.rankings = new Map(this.rankings);
		this.nextSongOverride = songId; // Set as next song to rank
	}

	changeSong(songId: string) {
		// Remove current ranking if it exists (move back to unranked)
		this.rankings.delete(songId);
		this.rankings = new Map(this.rankings);
		this.nextSongOverride = songId; // Set as next song to rank
	}

	toggleTheme() {
		this.theme = this.theme === 'fear' ? 'hope' : 'fear';
	}

	getSongById(songId: string): Song | null {
		return this.orderedSongs.find((s) => s.id === songId) || null;
	}

	get shouldShowHatersPage(): boolean {
		const fTierSongs = this.rankedSongs.filter((song) => this.rankings.get(song.id) === 'f');
		const skipped = this.skippedSongs.length;
		const totalInPreset = this.orderedSongs.length - skipped; // Exclude skipped from total
		return totalInPreset > 0 && fTierSongs.length / totalInPreset >= 0.5;
	}
}

export const tierStore = new TierStore();
