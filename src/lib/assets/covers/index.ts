// Album cover art from Cover Art Archive and Apple Music
// Using direct URLs instead of hosting files locally
import nfLogo from './nf-logo.png';

export const covers = {
	// Moments (2010) - Independent release (cover not available on Cover Art Archive)
	moments: undefined,

	// I'm Free EP (2012) - Cover Art Archive
	imfree: 'https://coverartarchive.org/release/d873cf4f-5935-4623-b005-50695a330303/front-500',

	// NF EP (2014) - Cover Art Archive
	nf: 'https://coverartarchive.org/release/f46c50cc-3282-4d35-94f6-f6484dfdfce4/front-500',

	// Mansion (2015) - Cover Art Archive (Digital Media)
	mansion: 'https://coverartarchive.org/release/916b1a3c-2f94-4396-863f-86ee86fc075f/front-500',

	// Therapy Session (2016) - Cover Art Archive (Digital Media)
	therapy: 'https://coverartarchive.org/release/7b264324-e987-4b01-b189-730ac34341b6/front-500',

	// Perception (2017) - Cover Art Archive (CD release)
	perception: 'https://coverartarchive.org/release/04e81aad-a1c0-4469-8265-7ade9be74cd8/front-500',

	// The Search (2019) - Apple Music CDN
	search: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3e/fe/fa/3efefa81-fa46-8124-46b1-1b340baff0e9/19UMGIM46307.rgb.jpg/500x500bb.jpg',

	// Clouds (The Mixtape) (2021) - Apple Music CDN (not in Cover Art Archive)
	clouds:
		'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/38/87/c23887b2-b0db-6962-61ac-203f801c5fa3/21UMGIM08880.rgb.jpg/500x500bb.jpg',

	// HOPE (2023) - Cover Art Archive (Digital Media)
	hope: 'https://coverartarchive.org/release/ea5320f9-2155-445c-ad77-04d310a07232/front-500',

	// FEAR EP (2025) - Apple Music CDN (not yet on MusicBrainz)
	fear: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ae/31/77/ae317733-57e3-cd62-6bfe-0b1223d7e401/25UM1IM68345.rgb.jpg/500x500bb.jpg',

	// Fallback NF logo (white on transparent, needs black background)
	fallback: nfLogo
};

export default covers;
