<script lang="ts">
	import type { ActionData } from '../routes/$types';

	export let form: ActionData;
</script>

<form method="post" action="?/login">
	<h2>Login</h2>
	<label for="email">Email</label>
	<input type="email" name="email" required />
	<label for="password">Password</label>
	<input type="password" name="password" required />
	{#if form?.exist}
		<p class="error">User with that email already exists</p>
	{/if}
	{#if form?.invalid}
		<p class="error">Please fill valid values</p>
	{/if}
	{#if form?.credentials}
		<p class="error">Bad login</p>
	{/if}
	<button type="submit">Login</button>
	<label for="">Dont have account yet?<a href="/register">register</a></label>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		color: rgba(0, 0, 0, 0.1);
		align-items: center;
		padding: 20px;
	}
	form p {
		color: black;
		margin: 1px;
	}
	form button {
		margin: 5px;
	}
	.error {
		color: red;
	}
	h2 {
		color: white;
	}
	label {
		color: white;
	}
</style>
