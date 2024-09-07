<script lang="ts">
  import { form } from "../store/store";

  let toggle: boolean = true;
  let candidatePage: boolean = true;

  let strButton: string = "start";

  let modalOpen: boolean = false;
  let modalMessage: string = "";

  let seconds: number = 15;

  const changeToggle = () => {
    toggle = !toggle;

    if (toggle) {
      strButton = "start";
      if (seconds !== 15) {
        seconds = 15;
      }
    } else {
      strButton = "stop";
      startCountdown();
      seconds = 15;
    }
  }

  const formatTime = (num: number): string | number => {
    return num < 10 ? '0' + num : num;
  }

  const startCountdown = () => {
    const interval = setInterval(() => {
      if (!toggle) {
        seconds--;
        if (seconds <= 0) {
          clearInterval(interval);
          changeToggle();
          modalMessage = "Challenge completed with failure!";
          modalOpen = true;
        }
      } else {
        clearInterval(interval);
      }
		}, 1000);
  }

  const handleChangeField = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const { name, value } = input;

    form.update(currentForm => ({
      ...currentForm,
      [name]: value
    }))
  }

  const formValidate = (): boolean => {
    const telephoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return ( !$form.name.trim() && $form.name === "" &&
      !telephoneRegex.test($form.telephone) && $form.telephone === "" &&
      !emailRegex.test($form.email) && $form.email === ""
    )
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    
    if (!formValidate()) {
      modalMessage = "Challenge successfully completed!";
      modalOpen = true;
      changeToggle();
      candidatePage = false;
    } else {
      modalMessage = "Challenge not completed yet!";
      modalOpen = true;
    }
  }

  const toggleModal = () => {
    modalOpen = !modalOpen;
  }

</script>

<div class="w-screen h-screen bg-neutral-950 flex items-center relative">
  {#if modalOpen}
    <button
      class="absolute h-full w-full inset-0 z-10 overflow-y-auto bg-neutral-950 opacity-75"
      on:click={toggleModal}
    >
      <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
          <button on:click={toggleModal} class="text-white absolute top-0 right-2">x</button>
          
          <p class="text-white">{modalMessage}</p>
        </div>
      </div>
    </button>
  {/if}

  <a href="/candidate">
    <button
      class="px-4 py-3 text-sm font-medium tracking-wider text-neutral-100 uppercase transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-800 focus:outline-none disabled:bg-red-400 absolute top-2 right-2"
      disabled={candidatePage}
    >
      candidate
    </button>
  </a>
  
  <section class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-neutral-100 rounded-lg shadow-lg md:flex-row relative">
    <div class="right-2 top-0 absolute text-neutral-600">
      timer: 00:{formatTime(seconds)}
    </div>
    
    <div class="md:flex md:items-center md:justify-center md:w-1/2 bg-neutral-800">
        <div class="px-6 py-6 md:px-8 md:py-0">
            <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Tips</h2>

            <p class="mt-2 text-sm text-neutral-400 md:text-neutral-400">To pass the test, follow the pattern of the examples:</p>
            <p class="mt-2 text-sm text-neutral-400 md:text-neutral-400">FirstName SecondName</p>
            <p class="mt-2 text-sm text-neutral-400 md:text-neutral-400">+123456789012 or +12 3456 789 012</p>
            <p class="mt-2 text-sm text-neutral-400 md:text-neutral-400">example@email.com</p>
        
            <div class="w-full flex items-center mt-4">
              <button on:click={changeToggle} id="toggle" class="px-4 py-3 text-sm font-medium tracking-wider text-neutral-100 uppercase transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none disabled:bg-neutral-400">{strButton}</button>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form on:submit={handleSubmit}>
            <div class="flex flex-col p-1.5 overflow-hidden rounded-lg gap-4 p-8">
                <input
                  class="px-6 py-2 text-neutral-700 placeholder-neutral-500 bg-white outline-none focus:placeholder-transparent disabled:bg-neutral-200"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  aria-label="Enter your name"
                  value={$form.name}
                  on:change={handleChangeField}
                  disabled={toggle}
                >
                
                <input
                  class="px-6 py-2 text-neutral-700 placeholder-neutral-500 bg-white outline-none focus:placeholder-transparent disabled:bg-neutral-200"
                  type="text"
                  name="telephone"
                  id="telephone"
                  placeholder="Enter your telephone"
                  aria-label="+12123456789"
                  value={$form.telephone}
                  on:change={handleChangeField}
                  disabled={toggle}
                >

                <input
                  class="px-6 py-2 text-neutral-700 placeholder-neutral-500 bg-white outline-none focus:placeholder-transparent disabled:bg-neutral-200"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  value={$form.email}
                  on:change={handleChangeField}
                  disabled={toggle}
                >

                <button
                  class="px-4 py-3 text-sm font-medium tracking-wider text-neutral-100 uppercase transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-blue-500 focus:outline-none disabled:bg-neutral-400"
                  disabled={toggle}
                  type="submit"
                >
                  send
                </button>
            </div>
        </form>
    </div>
  </section>
</div>
