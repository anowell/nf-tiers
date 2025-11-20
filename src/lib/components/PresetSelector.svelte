<script lang="ts">
	import { presets, type SortOrder } from '$lib/data/presets';
	import { albums } from '$lib/data/nf-discography';
	import { tierStore } from '$lib/stores/tier-store.svelte';

	interface Props {
		onstart?: () => void;
	}

	let { onstart }: Props = $props();

	let selectedPresetId = $state('journey'); // Default to "NF Journey"
	let selectedSort = $state<SortOrder>('oldest');
	// Default all albums selected except "imfree" and "nf"
	let selectedAlbumIds = $state<Set<string>>(
		new Set(albums.filter((a) => a.id !== 'imfree' && a.id !== 'nf').map((a) => a.id))
	);

	function handleStart() {
		const preset = presets.find((p) => p.id === selectedPresetId);
		if (preset) {
			tierStore.setSelectedAlbums(selectedAlbumIds);
			tierStore.setPreset(preset, selectedSort);
			onstart?.();
		}
	}

	function toggleAlbum(albumId: string) {
		if (selectedAlbumIds.has(albumId)) {
			selectedAlbumIds.delete(albumId);
		} else {
			selectedAlbumIds.add(albumId);
		}
		selectedAlbumIds = new Set(selectedAlbumIds); // Trigger reactivity
	}

	const selectedPreset = $derived(presets.find((p) => p.id === selectedPresetId));
	const showAlbumSelect = $derived(selectedPresetId === 'selected-albums');

	// Calculate total songs for selected albums
	const selectedSongCount = $derived(() => {
		if (selectedPresetId !== 'selected-albums') return 0;
		const preset = presets.find((p) => p.id === 'selected-albums');
		if (!preset) return 0;
		const allSongs = preset.getSongs();
		return allSongs.filter((song) => song.albumId && selectedAlbumIds.has(song.albumId)).length;
	});
</script>

<div
	class="preset-selector mx-auto max-w-2xl p-6"
	class:fear={tierStore.theme === 'fear'}
	class:hope={tierStore.theme === 'hope'}
>
	<div class="mb-8 text-center">
		<h1 class="mb-2 text-4xl font-bold">NF Tiers</h1>
		<p class="text-lg opacity-70">Rank NF songs into tiers</p>
	</div>

	<div class="space-y-6">
		<!-- Preset Selection -->
		<div>
			<label for="preset" class="mb-2 block text-sm font-semibold">Choose what to rank:</label>
			<select
				id="preset"
				bind:value={selectedPresetId}
				class="w-full rounded-lg border p-3"
				class:fear={tierStore.theme === 'fear'}
				class:hope={tierStore.theme === 'hope'}
			>
				{#each presets as preset (preset.id)}
					<option value={preset.id}>
						{#if preset.id === 'selected-albums'}
							{preset.name}
						{:else}
							{preset.name} ({preset.getSongs().length} songs)
						{/if}
					</option>
				{/each}
			</select>
			{#if selectedPreset}
				<p class="mt-2 text-sm opacity-60">{selectedPreset.description}</p>
			{/if}
		</div>

		<!-- Album Selection (only for "Selected Albums" preset) -->
		{#if showAlbumSelect}
			<div>
				<label class="mb-2 block text-sm font-semibold">Select albums to include:</label>
				<div class="grid grid-cols-2 gap-2">
					{#each albums as album (album.id)}
						<button
							type="button"
							class="album-checkbox rounded-lg border p-3 text-left text-sm transition-colors"
							class:selected={selectedAlbumIds.has(album.id)}
							class:fear={tierStore.theme === 'fear'}
							class:hope={tierStore.theme === 'hope'}
							onclick={() => toggleAlbum(album.id)}
						>
							<span class="checkbox-icon">{selectedAlbumIds.has(album.id) ? '☑' : '☐'}</span>
							{album.title}
						</button>
					{/each}
				</div>
				<p class="mt-3 text-center text-sm font-semibold">
					{selectedSongCount()} songs selected for ranking
				</p>
			</div>
		{/if}

		<!-- Sort Order -->
		<div>
			<label class="mb-2 block text-sm font-semibold">Song order:</label>
			<div class="flex gap-2">
				<button
					type="button"
					class="sort-button flex-1 rounded-lg border p-3 transition-colors"
					class:selected={selectedSort === 'oldest'}
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
					onclick={() => (selectedSort = 'oldest')}
				>
					Oldest First
				</button>
				<button
					type="button"
					class="sort-button flex-1 rounded-lg border p-3 transition-colors"
					class:selected={selectedSort === 'newest'}
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
					onclick={() => (selectedSort = 'newest')}
				>
					Newest First
				</button>
				<button
					type="button"
					class="sort-button flex-1 rounded-lg border p-3 transition-colors"
					class:selected={selectedSort === 'random'}
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
					onclick={() => (selectedSort = 'random')}
				>
					Random
				</button>
			</div>
		</div>

		<!-- Start Button -->
		<button
			type="button"
			class="start-button w-full rounded-lg p-4 text-lg font-bold transition-colors"
			class:fear={tierStore.theme === 'fear'}
			class:hope={tierStore.theme === 'hope'}
			onclick={handleStart}
		>
			Start Ranking
		</button>
	</div>
</div>

<style>
	.sort-button {
		min-width: 110px;
		white-space: nowrap;
	}

	.album-checkbox {
		cursor: pointer;
	}

	.album-checkbox .checkbox-icon {
		margin-right: 0.5rem;
		font-size: 1.2em;
	}

	.album-checkbox.selected.fear {
		background-color: var(--fear-accent);
		border-color: var(--fear-accent);
		color: white;
	}

	.album-checkbox.selected.hope {
		background-color: var(--hope-accent);
		border-color: var(--hope-accent);
		color: white;
	}

	select.fear,
	button.fear {
		background-color: var(--fear-surface);
		color: var(--fear-text);
		border-color: var(--fear-border);
	}

	select.hope,
	button.hope {
		background-color: var(--hope-surface);
		color: var(--hope-text);
		border-color: var(--hope-border);
	}

	button:hover.fear:not(.start-button) {
		background-color: var(--fear-surface-hover);
	}

	button:hover.hope:not(.start-button) {
		background-color: var(--hope-surface-hover);
	}

	button.selected.fear {
		background-color: var(--fear-accent);
		border-color: var(--fear-accent);
		color: white;
	}

	button.selected.hope {
		background-color: var(--hope-accent);
		border-color: var(--hope-accent);
		color: white;
	}

	.start-button.fear {
		background-color: var(--fear-accent);
		border-color: var(--fear-accent);
		color: white;
	}

	.start-button.hope {
		background-color: var(--hope-accent);
		border-color: var(--hope-accent);
		color: white;
	}

	.start-button.fear:hover {
		background-color: var(--fear-accent-hover);
	}

	.start-button.hope:hover {
		background-color: var(--hope-accent-hover);
	}
</style>
