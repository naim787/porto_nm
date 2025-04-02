<script>
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

export let DarkMode; // Menerima prop dari parent
const dispatch = createEventDispatcher(); // Untuk mengirim event

function toggleDarkMode() {
  DarkMode = !DarkMode;
  document.querySelector("html").classList.toggle("dark");
  dispatch("toggle", { DarkMode }); // Mengirim event ke parent
}


let bars = false;


  onMount(() => {
    gsap.to(".moving-text", {
			x: "0%", // Geser teks sejauh 100% lebar layar
			duration:2.5,
ease: "expo.out",
			repeat: -1, // Animasi terus berulang
			yoyo: true, // Balik ke posisi awal setelah sampai tujuan
    });
  })
</script>

<nav class="w-[100vw] h-45 flex fixed top-0 left-0 z-10">
    <ul class="w-1/2 h-20 bg-black/30 m-auto rounded-3xl border-2 border-gray-600 flex justify-between items-center p-5 backdrop-blur">

        <div class="flex flex-row justify-start items-end">
            <h1 class="text-5xl font-bold text-st">N</h1>
            <div class="overflow-hidden">
                <p class="transform translate-x-[-100%] moving-text text-2xl font-thin text-gray-700">aim <span class="hidden md:inline-block">Abdullah</span></p>
            </div>
        </div>

        <!-- //bars -->
         <div class="flex flex-row-reverse justify-between items-center w-[20vw] h-auto relative">
          <button
          class:text-white={DarkMode}
          class:text-black={!DarkMode}
           on:click={() => {bars = !bars}} class="z-10 bg-transparent inline-block">
            {#if bars}
            <i class="fa-solid fa-bars-staggered text-2xl font-bold z-10"></i>
            {:else}
             <i class="fa-solid fa-bars text-2xl font-bold z-10"></i>
            {/if}
          </button>
          <!-- ul -->
          <div class="w-45 h-45 border absolute top-[150%] right-[100%] rounded-xl flex flex-col items-center justify-between p-3 bg-gray-900 text-white transform translate-x-[120%] md:translate-x-[200%] duration-150"
          class:opacity-0={!bars}
          class:opacity-100={bars}
          >
             <h1 class="text-2xl font-bold">Bars</h1>
             <div class="w-full h-full flex flex-col">
               <button on:click={() => bars = !bars}><a href="/" class="">home</a></button>
               <button on:click={() => bars = !bars}><a href="#about" class="">about</a></button>
               <button on:click={() => bars = !bars}><a href="#project" class="">project</a></button>
               <button on:click={() => bars = !bars}><a href="#contact" class="">contact</a></button>
             </div>
          </div>
         </div>

         
    </ul>
</nav>


<button on:click={toggleDarkMode} class="bg-transparent fixed bottom-[3%] right-[3%] z-10 rounded-full"
class:bg-white={DarkMode}
class:text-black={DarkMode}
class:bg-black={!DarkMode}
class:text-white={!DarkMode}
>
      <i class="p-3 rounded-full fa-solid {DarkMode ? 'fa-sun' : 'fa-moon'} m-auto"
      >
      </i>
</button>

