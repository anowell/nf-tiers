import covers from '$lib/assets/covers';

export interface Song {
	id: string;
	title: string;
	album: string;
	albumId?: string; // Optional for guest features
	artist?: string; // Set when NF is a guest feature (main artist)
	year: number;
	trackNumber: number;
	featuring?: string[]; // For NF songs, this is other artists. For guest features, this includes NF
	tags?: string[];
	youtubeId?: string;
	spotifyId?: string;
}

export interface Album {
	id: string;
	title: string;
	year: number;
	type: 'ep' | 'album' | 'mixtape';
	coverPlaceholder: string;
	coverImage?: string;
}

export const albums: Album[] = [
	{
		id: 'imfree',
		title: "I'm Free",
		year: 2012,
		type: 'ep',
		coverPlaceholder: '🎤',
		coverImage: covers.imfree
	},
	{
		id: 'nf',
		title: 'NF',
		year: 2014,
		type: 'ep',
		coverPlaceholder: '🎵',
		coverImage: covers.nf
	},
	{
		id: 'mansion',
		title: 'Mansion',
		year: 2015,
		type: 'album',
		coverPlaceholder: '🏚️',
		coverImage: covers.mansion
	},
	{
		id: 'therapy',
		title: 'Therapy Session',
		year: 2016,
		type: 'album',
		coverPlaceholder: '💭',
		coverImage: covers.therapy
	},
	{
		id: 'perception',
		title: 'Perception',
		year: 2017,
		type: 'album',
		coverPlaceholder: '👁️',
		coverImage: covers.perception
	},
	{
		id: 'search',
		title: 'The Search',
		year: 2019,
		type: 'album',
		coverPlaceholder: '🔍',
		coverImage: covers.search
	},
	{
		id: 'clouds',
		title: 'Clouds (The Mixtape)',
		year: 2021,
		type: 'mixtape',
		coverPlaceholder: '☁️',
		coverImage: covers.clouds
	},
	{
		id: 'hope',
		title: 'HOPE',
		year: 2023,
		type: 'album',
		coverPlaceholder: '✨',
		coverImage: covers.hope
	},
	{
		id: 'fear',
		title: 'FEAR',
		year: 2025,
		type: 'ep',
		coverPlaceholder: '⚡',
		coverImage: covers.fear
	}
];

