<script lang="ts">
	import { goto } from '$app/navigation';
	import { tierStore } from '$lib/stores/tier-store.svelte';
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center p-8"
	class:fear={tierStore.theme === 'fear'}
	class:hope={tierStore.theme === 'hope'}
>
	<div class="max-w-3xl text-center">
		<h1 class="mb-6 text-5xl font-bold">Give me a reason</h1>

		<p class="mb-8 text-xl opacity-80">
			I need somebody to push me, tell me that I ain't no good with the pen.
		</p>

		<div class="mb-8 aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl">
			<iframe
				width="100%"
				height="100%"
				src="https://www.youtube.com/embed/ljh8Uo2tLQ0"
				title="NF - Give Me a Reason"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>


		<button
			type="button"
			class="rounded-lg border-2 px-8 py-3 text-lg font-bold transition-colors"
			class:fear={tierStore.theme === 'fear'}
			class:hope={tierStore.theme === 'hope'}
			onclick={() => goto('/')}
		>
			Start Ranking
		</button>
	</div>
</div>

<style>
	button.fear {
		background-color: var(--fear-accent);
		border-color: var(--fear-accent);
		color: white;
	}

	button.hope {
		background-color: var(--hope-accent);
		border-color: var(--hope-accent);
		color: white;
	}

	button.fear:hover {
		background-color: var(--fear-accent-hover);
		border-color: var(--fear-accent-hover);
	}

	button.hope:hover {
		background-color: var(--hope-accent-hover);
		border-color: var(--hope-accent-hover);
	}
</style>
