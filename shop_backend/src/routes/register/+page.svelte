<script lang="ts">
	import type { ActionData } from "../$types";


export let form: ActionData;
</script>

<style>
    form{
        display: flex;
        flex-direction: column;
        color:rgba(0, 0, 0, 0.1);
        border: black solid 1px;
        border-radius: 15px;
        align-items: center;
        padding: 10px;
    }
    form p{
        color:black;
        margin: 1px;
    }
    form button {
        margin: 5px;
    }
    .error{
        color:red;
    }
</style>

<form method="post" action=/?/register>
    <h2>Register</h2>
    <p>user</p>
    <input type=email name="email" required>
    <p>pass</p>
    <input type=password name="password" required>
    <p>pass</p>
    <input type=password name="password_2" required>
    {#if form?.exist}
         <p class="error">User with that email already exists</p>
    {/if}
    {#if form?.invalid}
    <p class="error">Please fill valid values</p>
    {/if}
    {#if form?.credentials}
    <p class="error">Bad login</p>
    {/if}
    <button type="submit">Register</button>
</form>