export const songs: Song[] = [
	// I'm Free EP (2012)
	{
		id: 's001',
		title: 'Understand Me',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 1
	},
	{
		id: 's002',
		title: 'Alone',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 2,
		featuring: ['Sean Simmonds']
	},
	{
		id: 's003',
		title: "I've Been There",
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 3
	},
	{
		id: 's004',
		title: 'Not The Same',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 4
	},
	{
		id: 's005',
		title: "I'm Free",
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 5
	},
	{
		id: 's006',
		title: 'I Got Jesus',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 6
	},
	{
		id: 's007',
		title: "That's Alright",
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 7
	},
	{
		id: 's008',
		title: 'Invisible',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 8
	},
	{
		id: 's009',
		title: 'Goodbye',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 9
	},

	// NF EP (2014)
	{ id: 's010', title: 'All I Have', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 1 },
	{ id: 's011', title: 'Wake Up', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 2 },
	{ id: 's012', title: 'Hands Up', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 3 },
	{ id: 's013', title: 'Only One', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 4 },
	{
		id: 's014',
		title: 'Thing Called Love',
		album: 'NF',
		albumId: 'nf',
		year: 2014,
		trackNumber: 5
	},
	{ id: 's015', title: 'Just Being Me', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 6 },

	// Mansion (2015)
	{
		id: 's016',
		title: 'Intro',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 1,
		tags: ['journey']
	},
	{
		id: 's017',
		title: 'Mansion',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 2,
		featuring: ['Fleurie'],
		tags: ['gateway', 'journey']
	},
	{
		id: 's018',
		title: 'All I Have',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 3,
		tags: ['journey']
	},
	{ id: 's019', title: 'Wait', album: 'Mansion', albumId: 'mansion', year: 2015, trackNumber: 4 },
	{
		id: 's020',
		title: 'Wake Up',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 5
	},
	{
		id: 's021',
		title: 'Face It',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 6
	},
	{
		id: 's022',
		title: 'Motivated',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 7
	},
	{
		id: 's023',
		title: 'Notepad',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 8,
		tags: ['journey']
	},
	{
		id: 's024',
		title: 'Turn The Music Up',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 9
	},
	{
		id: 's025',
		title: 'Paralyzed',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 10,
		tags: ['journey']
	},
	{
		id: 's026',
		title: "I'll Keep On",
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 11,
		featuring: ['Jeremiah Carlson']
	},
	{
		id: 's027',
		title: 'Can You Hold Me',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 12,
		featuring: ['Britt Nicole']
	},

	// Therapy Session (2016)
	{
		id: 's028',
		title: 'Intro 2',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 1,
		tags: ['journey']
	},
	{
		id: 's029',
		title: 'Therapy Session',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 2,
		tags: ['gateway', 'journey']
	},
	{
		id: 's030',
		title: 'I Just Wanna Know',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 3,
		tags: ['journey']
	},
	{
		id: 's031',
		title: 'How Could You Leave Us',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 4,
		tags: ['gateway', 'journey']
	},
	{
		id: 's032',
		title: 'Breathe',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 5
	},
	{
		id: 's033',
		title: 'Real',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 6,
		tags: ['journey']
	},
	{
		id: 's034',
		title: 'Oh Lord',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 7,
		tags: ['journey']
	},
	{
		id: 's035',
		title: 'I Can Feel It',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 8
	},
	{
		id: 's036',
		title: 'Got You On My Mind',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 9
	},
	{
		id: 's037',
		title: "Grindin'",
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 10,
		featuring: ['Marty'],
		tags: ['journey']
	},
	{
		id: 's038',
		title: "Wish You Wouldn't",
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 11
	},
	{
		id: 's039',
		title: 'Statement',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 12,
		tags: ['journey']
	},
	{
		id: 's040',
		title: 'All I Do',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 13
	},
	{
		id: 's041',
		title: 'Lost In The Moment',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 14,
		featuring: ['Jonathan Thulin']
	},

	// Perception (2017)
	{
		id: 's042',
		title: 'Intro III',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 1,
		tags: ['journey']
	},
	{
		id: 's043',
		title: 'Outcast',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 2,
		tags: ['journey']
	},
	{
		id: 's044',
		title: '10 Feet Down',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 3,
		featuring: ['Ruelle'],
		tags: ['journey']
	},
	{
		id: 's045',
		title: 'Green Lights',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 4,
		tags: ['journey']
	},
	{
		id: 's046',
		title: 'Dreams',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 5,
		tags: ['journey', 'popular']
	},
	{
		id: 's047',
		title: 'Let You Down',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 6,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's048',
		title: 'Destiny',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 7,
		tags: ['journey']
	},
	{
		id: 's049',
		title: 'My Life',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 8,
		tags: ['journey']
	},
	{
		id: 's050',
		title: "You're Special",
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 9
	},
	{
		id: 's051',
		title: 'If You Want Love',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 10,
		tags: ['journey', 'popular']
	},
	{
		id: 's052',
		title: 'Remember This',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 11,
		tags: ['journey', 'popular']
	},
	{
		id: 's053',
		title: 'Know',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 12
	},
	{
		id: 's054',
		title: 'Lie',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 13,
		tags: ['journey']
	},
	{
		id: 's055',
		title: '3 A.M.',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 14
	},
	{
		id: 's056',
		title: 'One Hundred',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 15,
		tags: ['journey']
	},
	{
		id: 's057',
		title: 'Outro',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 16,
		tags: ['journey']
	},

	// The Search (2019)
	{
		id: 's058',
		title: 'The Search',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 1,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's059',
		title: 'Leave Me Alone',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 2,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's060',
		title: 'Change',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 3,
		tags: ['journey']
	},
	{
		id: 's061',
		title: 'My Stress',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 4
	},
	{
		id: 's062',
		title: 'Nate',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 5,
		tags: ['journey', 'popular']
	},
	{
		id: 's063',
		title: 'Time',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 6,
		tags: ['journey']
	},
	{
		id: 's064',
		title: 'Returns',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 7,
		tags: ['journey']
	},
	{
		id: 's065',
		title: 'When I Grow Up',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 8,
		tags: ['journey', 'popular']
	},
	{
		id: 's066',
		title: 'Only',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 9,
		featuring: ['Sasha Sloan'],
		tags: ['journey']
	},
	{
		id: 's067',
		title: 'Let Me Go',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 10,
		tags: ['journey']
	},
	{
		id: 's068',
		title: '-Interlude-',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 11
	},
	{
		id: 's069',
		title: 'Hate Myself',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 12,
		tags: ['journey']
	},
	{
		id: 's070',
		title: 'I Miss The Days',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 13,
		tags: ['journey']
	},
	{
		id: 's071',
		title: 'No Excuses',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 14,
		tags: ['journey']
	},
	{
		id: 's072',
		title: 'Like This',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 15,
		tags: ['journey']
	},
	{
		id: 's073',
		title: 'Options',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 16
	},
	{
		id: 's074',
		title: 'WHY',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 17,
		tags: ['journey']
	},
	{
		id: 's075',
		title: 'Thinking',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 18
	},
	{
		id: 's076',
		title: 'Trauma',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 19,
		tags: ['journey']
	},

	// Clouds (The Mixtape) (2021)
	{
		id: 's078',
		title: 'CLOUDS',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 1,
		tags: ['popular']
	},
	{
		id: 's079',
		title: "THAT'S A JOKE",
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 2,
		tags: ['popular']
	},
	{
		id: 's080',
		title: 'JUST LIKE YOU',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 3,
		tags: ['journey']
	},
	{
		id: 's081',
		title: 'STORY',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 4
	},
	{
		id: 's082',
		title: 'PRIDEFUL',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 5,
		tags: ['journey']
	},
	{
		id: 's083',
		title: 'LOST',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 6,
		featuring: ['Hopsin'],
		tags: ['journey']
	},
	{
		id: 's084',
		title: 'LAYERS',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 7,
		tags: ['journey']
	},
	{
		id: 's085',
		title: 'DRIFTING',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 8,
		tags: ['journey']
	},
	{
		id: 's086',
		title: 'TRUST',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 9,
		featuring: ['Tech N9ne']
	},
	{
		id: 's087',
		title: 'PAID MY DUES',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 10,
		tags: ['journey', 'popular']
	},
	{
		id: 's088',
		title: 'CLOUDS (Edit)',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 11
	},

	// HOPE (2023)
	{
		id: 's089',
		title: 'HOPE',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 1,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's090',
		title: 'MOTTO',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 2,
		tags: ['popular']
	},
	{
		id: 's091',
		title: 'CAREFUL',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 3,
		featuring: ['Cordae']
	},
	{
		id: 's092',
		title: 'MAMA',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 4,
		tags: ['journey', 'popular']
	},
	{
		id: 's093',
		title: 'HAPPY',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 5,
		tags: ['journey', 'popular']
	},
	{ id: 's094', title: 'PANDEMONIUM', album: 'HOPE', albumId: 'hope', year: 2023, trackNumber: 6 },
	{ id: 's095', title: 'SUFFICE', album: 'HOPE', albumId: 'hope', year: 2023, trackNumber: 7 },
	{
		id: 's096',
		title: 'GONE',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 8,
		featuring: ['Julia Michaels']
	},
	{
		id: 's097',
		title: 'BULLET',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 9,
		tags: ['journey']
	},
	{
		id: 's098',
		title: 'TURN MY BACK',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 10
	},
	{ id: 's099', title: 'MISTAKE', album: 'HOPE', albumId: 'hope', year: 2023, trackNumber: 11 },
	{ id: 's100', title: 'LET EM PRAY', album: 'HOPE', albumId: 'hope', year: 2023, trackNumber: 12 },
	{
		id: 's101',
		title: 'RUNNING',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 13,
		tags: ['journey']
	},

	// FEAR EP (2025)
	{
		id: 's102',
		title: 'FEAR',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 1,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's103',
		title: 'HOME',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 2,
		tags: ['journey']
	},
	{
		id: 's104',
		title: 'WHO I WAS',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 3,
		featuring: ['mgk'],
		tags: ['journey']
	},
	{
		id: 's105',
		title: 'GIVE ME A REASON',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 4,
		tags: ['journey']
	},
	{
		id: 's106',
		title: 'SORRY',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 5,
		featuring: ['James Arthur'],
		tags: ['journey']
	},
	{
		id: 's107',
		title: 'WASHED UP',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 6,
		tags: ['journey']
	},

	// Features & Collaborations (Guest Appearances)
	{
		id: 's108',
		title: 'Start Over',
		artist: 'Flame',
		album: 'Royal Flush',
		year: 2013,
		trackNumber: 1,
		featuring: ['NF']
	},
	{
		id: 's109',
		title: 'Til the Day I Die',
		artist: 'TobyMac',
		album: 'This Is Not a Test',
		year: 2015,
		trackNumber: 2,
		featuring: ['NF']
	},
	{
		id: 's110',
		title: 'The One With My Friends',
		artist: 'Marty',
		album: 'Here We Go',
		year: 2015,
		trackNumber: 3,
		featuring: ['NF', 'John Givez', 'Wordsplayed', 'Kaleb Mitchell', 'Fern']
	},
	{
		id: 's111',
		title: 'Epiphany',
		artist: 'Futuristic',
		album: 'The Rise',
		year: 2017,
		trackNumber: 4,
		featuring: ['NF']
	}
];

// Import and merge YouTube video IDs and Spotify track IDs
import { youtubeVideos } from './youtube-videos';
import { spotifyTracks } from './spotify-tracks';

// Create songs array with YouTube and Spotify IDs merged
const songsWithVideos = songs.map((song) => ({
	...song,
	youtubeId: youtubeVideos[song.id],
	spotifyId: spotifyTracks[song.id]
}));

// Export songs with videos for presets
export { songsWithVideos };

// Helper to get songs for a specific album
export function getSongsByAlbum(albumId: string): Song[] {
	return songsWithVideos.filter((song) => song.albumId === albumId);
}

// Helper to get songs by tag
export function getSongsByTag(tag: string): Song[] {
	return songsWithVideos.filter((song) => song.tags?.includes(tag));
}

// Helper to get album by id
export function getAlbumById(albumId: string): Album | undefined {
	return albums.find((album) => album.id === albumId);
}

// Helper to get song with YouTube ID
export function getSongWithVideo(songId: string): Song | undefined {
	return songsWithVideos.find((s) => s.id === songId);
}

// Helper to get all songs with YouTube IDs merged
export function getAllSongsWithVideos(): Song[] {
	return songsWithVideos;
}
