<script lang="ts">
	import SongCard from './SongCard.svelte';
	import TierButton from './TierButton.svelte';
	import SpotifyModal from './SpotifyModal.svelte';
	import { tierStore } from '$lib/stores/tier-store.svelte';
	import type { TierRank } from '$lib/encoding';

	interface Props {
		handleVideoClick: (youtubeId: string) => void;
		handleShowFinalShare: () => void;
	}

	let { handleVideoClick, handleShowFinalShare }: Props = $props();

	let showTracklistModal = $state(false);
	let showTierModal = $state<TierRank | null>(null);
	let spotifyId = $state<string | null>(null);

	function handleTierSelect(tier: TierRank) {
		tierStore.setPendingRank(tier);
	}

	function handleConfirm() {
		tierStore.confirmRank();
	}

	function handleReset() {
		tierStore.resetPendingRank();
	}

	function handleSkip() {
		tierStore.skipCurrentSong();
	}

	function handleRerankSong(songId: string) {
		tierStore.rerankSong(songId);
		showTierModal = null;
	}

	function handleSpotifyClick(id: string) {
		spotifyId = id;
	}
</script>

<div
	class="mobile-ranker flex h-full flex-col"
	class:fear={tierStore.theme === 'fear'}
	class:hope={tierStore.theme === 'hope'}
