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
		id: 'moments',
		title: 'Moments',
		year: 2010,
		type: 'album',
		coverPlaceholder: '🎵',
		coverImage: covers.moments
	},
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
	// Moments (2010)
	{
		id: 's001',
		title: 'Escape',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 1
	},
	{
		id: 's002',
		title: 'Miss You',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 2
	},
	{
		id: 's003',
		title: 'Circles',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 3
	},
	{
		id: 's004',
		title: 'Beautiful',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 4
	},
	{
		id: 's005',
		title: 'Moments',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 5
	},
	{
		id: 's006',
		title: 'Your Grace',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 6
	},
	{
		id: 's007',
		title: 'Overdose',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 7
	},
	{
		id: 's008',
		title: 'Wrap Me In Your Arms',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 8
	},
	{
		id: 's009',
		title: 'Falling Apart',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 9
	},
	{
		id: 's010',
		title: 'Reality',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 10
	},
	{
		id: 's011',
		title: "I'm Gonna Fly",
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 11
	},
	{
		id: 's012',
		title: 'Until I Die',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 12
	},
	{
		id: 's013',
		title: 'With Me',
		album: 'Moments',
		albumId: 'moments',
		year: 2010,
		trackNumber: 13
	},

	// I'm Free EP (2012)
	{
		id: 's014',
		title: 'Understand Me',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 1
	},
	{
		id: 's015',
		title: 'Alone',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 2,
		featuring: ['Sean Simmonds']
	},
	{
		id: 's016',
		title: "I've Been There",
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 3
	},
	{
		id: 's017',
		title: 'Not The Same',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 4
	},
	{
		id: 's018',
		title: "I'm Free",
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 5
	},
	{
		id: 's019',
		title: 'I Got Jesus',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 6
	},
	{
		id: 's020',
		title: "That's Alright",
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 7
	},
	{
		id: 's021',
		title: 'Invisible',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 8
	},
	{
		id: 's022',
		title: 'Goodbye',
		album: "I'm Free",
		albumId: 'imfree',
		year: 2012,
		trackNumber: 9
	},

	// NF EP (2014)
	{ id: 's023', title: 'All I Have', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 1 },
	{ id: 's024', title: 'Wake Up', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 2 },
	{ id: 's025', title: 'Hands Up', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 3 },
	{ id: 's026', title: 'Only One', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 4 },
	{
		id: 's027',
		title: 'Thing Called Love',
		album: 'NF',
		albumId: 'nf',
		year: 2014,
		trackNumber: 5
	},
	{ id: 's028', title: 'Just Being Me', album: 'NF', albumId: 'nf', year: 2014, trackNumber: 6 },

	// Mansion (2015)
	{
		id: 's029',
		title: 'Intro',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 1,
		tags: ['journey']
	},
	{
		id: 's030',
		title: 'Mansion',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 2,
		featuring: ['Fleurie'],
		tags: ['gateway', 'journey']
	},
	{
		id: 's031',
		title: 'All I Have',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 3,
		tags: ['journey']
	},
	{ id: 's032', title: 'Wait', album: 'Mansion', albumId: 'mansion', year: 2015, trackNumber: 4 },
	{
		id: 's033',
		title: 'Wake Up',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 5
	},
	{
		id: 's034',
		title: 'Face It',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 6
	},
	{
		id: 's035',
		title: 'Motivated',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 7
	},
	{
		id: 's036',
		title: 'Notepad',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 8,
		tags: ['journey']
	},
	{
		id: 's037',
		title: 'Turn The Music Up',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 9
	},
	{
		id: 's038',
		title: 'Paralyzed',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 10,
		tags: ['journey']
	},
	{
		id: 's039',
		title: "I'll Keep On",
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 11,
		featuring: ['Jeremiah Carlson']
	},
	{
		id: 's040',
		title: 'Can You Hold Me',
		album: 'Mansion',
		albumId: 'mansion',
		year: 2015,
		trackNumber: 12,
		featuring: ['Britt Nicole']
	},

	// Therapy Session (2016)
	{
		id: 's041',
		title: 'Intro 2',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 1,
		tags: ['journey']
	},
	{
		id: 's042',
		title: 'Therapy Session',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 2,
		tags: ['gateway', 'journey']
	},
	{
		id: 's043',
		title: 'I Just Wanna Know',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 3,
		tags: ['journey']
	},
	{
		id: 's044',
		title: 'How Could You Leave Us',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 4,
		tags: ['gateway', 'journey']
	},
	{
		id: 's045',
		title: 'Breathe',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 5
	},
	{
		id: 's046',
		title: 'Real',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 6,
		tags: ['journey']
	},
	{
		id: 's047',
		title: 'Oh Lord',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 7,
		tags: ['journey']
	},
	{
		id: 's048',
		title: 'I Can Feel It',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 8
	},
	{
		id: 's049',
		title: 'Got You On My Mind',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 9
	},
	{
		id: 's050',
		title: "Grindin'",
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 10,
		featuring: ['Marty'],
		tags: ['journey']
	},
	{
		id: 's051',
		title: "Wish You Wouldn't",
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 11
	},
	{
		id: 's052',
		title: 'Statement',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 12,
		tags: ['journey']
	},
	{
		id: 's053',
		title: 'All I Do',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 13
	},
	{
		id: 's054',
		title: 'Lost In The Moment',
		album: 'Therapy Session',
		albumId: 'therapy',
		year: 2016,
		trackNumber: 14,
		featuring: ['Jonathan Thulin']
	},

	// Perception (2017)
	{
		id: 's055',
		title: 'Intro III',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 1,
		tags: ['journey']
	},
	{
		id: 's056',
		title: 'Outcast',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 2,
		tags: ['journey']
	},
	{
		id: 's057',
		title: '10 Feet Down',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 3,
		featuring: ['Ruelle'],
		tags: ['journey']
	},
	{
		id: 's058',
		title: 'Green Lights',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 4,
		tags: ['journey']
	},
	{
		id: 's059',
		title: 'Dreams',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 5,
		tags: ['journey', 'popular']
	},
	{
		id: 's060',
		title: 'Let You Down',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 6,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's061',
		title: 'Destiny',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 7,
		tags: ['journey']
	},
	{
		id: 's062',
		title: 'My Life',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 8,
		tags: ['journey']
	},
	{
		id: 's063',
		title: "You're Special",
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 9
	},
	{
		id: 's064',
		title: 'If You Want Love',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 10,
		tags: ['journey', 'popular']
	},
	{
		id: 's065',
		title: 'Remember This',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 11,
		tags: ['journey', 'popular']
	},
	{
		id: 's066',
		title: 'Know',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 12
	},
	{
		id: 's067',
		title: 'Lie',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 13,
		tags: ['journey']
	},
	{
		id: 's068',
		title: '3 A.M.',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 14
	},
	{
		id: 's069',
		title: 'One Hundred',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 15,
		tags: ['journey']
	},
	{
		id: 's070',
		title: 'Outro',
		album: 'Perception',
		albumId: 'perception',
		year: 2017,
		trackNumber: 16,
		tags: ['journey']
	},

	// The Search (2019)
	{
		id: 's071',
		title: 'The Search',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 1,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's072',
		title: 'Leave Me Alone',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 2,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's073',
		title: 'Change',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 3,
		tags: ['journey']
	},
	{
		id: 's074',
		title: 'My Stress',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 4
	},
	{
		id: 's075',
		title: 'Nate',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 5,
		tags: ['journey', 'popular']
	},
	{
		id: 's076',
		title: 'Time',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 6,
		tags: ['journey']
	},
	{
		id: 's077',
		title: 'Returns',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 7,
		tags: ['journey']
	},
	{
		id: 's078',
		title: 'When I Grow Up',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 8,
		tags: ['journey', 'popular']
	},
	{
		id: 's079',
		title: 'Only',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 9,
		featuring: ['Sasha Sloan'],
		tags: ['journey']
	},
	{
		id: 's080',
		title: 'Let Me Go',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 10,
		tags: ['journey']
	},
	{
		id: 's081',
		title: '-Interlude-',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 11
	},
	{
		id: 's082',
		title: 'Hate Myself',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 12,
		tags: ['journey']
	},
	{
		id: 's083',
		title: 'I Miss The Days',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 13,
		tags: ['journey']
	},
	{
		id: 's084',
		title: 'No Excuses',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 14,
		tags: ['journey']
	},
	{
		id: 's085',
		title: 'Like This',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 15,
		tags: ['journey']
	},
	{
		id: 's086',
		title: 'Options',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 16
	},
	{
		id: 's087',
		title: 'WHY',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 17,
		tags: ['journey']
	},
	{
		id: 's088',
		title: 'Thinking',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 18
	},
	{
		id: 's089',
		title: 'Trauma',
		album: 'The Search',
		albumId: 'search',
		year: 2019,
		trackNumber: 19,
		tags: ['journey']
	},

	// Clouds (The Mixtape) (2021)
	{
		id: 's090',
		title: 'CLOUDS',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 1,
		tags: ['popular']
	},
	{
		id: 's091',
		title: "THAT'S A JOKE",
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 2,
		tags: ['popular']
	},
	{
		id: 's092',
		title: 'JUST LIKE YOU',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 3,
		tags: ['journey']
	},
	{
		id: 's093',
		title: 'STORY',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 4
	},
	{
		id: 's094',
		title: 'PRIDEFUL',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 5,
		tags: ['journey']
	},
	{
		id: 's095',
		title: 'LOST',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 6,
		featuring: ['Hopsin'],
		tags: ['journey']
	},
	{
		id: 's096',
		title: 'LAYERS',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 7,
		tags: ['journey']
	},
	{
		id: 's097',
		title: 'DRIFTING',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 8,
		tags: ['journey']
	},
	{
		id: 's098',
		title: 'TRUST',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 9,
		featuring: ['Tech N9ne']
	},
	{
		id: 's099',
		title: 'PAID MY DUES',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 10,
		tags: ['journey', 'popular']
	},
	{
		id: 's100',
		title: 'CLOUDS (Edit)',
		album: 'Clouds (The Mixtape)',
		albumId: 'clouds',
		year: 2021,
		trackNumber: 11
	},

	// HOPE (2023)
	{
		id: 's101',
		title: 'HOPE',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 1,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's102',
		title: 'MOTTO',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 2,
		tags: ['popular']
	},
	{
		id: 's103',
		title: 'CAREFUL',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 3,
		featuring: ['Cordae']
	},
	{
		id: 's104',
		title: 'MAMA',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 4,
		tags: ['journey', 'popular']
	},
	{
		id: 's105',
		title: 'HAPPY',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 5,
		tags: ['journey', 'popular']
	},
	{ id: 's106', title: 'PANDEMONIUM', album: 'HOPE', albumId: 'hope', year: 2023, trackNumber: 6 },
	{ id: 's107', title: 'SUFFICE', album: 'HOPE', albumId: 'hope', year: 2023, trackNumber: 7 },
	{
		id: 's108',
		title: 'GONE',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 8,
		featuring: ['Julia Michaels']
	},
	{
		id: 's109',
		title: 'BULLET',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 9,
		tags: ['journey']
	},
	{
		id: 's110',
		title: 'TURN MY BACK',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 10
	},
	{ id: 's111', title: 'MISTAKE', album: 'HOPE', albumId: 'hope', year: 2023, trackNumber: 11 },
	{ id: 's112', title: 'LET EM PRAY', album: 'HOPE', albumId: 'hope', year: 2023, trackNumber: 12 },
	{
		id: 's113',
		title: 'RUNNING',
		album: 'HOPE',
		albumId: 'hope',
		year: 2023,
		trackNumber: 13,
		tags: ['journey']
	},

	// FEAR EP (2025)
	{
		id: 's114',
		title: 'FEAR',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 1,
		tags: ['gateway', 'journey', 'popular']
	},
	{
		id: 's115',
		title: 'HOME',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 2,
		tags: ['journey']
	},
	{
		id: 's116',
		title: 'WHO I WAS',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 3,
		featuring: ['mgk'],
		tags: ['journey']
	},
	{
		id: 's117',
		title: 'GIVE ME A REASON',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 4,
		tags: ['journey']
	},
	{
		id: 's118',
		title: 'SORRY',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 5,
		featuring: ['James Arthur'],
		tags: ['journey']
	},
	{
		id: 's119',
		title: 'WASHED UP',
		album: 'FEAR',
		albumId: 'fear',
		year: 2025,
		trackNumber: 6,
		tags: ['journey']
	},

	// Features & Collaborations (Guest Appearances)
	{
		id: 's120',
		title: 'Start Over',
		artist: 'Flame',
		album: 'Royal Flush',
		year: 2013,
		trackNumber: 1,
		featuring: ['NF']
	},
	{
		id: 's121',
		title: 'Til the Day I Die',
		artist: 'TobyMac',
		album: 'This Is Not a Test',
		year: 2015,
		trackNumber: 2,
		featuring: ['NF']
	},
	{
		id: 's122',
		title: 'The One With My Friends',
		artist: 'Marty',
		album: 'Here We Go',
		year: 2015,
		trackNumber: 3,
		featuring: ['NF', 'John Givez', 'Wordsplayed', 'Kaleb Mitchell', 'Fern']
	},
	{
		id: 's123',
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
