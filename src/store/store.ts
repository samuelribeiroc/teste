import { writable, type Writable } from "svelte/store";

export interface formInterface {
  name: string;
  telephone: string;
  email: string;
};

export let savedFields: Writable<formInterface> = writable({
  name: "",
  telephone: "",
  email: ""
});

export let candidatePage: Writable<boolean> = writable(true);