<script lang="ts">
	import type { TierRank } from '$lib/encoding';
	import { tierStore } from '$lib/stores/tier-store.svelte';

	interface Props {
		tier: TierRank;
		selected?: boolean;
		onclick?: () => void;
	}

	let { tier, selected = false, onclick }: Props = $props();

	const tierLabels: Record<TierRank, string> = {
		s: 'S',
		a: 'A',
		b: 'B',
		c: 'C',
		d: 'D',
		f: 'F',
		u: 'Unranked'
	};
</script>

<button
	type="button"
	class="tier-button tier-{tier} rounded-lg px-6 py-3 font-bold transition-all"
	class:selected
	class:fear={tierStore.theme === 'fear'}
	class:hope={tierStore.theme === 'hope'}
	{onclick}
>
	{tierLabels[tier]}
</button>

<style>
	.tier-button {
		min-width: 80px;
		border: 2px solid transparent;
		position: relative;
	}

	/* S Tier - Cinematic blue */
	.tier-s {
		background-color: var(--tier-s);
		color: white;
	}
	.tier-s:hover {
		opacity: 0.9;
		border-color: var(--tier-s);
		filter: brightness(1.1);
	}

	/* A Tier - Calm teal */
	.tier-a {
		background-color: var(--tier-a);
		color: white;
	}
	.tier-a:hover {
		opacity: 0.9;
		border-color: var(--tier-a);
		filter: brightness(1.1);
	}

	/* B Tier - Steel grey */
	.tier-b {
		background-color: var(--tier-b);
		color: white;
	}
	.tier-b:hover {
		opacity: 0.9;
		border-color: var(--tier-b);
		filter: brightness(1.1);
	}

	/* C Tier - Muted grey */
	.tier-c {
		background-color: var(--tier-c);
		color: white;
	}
	.tier-c:hover {
		opacity: 0.9;
		border-color: var(--tier-c);
		filter: brightness(1.1);
	}

	/* D Tier - NF hoodie grey */
	.tier-d {
		background-color: var(--tier-d);
		color: white;
	}
	.tier-d:hover {
		opacity: 0.9;
		border-color: var(--tier-d);
		filter: brightness(1.1);
	}

	/* F Tier - Intensity red */
	.tier-f {
		background-color: var(--tier-f);
		color: white;
	}
	.tier-f:hover {
		opacity: 0.9;
		border-color: var(--tier-f);
		filter: brightness(1.1);
	}

	.tier-button.selected {
		border-color: currentColor;
		transform: scale(1.05);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
	}

	.tier-button.selected.hope {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	}

	.tier-button:active {
		transform: scale(0.98);
	}

	/* Fear mode hover effects */
	.tier-button.fear:hover {
		opacity: 0.9;
		filter: brightness(1.15);
	}

	/* Hope mode already has hover working via the general tier-specific hover styles */
</style>
