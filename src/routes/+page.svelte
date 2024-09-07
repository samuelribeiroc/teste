<script lang="ts">
  let toggle: boolean = true;
  let strButton: string = "start";
  let seconds: number = 15;

  const changeToggle = () => {
    toggle = !toggle;

    if (toggle) {
      strButton = "start";
    } else {
      strButton = "stop";
    }
  }

  const formatTime = (num: number) => {
    return num < 10 ? '0' + num : num;
  }

  const startCountdown = () => {
    const interval = setInterval(() => {
			seconds--;
			if (seconds <= 0) {
				clearInterval(interval);
			}
		}, 1000);
  }

</script>

<div class="w-screen h-screen bg-neutral-950 flex items-center">
  
  <section class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-neutral-100 rounded-lg shadow-lg md:flex-row relative">
    <div class="right-2 top-0 absolute">
      timer
    </div>
    
    <div class="md:flex md:items-center md:justify-center md:w-1/2 bg-neutral-800">
        <div class="px-6 py-6 md:px-8 md:py-0">
            <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">Project</span> Updates</h2>

            <p class="mt-2 text-sm text-neutral-400 md:text-neutral-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
        
            <div class="w-full flex items-center mt-4">
              <button on:click={changeToggle} class="px-4 py-3 text-sm font-medium tracking-wider text-neutral-100 uppercase transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none disabled:bg-neutral-400">{strButton}</button>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
            <div class="flex flex-col p-1.5 overflow-hidden rounded-lg gap-4 p-8">
                <input class="px-6 py-2 text-neutral-700 placeholder-neutral-500 bg-white outline-none focus:placeholder-transparent disabled:bg-neutral-200" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" disabled={toggle}>
                
                <input class="px-6 py-2 text-neutral-700 placeholder-neutral-500 bg-white outline-none focus:placeholder-transparent disabled:bg-neutral-200" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" disabled={toggle}>
                
                <input class="px-6 py-2 text-neutral-700 placeholder-neutral-500 bg-white outline-none focus:placeholder-transparent disabled:bg-neutral-200" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" disabled={toggle}>

                <button class="px-4 py-3 text-sm font-medium tracking-wider text-neutral-100 uppercase transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-blue-500 focus:outline-none disabled:bg-neutral-400" disabled={toggle}>send</button>
            </div>
        </form>
    </div>
  </section>
</div>
