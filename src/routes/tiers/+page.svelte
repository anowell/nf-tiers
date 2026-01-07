<script lang="ts">
	import { onMount } from 'svelte';
	import { goto, replaceState } from '$app/navigation';
	import { tierStore } from '$lib/stores/tier-store.svelte';
	import MobileRanker from '$lib/components/MobileRanker.svelte';
	import DesktopRanker from '$lib/components/DesktopRanker.svelte';
	import VideoModal from '$lib/components/VideoModal.svelte';

	let isMobile = $state(false);
	let showFinalShareModal = $state(false);
	let copied = $state(false);
	let videoYoutubeId = $state<string | null>(null);
	let isInitialLoad = $state(true);

	onMount(() => {
		// Check if preset is set, if not redirect to home
		if (!tierStore.currentPreset) {
			// Check for tier state in URL
			const params = new URLSearchParams(window.location.search);
			const tierParam = params.get('t');
			if (tierParam) {
				tierStore.loadFromUrl(tierParam);
			} else {
				goto('/');
				return;
			}
		}

		// Detect mobile
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);

		// Mark initial load as complete after a brief delay
		setTimeout(() => {
			isInitialLoad = false;
		}, 100);

		return () => window.removeEventListener('resize', checkMobile);
	});

	async function copyToClipboard() {
		await navigator.clipboard.writeText(tierStore.shareUrl);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	function handleVideoClick(youtubeId: string) {
		videoYoutubeId = youtubeId;
	}

	function handleShowFinalShare() {
		showFinalShareModal = true;
	}

	async function shareToTwitter() {
		const text = `Check out my NF tier list!`;
		const url = encodeURIComponent(tierStore.shareUrl);
		window.open(
			`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`,
			'_blank'
		);
	}

	async function shareToFacebook() {
		const url = encodeURIComponent(tierStore.shareUrl);
		window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
	}

	async function shareToReddit() {
		const title = encodeURIComponent('My NF Tier List');
		const url = encodeURIComponent(tierStore.shareUrl);
		window.open(`https://reddit.com/submit?title=${title}&url=${url}`, '_blank');
	}

	// Update URL on ranking changes
	$effect(() => {
		if (!isInitialLoad && tierStore.progress.ranked > 0) {
			const encoded = tierStore.shareUrl.split('?t=')[1];
			if (encoded) {
				replaceState(`?t=${encoded}`, {});
			}
		}
	});

	// Easter egg: redirect to haters page if >=50% F ratings
	$effect(() => {
		if (tierStore.shouldShowHatersPage) {
			goto('/haters');
		}
	});
</script>

<!-- Main Content -->
<main class="flex-1 overflow-hidden">
	{#if isMobile}
		<MobileRanker {handleVideoClick} {handleShowFinalShare} />
	{:else}
		<DesktopRanker {handleVideoClick} {handleShowFinalShare} />
	{/if}
</main>

<!-- Video Modal -->
{#if videoYoutubeId}
	<VideoModal youtubeId={videoYoutubeId} onclose={() => (videoYoutubeId = null)} />
{/if}

<!-- Final Share Modal -->
{#if showFinalShareModal}
	<div
		class="modal-overlay"
		role="button"
		tabindex="0"
		onclick={() => (showFinalShareModal = false)}
		onkeydown={(e) => e.key === 'Escape' && (showFinalShareModal = false)}
	>
		<div
			class="modal-content w-full max-w-md rounded-lg p-6"
			class:fear={tierStore.theme === 'fear'}
			class:hope={tierStore.theme === 'hope'}
			role="dialog"
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
		>
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-lg font-bold">Share Your Tier List</h3>
				<button
					type="button"
					class="text-2xl leading-none"
					onclick={() => (showFinalShareModal = false)}
				>
					×
				</button>
			</div>

			<div class="space-y-4">
				<!-- Copy URL -->
				<button
					type="button"
					class="share-button w-full rounded-lg border p-3 transition-colors"
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
					onclick={copyToClipboard}
				>
					<i class="ri-link text-2xl"></i>
					<span class="font-semibold">{copied ? 'Copied!' : 'Copy Link'}</span>
				</button>

				<!-- Social Share Buttons -->
				<div class="grid grid-cols-3 gap-2">
					<button
						type="button"
						class="share-button rounded-lg border p-3 transition-colors"
						class:fear={tierStore.theme === 'fear'}
						class:hope={tierStore.theme === 'hope'}
						onclick={shareToTwitter}
					>
						<i class="ri-twitter-x-fill text-2xl"></i>
						<span class="text-sm">Twitter</span>
					</button>
					<button
						type="button"
						class="share-button rounded-lg border p-3 transition-colors"
						class:fear={tierStore.theme === 'fear'}
						class:hope={tierStore.theme === 'hope'}
						onclick={shareToFacebook}
					>
						<i class="ri-facebook-fill text-2xl"></i>
						<span class="text-sm">Facebook</span>
					</button>
					<button
						type="button"
						class="share-button rounded-lg border p-3 transition-colors"
						class:fear={tierStore.theme === 'fear'}
						class:hope={tierStore.theme === 'hope'}
						onclick={shareToReddit}
					>
						<i class="ri-reddit-fill text-2xl"></i>
						<span class="text-sm">Reddit</span>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

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

	.modal-content.fear {
		background-color: var(--fear-surface);
		color: var(--fear-text);
	}

	.modal-content.hope {
		background-color: var(--hope-surface);
		color: var(--hope-text);
	}

	.share-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.share-button.fear {
		background-color: var(--fear-surface);
		border-color: var(--fear-border);
		color: var(--fear-text);
	}

	.share-button.hope {
		background-color: var(--hope-surface);
		border-color: var(--hope-border);
		color: var(--hope-text);
	}

	.share-button.fear:hover {
		background-color: var(--fear-surface-hover);
	}

	.share-button.hope:hover {
		background-color: var(--hope-surface-hover);
	}
</style>
