import { writable, type Writable } from "svelte/store";

interface formInterface {
  name: string;
  telephone: string;
  email: string;
};

export const form: Writable<formInterface> = writable({
  name: "",
  telephone: "",
  email: ""
})