import {
	songs,
	songsWithVideos,
	albums,
	getSongsByAlbum,
	getSongsByTag,
	type Song
} from './nf-discography';

export type SortOrder = 'oldest' | 'newest' | 'random';

export interface Preset {
	id: string;
	name: string;
	description: string;
	getSongs: () => Song[];
	shortCode: string; // 1-2 character code for URL encoding
}

// Helper function to filter out duplicate songs
// NF EP versions (s010, s011) should be excluded if Mansion versions (s018, s020) are present
function filterDuplicates(songs: Song[]): Song[] {
	const songIds = new Set(songs.map((s) => s.id));
	return songs.filter((song) => {
		// If Mansion version exists, exclude NF EP version
		if (song.id === 's010' && songIds.has('s018')) return false;
		if (song.id === 's011' && songIds.has('s020')) return false;
		return true;
	});
}

// Helper function to get songs by specific IDs in a specific order
function getSongsByIds(ids: string[]): Song[] {
	return ids.map((id) => songsWithVideos.find((s) => s.id === id)).filter((s) => s !== undefined);
}

// Presets use tag-based filtering for easier maintenance

export const presets: Preset[] = [
	{
		id: 'all',
		name: 'All Tracks',
		description: 'Every NF song across all albums and EPs',
		getSongs: () => filterDuplicates([...songsWithVideos]),
		shortCode: 'a'
	},
	{
		id: 'journey',
		name: 'NF Journey',
		description: 'Comprehensive emotional arc spanning his entire career',
		getSongs: () => filterDuplicates(getSongsByTag('journey')),
		shortCode: 'j'
	},
	{
		id: 'story',
		name: 'NF Story',
		description: "A narrative journey through NF's core themes and emotional evolution",
		getSongs: () =>
			getSongsByIds([
				's017', // Mansion
				's028', // Intro 2
				's029', // Therapy Session
				's031', // How Could You Leave Us
				's025', // Paralyzed
				's033', // Real
				's043', // Outcast
				's047', // Let You Down
				's049', // My Life
				's051', // If You Want Love
				's058', // The Search
				's063', // Time
				's069', // Hate Myself
				's059', // Leave Me Alone
				's062', // Nate
				's087', // Paid My Dues
				's083', // Lost
				's060', // Change
				's089', // Hope
				's093', // Happy
				's102', // Fear
				's104', // Who I Was
				's107' // Washed Up
			]),
		shortCode: 'S'
	},
	{
		id: 'gateway',
		name: 'NF Gateway',
		description: "An essential 8-song introduction to NF's emotional evolution",
		getSongs: () => filterDuplicates(getSongsByTag('gateway')),
		shortCode: 'g'
	},
	{
		id: 'popular',
		name: 'Most Popular',
		description: "Fan favorites and NF's most streamed tracks",
		getSongs: () => filterDuplicates(getSongsByTag('popular')),
		shortCode: 'p'
	},
	{
		id: 'selected-albums',
		name: 'Selected Albums',
		description: 'Choose which albums to include in your ranking',
		getSongs: () =>
			filterDuplicates(songsWithVideos.filter((song) => song.albumId !== undefined)),
		shortCode: 'A'
	}
];

export function getPresetById(id: string): Preset | undefined {
	return presets.find((p) => p.id === id);
}

export function getPresetByShortCode(code: string): Preset | undefined {
	return presets.find((p) => p.shortCode === code);
}

export function applySortOrder(songs: Song[], order: SortOrder): Song[] {
	const sorted = [...songs];

	switch (order) {
		case 'oldest':
			return sorted.sort((a, b) => {
				if (a.year !== b.year) return a.year - b.year;
				if (a.albumId !== b.albumId) {
					// Sort by album order
					const albumA = albums.findIndex((al) => al.id === a.albumId);
					const albumB = albums.findIndex((al) => al.id === b.albumId);
					return albumA - albumB;
				}
				return a.trackNumber - b.trackNumber;
			});

		case 'newest':
			return sorted.sort((a, b) => {
				if (a.year !== b.year) return b.year - a.year;
				if (a.albumId !== b.albumId) {
					const albumA = albums.findIndex((al) => al.id === a.albumId);
					const albumB = albums.findIndex((al) => al.id === b.albumId);
					return albumB - albumA;
				}
				return b.trackNumber - a.trackNumber;
			});

		case 'random':
			return sorted.sort(() => Math.random() - 0.5);

		default:
			return sorted;
	}
}
