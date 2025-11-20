<script lang="ts">
	import { goto } from '$app/navigation';
	import PresetSelector from '$lib/components/PresetSelector.svelte';

	function handleStart() {
		goto('/tiers');
	}
</script>

<div class="flex h-full min-h-screen items-center justify-center p-4">
	<PresetSelector onstart={handleStart} />
</div>
