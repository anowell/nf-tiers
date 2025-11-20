<script lang="ts">
	import { tierStore } from '$lib/stores/tier-store.svelte';

	interface Props {
		youtubeId: string;
		onclose: () => void;
	}

	let { youtubeId, onclose }: Props = $props();
</script>

<div class="modal-overlay" onclick={onclose}>
	<div
		class="modal-content"
		class:fear={tierStore.theme === 'fear'}
		class:hope={tierStore.theme === 'hope'}
		onclick={(e) => e.stopPropagation()}
	>
		<div class="mb-4 flex items-center justify-between">
			<h3 class="text-lg font-bold">Watch Video</h3>
			<button type="button" class="close-button text-2xl leading-none" onclick={onclose}>
				×
			</button>
		</div>

		<div class="video-container">
			<iframe
				src="https://www.youtube.com/embed/{youtubeId}"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				class="video-iframe"
			></iframe>
		</div>

		<div class="mt-4 flex gap-2">
			<a
				href="https://www.youtube.com/watch?v={youtubeId}"
				target="_blank"
				rel="noopener noreferrer"
				class="flex-1 rounded border px-4 py-2 text-center text-sm transition-colors"
				class:fear={tierStore.theme === 'fear'}
				class:hope={tierStore.theme === 'hope'}
			>
				Open in YouTube
			</a>
			<button
				type="button"
				class="flex-1 rounded border px-4 py-2 text-sm transition-colors"
				class:fear={tierStore.theme === 'fear'}
				class:hope={tierStore.theme === 'hope'}
				onclick={onclose}
			>
				Close
			</button>
		</div>
	</div>
</div>

<style>
	.modal-overlay {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		z-index: 100;
	}

	.modal-content {
		width: 100%;
		max-width: 900px;
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

	.video-container {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
	}

	.video-iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
	}

	.close-button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		opacity: 0.7;
		transition: opacity 0.2s;
	}

	.close-button:hover {
		opacity: 1;
	}

	a.fear,
	button.fear {
		background-color: var(--fear-surface);
		border-color: var(--fear-border);
		color: var(--fear-text);
	}

	a.hope,
	button.hope {
		background-color: var(--hope-surface);
		border-color: var(--hope-border);
		color: var(--hope-text);
	}

	a.fear:hover,
	button.fear:hover {
		background-color: var(--fear-surface-hover);
	}

	a.hope:hover,
	button.hope:hover {
		background-color: var(--hope-surface-hover);
	}
</style>
