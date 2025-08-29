<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<Navbar class="fixed bg-white border border-b-1 border-gray-200">
  <NavBrand href="/">
    <div class="flex items-end">
        <h1 class="mcpe-font text-4xl font-bold p-2">N</h1>
    </div>
  </NavBrand>
  <NavHamburger class="bg-gray-300"/>
  <NavUl class="h-15 bg-white rounded-md">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>


<div class="w-[100vw] h-auto flex flex-col bg-[radial-gradient(#BDBDBD_1px,transparent_0)] [background-size:30px_30px] over">

    <!-- main -->
    <div class="w-full h-[100vh] flex justify-center items-center p-2">
        <div class="w-full h-auto border-[1px] bg-white border-dashed rounded-xl border-gray-300 shadow-2xl flex-col 
        p-4 xl:shadow-none xl:bg-transparent xl:border-none">
           <div class="mcpe-font text-green-700 font-vold text-[2vh]">2025</div>
           <div class="mcpe-font text-[9vh] font-bold">NAIM ABDULLAH</div>
           <div class="flex w-full bg-red-500 gap-2 font-bold">
               <p class="p-2 bg-green-500/50 text-green-900 rounded-xl">NODEJS</p>
               <p class="p-2 bg-blue-500/50 text-blue-900 rounded-md">GO</p>
               <p class="p-2 bg-gray-300 rounded-md">BUN</p>
        </div>
        </div>
    </div>

    <!-- about -->
    <div class="w-full h-[100vh] flex flex-col items-center">
        <div class="w-80 h-100 bg-white rounded-xl border border-dashed">
            
        </div>
    </div>

</div>