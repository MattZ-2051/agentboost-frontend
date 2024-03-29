// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Error {
		code: string;
		id: string;
	}
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare module '*.png';
declare module '*.jpg';
declare type DndEvent<ItemType = Item> = import('svelte-dnd-action').DndEvent<ItemType>;
