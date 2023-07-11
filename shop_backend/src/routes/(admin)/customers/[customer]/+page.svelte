<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.customer}
	<p>{data.customer.email}</p>
{/if}
