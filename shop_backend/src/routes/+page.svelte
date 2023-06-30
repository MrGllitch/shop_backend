<script lang="ts">
     import {page} from '$app/stores';
     import type { ActionData } from "../routes/$types";
	import Login from '$lib/login.svelte';
     import Modal from '$lib/modal.svelte';
     export let form: ActionData
     let showModal = false;
     let email = "";
     $: { 
          if ($page.data.user && $page.data.user.email) {
          email = $page.data.user.email.split('@')[0];}
     }
</script>

<style>
     .welcome{
          color:#FFFFFF;
     }

     nav{
          display:grid;
          grid-template-columns: 1fr 1fr;
          height: 85vh;
          justify-items: center;
          align-items: center;
     }
     nav div{
     border-radius: 3.125rem;
     background: #1C1C1C;
     width: 18.75rem;
     height: 12.5rem;
     display:flex;
     justify-content: center;
     align-items: center;

     }
     nav div h6{
          color: #FFF;
          font-size: 2.25rem;
          font-family: Inter;
          font-style: normal;
          font-weight: 700;
          
     }

     nav a{
          text-decoration: none;
     }
</style>

{#if !$page.data.user}

     <button on:click={() => (showModal = true)}>Login</button>
     <Modal bind:showModal>
     <Login form={form}></Login>
     </Modal>
{:else}
     <!-- <h4 class="welcome">Hello {email}</h4> -->
     {#if $page.data.user.isAdmin === true}
     <section>
     <nav>
     <a href='/products'><div><h6>produkty</h6></div></a>
     <a href='/orders'><div><h6>objednávky</h6></div></a>
     <a href='/customers'><div><h6>zákazníci</h6></div></a>
     <a href='/statistics'><div><h6>statistiky</h6></div></a>
     </nav>
     </section>
     {/if}
{/if}
