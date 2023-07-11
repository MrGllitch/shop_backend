<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="table">
	{#if data.display_customers.length > 0}
		<table>
			<tr>
				{#each Object.keys(data.display_customers[0]) as key}
					<th>{key}</th>
				{/each}
			</tr>
			{#each data.display_customers as customer}
				<tr>
					{#each Object.entries(customer) as [key, value]}
						<td><span>{value}</span></td>
					{/each}
					<td
						><span><button on:click={() => goto(`/customers/${customer.id}`)}>Details</button></span
						></td
					>
				</tr>
			{/each}
		</table>
	{:else}
		No customers found :C
	{/if}
</section>

<style>
	.table {
		display: flex;
		justify-content: center;
		width: 100%;
		font-size: x-large;
	}
	table {
		width: 90%;
	}
	th {
		color: azure;
	}
	tr {
		color: azure;
	}
	tr:nth-child(even) {
		background-color: #dddddd;
		color: black;
	}
	td span {
		display: flex;
		justify-content: center;
		align-content: center;
	}
</style>
