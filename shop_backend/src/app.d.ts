// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user:{
				email: string;
				isAdmin: boolean;
			}
			
		}
		//interface PageData {}
		// interface Platform {}
	}
}

export {};
