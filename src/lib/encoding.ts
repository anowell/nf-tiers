import { getPresetByShortCode, type SortOrder } from './data/presets';

export type TierRank = 's' | 'a' | 'b' | 'c' | 'd' | 'f' | 'x' | 'u'; // x = skipped, u = unranked

export interface TierState {
	preset: string;
	sortOrder: SortOrder;
	rankings: Map<string, TierRank>; // songId -> tier
}

// Base62 characters for encoding (0-9, a-z, A-Z)
const BASE62_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Tier to number mapping (for compact encoding)
const TIER_TO_NUM: Record<TierRank, number> = {
	s: 0,
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	f: 5,
	x: 6, // skipped
	u: 7 // unranked
};

const NUM_TO_TIER: Record<number, TierRank> = {
	0: 's',
	1: 'a',
	2: 'b',
	3: 'c',
	4: 'd',
	5: 'f',
	6: 'x',
	7: 'u'
};

/**
 * Encode tier state into a compact URL-safe string
 * Format: <preset><rankings>
 * Example: "a123..." where:
 *   - 'a' = preset code (all tracks)
 *   - '123...' = base62-encoded ranking data
 *
 * Note: Sort order is NOT encoded - it's only UI state for determining
 * which unranked song to show next. Rankings are always encoded in the
 * canonical order from preset.getSongs()
 */
export function encodeTierState(state: TierState): string {
	const preset = state.preset;

	// Get all songs in canonical order for this preset
	const presetObj = getPresetByShortCode(preset);
	if (!presetObj) return '';

	const orderedSongs = presetObj.getSongs();

	// Create a ranking array (one tier value per song, in order)
	const rankings: number[] = orderedSongs.map((song) => {
		const tier = state.rankings.get(song.id) || 'u';
		return TIER_TO_NUM[tier];
	});

	// Pack rankings into base-8 then convert to base62
	// Each ranking is 0-7 (8 possible values)
	let packed = 0n;
	for (let i = rankings.length - 1; i >= 0; i--) {
		packed = packed * 8n + BigInt(rankings[i]);
	}

	// Convert to base62
	let encoded = '';
	if (packed === 0n) {
		encoded = '0';
	} else {
		while (packed > 0n) {
			const remainder = Number(packed % 62n);
			encoded = BASE62_CHARS[remainder] + encoded;
			packed = packed / 62n;
		}
	}

	return `${preset}${encoded}`;
}

/**
 * Decode a tier state from URL parameter
 * Format: <preset><rankings>
 *
 * Note: Sort order defaults to 'random' since it's only UI state
 */
export function decodeTierState(encoded: string): TierState | null {
	if (encoded.length < 2) return null;

	const presetCode = encoded[0];
	const rankingsStr = encoded.slice(1);

	const preset = getPresetByShortCode(presetCode);
	if (!preset) return null;

	// Decode base62 to number
	let packed = 0n;
	for (let i = 0; i < rankingsStr.length; i++) {
		const charIndex = BASE62_CHARS.indexOf(rankingsStr[i]);
		if (charIndex === -1) return null;
		packed = packed * 62n + BigInt(charIndex);
	}

	// Unpack from base-8
	const orderedSongs = preset.getSongs();
	const rankings = new Map<string, TierRank>();

	for (let i = 0; i < orderedSongs.length; i++) {
		const tierNum = Number(packed % 8n);
		const tier = NUM_TO_TIER[tierNum];
		if (tier !== 'u') {
			rankings.set(orderedSongs[i].id, tier);
		}
		packed = packed / 8n;
	}

	return {
		preset: presetCode,
		sortOrder: 'oldest', // Default to chronological order
		rankings
	};
}

/**
 * Create a human-readable version for debugging
 * Format: preset:sort:s1a2b3...
 * Example: "a:oldest:sabbac" = all tracks, oldest first, song 1=S, 2=A, 3=B, 4=B, 5=A, 6=C
 */
export function encodeReadable(state: TierState): string {
	const presetObj = getPresetByShortCode(state.preset);
	if (!presetObj) return '';

	const orderedSongs = presetObj.getSongs();
	const rankStr = orderedSongs.map((song) => state.rankings.get(song.id) || 'u').join('');

	return `${state.preset}:${state.sortOrder}:${rankStr}`;
}

/**
 * Decode human-readable format
 */
export function decodeReadable(readable: string): TierState | null {
	const parts = readable.split(':');
	if (parts.length !== 3) return null;

	const [presetCode, sortOrder, rankStr] = parts;

	const preset = getPresetByShortCode(presetCode);
	if (!preset) return null;

	if (!['oldest', 'newest', 'random'].includes(sortOrder)) return null;

	const orderedSongs = preset.getSongs();
	const rankings = new Map<string, TierRank>();

	for (let i = 0; i < Math.min(orderedSongs.length, rankStr.length); i++) {
		const tier = rankStr[i] as TierRank;
		if (tier !== 'u' && ['s', 'a', 'b', 'c', 'd', 'f', 'x'].includes(tier)) {
			rankings.set(orderedSongs[i].id, tier);
		}
	}

	return {
		preset: presetCode,
		sortOrder: sortOrder as SortOrder,
		rankings
	};
}
