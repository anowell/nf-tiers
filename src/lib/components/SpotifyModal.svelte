<script lang="ts">
	import { tierStore } from '$lib/stores/tier-store.svelte';

	interface Props {
		spotifyId: string;
		onclose: () => void;
	}

	let { spotifyId, onclose }: Props = $props();
</script>

<div class="modal-overlay" onclick={onclose}>
	<div
		class="modal-content"
		class:fear={tierStore.theme === 'fear'}
		class:hope={tierStore.theme === 'hope'}
		onclick={(e) => e.stopPropagation()}
	>
		<div class="mb-4 flex items-center justify-between">
			<h3 class="text-lg font-bold">Listen on Spotify</h3>
			<button type="button" class="text-2xl leading-none" onclick={onclose}> × </button>
		</div>

		<div class="w-full overflow-hidden rounded">
			<iframe
				src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`}
				width="100%"
				height="352"
				frameborder="0"
				allowfullscreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				title="Spotify Player"
			></iframe>
		</div>
	</div>
</div>

<style>
	.modal-overlay {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		z-index: 50;
	}

	.modal-content {
		width: 100%;
		max-width: 600px;
		padding: 1.5rem;
		border-radius: 0.5rem;
	}

	.modal-content.fear {
		background-color: var(--fear-surface);
		color: var(--fear-text);
	}

	.modal-content.hope {
		background-color: var(--hope-surface);
		color: var(--hope-text);
	}
</style>
