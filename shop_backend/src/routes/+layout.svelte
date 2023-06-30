<script lang="ts">
	import { browser } from '$app/environment';
    import type { LayoutData } from './$types';
	import Notification from '$lib/icons/notification.svelte';
	import Product from '$lib/icons/product.svelte';
	import DocumentAdd from '$lib/icons/document_add.svelte';
	import LogOut from '$lib/icons/log-out.svelte';
    import Home from '$lib/icons/home.svelte';
    export let data: LayoutData;

</script>

<style>

    nav{
        position: sticky;
        top: 0px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: #1C1C1C;
        margin: 0;
        padding: 5px 15px;
    }
    nav button{
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    }

</style>

{#if data.user}
<nav>
    {#if data.user.isAdmin === true}
    <a href='/add'><Product></Product></a>
    <DocumentAdd></DocumentAdd>
    <div style="width: 50px;"></div>
    <a href= '/'><Home></Home></a>
    <div style="width: 50px;"></div>
    <Notification></Notification>
    {/if}
    <form id="logoutFrom" method="post" action="/?/logout">
    <button type="submit">
    <LogOut></LogOut>
    </button>
    </form>
</nav>
{/if}
<slot/>