<script lang="ts">
  import { savedFields } from "../../store/store";
</script>

<div class="w-screen h-screen bg-neutral-950">
  <a href="/">
    <button class="px-6 py-2 mt-2 ml-2 mb-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
      Back
    </button>
  </a>
  <p class="text-white ml-2">Name: {$savedFields.name}</p>
  <p class="text-white ml-2">Telephone: {$savedFields.telephone}</p>
  <p class="text-white ml-2">Email: {$savedFields.email}</p>
</div>