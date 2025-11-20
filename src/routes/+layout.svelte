<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import './layout.css';
	import 'remixicon/fonts/remixicon.css';
	import favicon from '$lib/assets/favicon.svg';
	import { tierStore } from '$lib/stores/tier-store.svelte';

	let { children } = $props();

	function handleReset() {
		tierStore.currentPreset = null;
		goto('/');
	}

	// Check if we're on the tiers page
	let onTiersPage = $derived($page.url.pathname === '/tiers');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>NF Tiers - Rank Your Favorite NF Songs</title>
	<meta
		name="description"
		content="Rank NF songs and albums into tiers. Create shareable tier lists for NF's discography."
	/>
</svelte:head>

<div class="theme-{tierStore.theme} flex min-h-screen flex-col">
	<!-- Header -->
	<header
		class="header flex items-center justify-between border-b px-4 py-3"
		class:fear={tierStore.theme === 'fear'}
		class:hope={tierStore.theme === 'hope'}
	>
		<div class="flex items-center gap-4">
			{#if onTiersPage}
				<button
					type="button"
					class="flex items-center gap-1 rounded border px-3 py-1 text-sm"
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
					onclick={handleReset}
				>
					<i class="ri-arrow-left-line"></i>
					Back
				</button>
			{/if}
			<h1 class="text-lg font-bold">NF Tiers</h1>
		</div>

		<div class="flex items-center gap-2">
			<!-- Theme Toggle - Pill Style -->
			<div
				class="theme-toggle-container"
				class:fear={tierStore.theme === 'fear'}
				class:hope={tierStore.theme === 'hope'}
			>
				<button
					type="button"
					class="pill-option"
					class:active={tierStore.theme === 'fear'}
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
					onclick={() => tierStore.theme !== 'fear' && tierStore.toggleTheme()}
				>
					Fear
				</button>
				<button
					type="button"
					class="pill-option"
					class:active={tierStore.theme === 'hope'}
					class:fear={tierStore.theme === 'fear'}
					class:hope={tierStore.theme === 'hope'}
					onclick={() => tierStore.theme !== 'hope' && tierStore.toggleTheme()}
				>
					Hope
				</button>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	{@render children()}
</div>

<style>
	.header.fear {
		background-color: var(--fear-surface);
		border-color: var(--fear-border);
	}

	.header.hope {
		background-color: var(--hope-surface);
		border-color: var(--hope-border);
	}

	button.fear {
		background-color: var(--fear-surface);
		border-color: var(--fear-border);
		color: var(--fear-text);
	}

	button.hope {
		background-color: var(--hope-surface);
		border-color: var(--hope-border);
		color: var(--hope-text);
	}

	button.fear:hover {
		background-color: var(--fear-surface-hover);
	}

	button.hope:hover {
		background-color: var(--hope-surface-hover);
	}

	/* Theme Toggle Pill */
	.theme-toggle-container {
		display: inline-flex;
		border-radius: 9999px;
		padding: 2px;
		gap: 2px;
		border: 1px solid;
	}

	.theme-toggle-container.fear {
		background-color: var(--fear-bg);
		border-color: var(--fear-border);
	}

	.theme-toggle-container.hope {
		background-color: var(--hope-bg);
		border-color: var(--hope-border);
	}

	.pill-option {
		padding: 0.375rem 1rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s ease;
		border: none;
		cursor: pointer;
		min-width: 70px;
	}

	/* Inactive state */
	.pill-option:not(.active).fear {
		background-color: transparent;
		color: var(--fear-text-muted);
	}

	.pill-option:not(.active).hope {
		background-color: transparent;
		color: var(--hope-text-muted);
	}

	.pill-option:not(.active):hover.fear {
		background-color: var(--fear-surface-hover);
		color: var(--fear-text);
	}

	.pill-option:not(.active):hover.hope {
		background-color: var(--hope-surface-hover);
		color: var(--hope-text);
	}

	/* Active state */
	.pill-option.active.fear {
		background-color: var(--fear-accent);
		color: white;
		box-shadow: 0 2px 8px rgba(192, 57, 43, 0.3);
	}

	.pill-option.active.hope {
		background-color: var(--hope-accent);
		color: white;
		box-shadow: 0 2px 8px rgba(22, 143, 137, 0.3);
	}
</style>
