// See https://kit.svelte.dev/docs/types#app
/// <reference types="@sveltejs/kit" />

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

declare module '*.png';
declare module '*.jpg';
declare type Item = import('svelte-dnd-action').Item;
declare type DndEvent<ItemType = Item> =
  import('svelte-dnd-action').DndEvent<ItemType>;

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onconsider?: (
      event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T },
    ) => void;
    onfinalize?: (
      event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T },
    ) => void;
  }
}
export {};
