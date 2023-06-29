<script lang="ts">
    export var success = false;
</script>

<style>

</style>

{#if success}
    <h3>You successfully verified your email</h3>
{:else}
     <h3>nope</h3>
{/if}