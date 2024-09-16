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

export let seconds: Writable<number> = writable(15);
export let toggle: Writable<boolean> = writable(true);

let interval: number | undefined;

export const startCountdown = () => {
  if (!interval) {
    interval = setInterval(() => {
      seconds.update(time => {
        if (time <= 0) {
          clearCountdown();
          toggle.set(true);
          return 15;
        }
        return time - 1;
      });
    }, 1000);
  }
};

export const clearCountdown = () => {
  if (interval) {
    clearInterval(interval);
    interval = undefined;
  }
};