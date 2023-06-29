<script lang="ts">
	import { Button, Html, Text, Hr } from 'svelte-email';

	export let password: string;
</script>

<Html lang="en">
	<Text>
		Thanks for registration!
	</Text>
    <Hr/>
    <Text>
        Your password is {password}
    </Text>
	<Hr />
	<Button href="localhost:5173">Lama minerals</Button>
</Html>