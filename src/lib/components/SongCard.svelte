<script lang="ts">
	import type { Song } from '$lib/data/nf-discography';
	import { getAlbumById } from '$lib/data/nf-discography';
	import { tierStore } from '$lib/stores/tier-store.svelte';

	interface Props {
		song: Song;
		size?: 'small' | 'medium' | 'large';
		showAlbum?: boolean;
		interactive?: boolean;
		onvideoclick?: (youtubeId: string) => void;
		onspotifyclick?: (spotifyId: string) => void;
	}

	let {
		song,
		size = 'medium',
		showAlbum = true,
		interactive = true,
		onvideoclick,
		onspotifyclick
	}: Props = $props();

	const album = $derived(getAlbumById(song.albumId));

	const sizeClasses = {
		small: 'text-sm',
		medium: 'text-base',
		large: 'text-lg'
	};

	const albumArtSize = {
		small: 'w-12 h-12',
		medium: 'w-16 h-16',
		large: 'w-24 h-24'
	};

	function handleVideoClick(e: MouseEvent) {
		if (song.youtubeId && onvideoclick) {
			e.stopPropagation();
			onvideoclick(song.youtubeId);
		}
	}

	function handleSpotifyClick(e: MouseEvent) {
		if (song.spotifyId && onspotifyclick) {
			e.stopPropagation();
			onspotifyclick(song.spotifyId);
		}
	}
</script>

<div
	class="song-card flex items-center gap-3 rounded-lg p-3 transition-colors {sizeClasses[size]}"
	class:interactive
	class:fear={tierStore.theme === 'fear'}
	class:hope={tierStore.theme === 'hope'}
>
	<!-- Album Art -->
	<div
		class="album-art {albumArtSize[
			size
		]} flex shrink-0 items-center justify-center overflow-hidden rounded"
		class:fear={tierStore.theme === 'fear'}
		class:hope={tierStore.theme === 'hope'}
	>
		{#if album?.coverImage}
			<img
				src={album.coverImage}
				alt="{album.title} cover"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
		{:else}
			<span class="text-3xl">{album?.coverPlaceholder || '🎵'}</span>
		{/if}
	</div>

	<!-- Song Info -->
	<div class="min-w-0 flex-1">
		<div class="flex items-center gap-2">
			<h3 class="truncate font-semibold">
				{#if song.artist}
					{song.artist} - {song.title}
				{:else}
					{song.title}
				{/if}
			</h3>
			<div class="flex shrink-0 gap-1">
				{#if song.youtubeId && onvideoclick}
					<button
						type="button"
						class="media-icon text-sm opacity-70 transition-opacity hover:opacity-100"
						onclick={handleVideoClick}
						title="Watch on YouTube"
					>
						<i class="ri-youtube-fill"></i>
					</button>
				{/if}
				{#if song.spotifyId && onspotifyclick}
					<button
						type="button"
						class="media-icon text-sm opacity-70 transition-opacity hover:opacity-100"
						onclick={handleSpotifyClick}
						title="Listen on Spotify"
					>
						<i class="ri-spotify-fill"></i>
					</button>
				{/if}
			</div>
		</div>
		{#if showAlbum && album}
			<p class="truncate text-sm opacity-70">
				{album.title} ({song.year})
			</p>
		{/if}
		{#if song.featuring && song.featuring.length > 0}
			<p class="truncate text-xs opacity-60">feat. {song.featuring.join(', ')}</p>
		{/if}
	</div>
</div>

<style>
	.song-card.interactive {
		cursor: pointer;
	}

	.song-card.interactive:hover {
		transform: translateY(-1px);
	}

	.song-card.fear {
		background-color: var(--fear-surface);
		border: 1px solid var(--fear-border);
	}

	.song-card.fear.interactive:hover {
		background-color: var(--fear-surface-hover);
	}

	.song-card.hope {
		background-color: var(--hope-surface);
		border: 1px solid var(--hope-border);
	}

	.song-card.hope.interactive:hover {
		background-color: var(--hope-surface-hover);
	}

	.album-art.fear {
		background-color: var(--fear-bg);
	}

	.album-art.hope {
		background-color: var(--hope-bg);
	}

	.media-icon {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}
</style>
