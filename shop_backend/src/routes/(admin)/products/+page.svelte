<script lang="ts">
import type { PageData } from "./$types";
import ProductRow from "$lib/product_row.svelte";
export let data:PageData
</script>

<style>
  .table{
    display: flex;
    justify-content: center;
    width:100%;
  }
    table {
    width: 90%;
    }
    th{
      color:azure;
    }
    tr{
      color:azure;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
        color:black;
    }
    td span{
      display: flex;
      justify-content: center;
      align-content: center;
    }
</style>
<section class=table>
{#if data.display_products.length > 0}
<table>
  <tr>
    {#each Object.keys(data.display_products[0]) as key}
      <th>{key}</th>
    {/each}
  </tr>
  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}




  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
  <tr>
    {#each Object.values(product) as value}
      <td><span>{value}</span></td>
    {/each}
      <td><span><button>Edit</button></span></td>
  </tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
  <tr>
    {#each Object.values(product) as value}
      <td><span>{value}</span></td>
    {/each}
      <td><span><button>Edit</button></span></td>
  </tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
  <tr>
    {#each Object.values(product) as value}
      <td><span>{value}</span></td>
    {/each}
      <td><span><button>Edit</button></span></td>
  </tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
  <tr>
    {#each Object.values(product) as value}
      <td><span>{value}</span></td>
    {/each}
      <td><span><button>Edit</button></span></td>
  </tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
  <tr>
    {#each Object.values(product) as value}
      <td><span>{value}</span></td>
    {/each}
      <td><span><button>Edit</button></span></td>
  </tr>
{/each}  {#each data.display_products as product}
    <tr>
      {#each Object.values(product) as value}
        <td><span>{value}</span></td>
      {/each}
        <td><span><button>Edit</button></span></td>
    </tr>
  {/each}  {#each data.display_products as product}
  <tr>
    {#each Object.values(product) as value}
      <td><span>{value}</span></td>
    {/each}
      <td><span><button>Edit</button></span></td>
  </tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}  {#each data.display_products as product}
<tr>
  {#each Object.values(product) as value}
    <td><span>{value}</span></td>
  {/each}
    <td><span><button>Edit</button></span></td>
</tr>
{/each}





</table>
{:else}
   No products found :C
{/if}

</section>