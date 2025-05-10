<script>
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { Logs, Menu, Moon, Sun } from '@lucide/svelte';
  import "../app.css"

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
            <Logs />
            {:else}
            <Menu />
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



<label class="swap swap-rotate fixed bottom-[3%] right-[3%] z-10 ">
  <!-- this hidden checkbox controls the state -->
  <input type="checkbox" class="theme-controller" value="synthwave" on:change={toggleDarkMode}/>

  <!-- sun icon -->
  <svg
    class="swap-on h-10 w-10 fill-current text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
  
  <!-- moon icon -->
  <svg
    class="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