>
	<!-- Progress Bar -->
	<div
		class="progress-bar border-b p-4"
		class:fear={tierStore.theme === 'fear'}
		class:hope={tierStore.theme === 'hope'}
	>
		<div class="mb-2 flex justify-between text-sm">
			<span>Progress</span>
			<span
				>{tierStore.progress.ranked}/{tierStore.progress.total} ({tierStore.progress
					.percentage}%)</span
			>
		</div>
		<div
			class="h-2 overflow-hidden rounded-full"
			class:fear={tierStore.theme === 'fear'}
			class:hope={tierStore.theme === 'hope'}
		>
			<div
				class="h-full transition-all duration-300"
				class:fear={tierStore.theme === 'fear'}
				class:hope={tierStore.theme === 'hope'}
				style="width: {tierStore.progress.percentage}%"
			></div>
		</div>
	</div>

	<!-- Current Song -->
	{#if tierStore.currentSong}
		<div class="flex flex-1 flex-col overflow-auto p-4">
			<div class="mb-4">
				<h2 class="mb-4 text-center text-xl font-bold">Next Up</h2>
				<SongCard
					song={tierStore.currentSong}
					size="large"
					onvideoclick={handleVideoClick}
					onspotifyclick={handleSpotifyClick}
				/>
			</div>

			<!-- Tier Selection -->
			<div class="mb-4">
				<h3 class="mb-2 text-sm font-semibold">Select Tier:</h3>
				<div class="grid grid-cols-3 gap-2">
					{#each ['s', 'a', 'b', 'c', 'd', 'f'] as tier (tier)}
						<TierButton
							tier={tier as TierRank}
							selected={tierStore.pendingRank === tier}
							onclick={() => handleTierSelect(tier as TierRank)}
						/>
					{/each}
				</div>
			</div>

			<!-- Recently Ranked in Selected Tier -->
			{#if tierStore.pendingRank}
				{@const tierGroup = tierStore.tierGroups.find((g) => g.tier === tierStore.pendingRank)}
				{#if tierGroup && tierGroup.songs.length > 0}
					<div class="mb-4">
						<div class="mb-2 flex items-center justify-between">
							<h3 class="text-sm font-semibold">{tierGroup.label}</h3>
							<button
								type="button"
								class="rounded px-2 py-1 text-xs"
								class:fear={tierStore.theme === 'fear'}
								class:hope={tierStore.theme === 'hope'}
								onclick={() => (showTierModal = tierGroup.tier)}
							>
								Change
							</button>
						</div>
						<div class="space-y-2">
							{#each tierGroup.songs.slice(-3) as song (song.id)}
								<SongCard
									{song}
									size="small"
									showAlbum={false}
									interactive={false}
									onvideoclick={handleVideoClick}
								/>
							{/each}
							{#if tierGroup.songs.length > 3}
								<p class="text-center text-xs opacity-60">
									...and {tierGroup.songs.length - 3} more
								</p>
							{/if}
						</div>
					</div>
				{/if}
			{/if}

			<!-- Action Buttons -->
			<div class="mt-auto space-y-2">
				<button
					type="button"
					class="w-full rounded-lg p-3 font-bold transition-colors"
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
					class:disabled={!tierStore.pendingRank}
					disabled={!tierStore.pendingRank}
					onclick={handleConfirm}
				>
					Confirm
				</button>
				<div class="flex gap-2">
					<button
						type="button"
						class="secondary flex-1 rounded-lg border p-2 text-sm transition-colors"
						class:fear={tierStore.theme === 'fear'}
						class:hope={tierStore.theme === 'hope'}
						onclick={handleReset}
					>
						Reset
					</button>
					<button
						type="button"
						class="secondary flex-1 rounded-lg border p-2 text-sm transition-colors"
						class:fear={tierStore.theme === 'fear'}
						class:hope={tierStore.theme === 'hope'}
						onclick={handleSkip}
					>
						Skip
					</button>
					<button
						type="button"
						class="secondary flex flex-1 items-center justify-center gap-1 rounded-lg border p-2 text-sm transition-colors"
						class:fear={tierStore.theme === 'fear'}
						class:hope={tierStore.theme === 'hope'}
						onclick={() => (showTracklistModal = true)}
					>
						<i class="ri-music-2-line"></i>
						Tracklist
					</button>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex flex-1 flex-col items-center justify-center p-4">
			<div class="mb-6 text-center">
				<h2 class="mb-2 text-2xl font-bold">All Done!</h2>
				<p class="mb-4 opacity-70">You've ranked all the songs.</p>
			</div>
			<button
				type="button"
				class="share-final-button w-full max-w-xs rounded-lg border-2 p-3 font-bold transition-colors"
				class:fear={tierStore.theme === 'fear'}
				class:hope={tierStore.theme === 'hope'}
				onclick={handleShowFinalShare}
			>
				Share These Tiers
			</button>
			<div class="mt-8 text-center text-xs opacity-60">
				<p>Made by Tony</p>
				<a
					href="https://buymeacoffee.com/anowell"
					target="_blank"
					rel="noopener noreferrer"
					class="coffee-link mt-2 inline-flex items-center gap-1 rounded border px-3 py-1 text-xs transition-colors hover:opacity-80"
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
				>
					<i class="ri-cup-line"></i>
					Buy me a coffee
				</a>
			</div>
		</div>
	{/if}
</div>

<!-- Tracklist Modal -->
{#if showTracklistModal}
	<div class="modal-overlay" onclick={() => (showTracklistModal = false)}>
		<div
			class="modal-content"
			class:fear={tierStore.theme === 'fear'}
			class:hope={tierStore.theme === 'hope'}
			onclick={(e) => e.stopPropagation()}
		>
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-lg font-bold">Select Song</h3>
				<button
					type="button"
					class="text-2xl leading-none"
					onclick={() => (showTracklistModal = false)}
				>
					×
				</button>
			</div>
			<div class="max-h-96 space-y-2 overflow-auto">
				{#each tierStore.unrankedSongs as song (song.id)}
					<button
						type="button"
						class="w-full text-left"
						onclick={() => {
							tierStore.changeSong(song.id);
							showTracklistModal = false;
						}}
					>
						<SongCard {song} size="small" onvideoclick={handleVideoClick} />
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}

<!-- Tier Songs Modal -->
{#if showTierModal}
	{@const tierGroup = tierStore.tierGroups.find((g) => g.tier === showTierModal)}
	<div class="modal-overlay" onclick={() => (showTierModal = null)}>
		<div
			class="modal-content"
			class:fear={tierStore.theme === 'fear'}
			class:hope={tierStore.theme === 'hope'}
			onclick={(e) => e.stopPropagation()}
		>
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-lg font-bold">{tierGroup?.label} - Select to Change Rating</h3>
				<button type="button" class="text-2xl leading-none" onclick={() => (showTierModal = null)}>
					×
				</button>
			</div>
			<div class="max-h-96 space-y-2 overflow-auto">
				{#if tierGroup}
					{#each tierGroup.songs as song (song.id)}
						<button
							type="button"
							class="w-full text-left"
							onclick={() => handleRerankSong(song.id)}
						>
							<SongCard {song} size="small" onvideoclick={handleVideoClick} />
						</button>
					{/each}
				{/if}
			</div>
		</div>
	</div>
{/if}

<!-- Spotify Modal -->
{#if spotifyId}
	<SpotifyModal {spotifyId} onclose={() => (spotifyId = null)} />
{/if}

<style>
	.progress-bar.fear {
		background-color: var(--fear-surface);
		border-color: var(--fear-border);
	}

	.progress-bar.hope {
		background-color: var(--hope-surface);
		border-color: var(--hope-border);
	}

	.progress-bar > div.fear {
		background-color: var(--fear-surface);
	}

	.progress-bar > div.hope {
		background-color: var(--hope-surface);
	}

	.progress-bar > div > div.fear {
		background-color: var(--fear-accent);
	}

	.progress-bar > div > div.hope {
		background-color: var(--hope-accent);
	}

	button.fear:not(.secondary) {
		background-color: var(--fear-accent);
		color: white;
	}

	button.hope:not(.secondary) {
		background-color: var(--hope-accent);
		color: white;
	}

	button.fear:not(.secondary):hover {
		background-color: var(--fear-accent-hover);
	}

	button.hope:not(.secondary):hover {
		background-color: var(--hope-accent-hover);
	}

	button.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	button.secondary.fear {
		background-color: var(--fear-surface);
		border-color: var(--fear-border);
		color: var(--fear-text);
	}

	button.secondary.hope {
		background-color: var(--hope-surface);
		border-color: var(--hope-border);
		color: var(--hope-text);
	}

	button.secondary.fear:hover {
		background-color: var(--fear-surface-hover);
	}

	button.secondary.hope:hover {
		background-color: var(--hope-surface-hover);
	}

	.share-final-button.fear {
		background-color: var(--fear-accent);
		border-color: var(--fear-accent);
		color: white;
	}

	.share-final-button.hope {
		background-color: var(--hope-accent);
		border-color: var(--hope-accent);
		color: white;
	}

	.share-final-button.fear:hover {
		background-color: var(--fear-accent-hover);
		border-color: var(--fear-accent-hover);
	}

	.share-final-button.hope:hover {
		background-color: var(--hope-accent-hover);
		border-color: var(--hope-accent-hover);
	}

	.coffee-link.fear {
		background-color: var(--fear-surface);
		border-color: var(--fear-border);
		color: var(--fear-text);
	}

	.coffee-link.hope {
		background-color: var(--hope-surface);
		border-color: var(--hope-border);
		color: var(--hope-text);
	}

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
		max-width: 500px;
		padding: 1.5rem;
		border-radius: 0.5rem;
		max-height: 80vh;
		overflow: auto;
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
