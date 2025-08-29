<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<Navbar class="fixed bg-white border border-b-1 border-gray-200 z-10">
  <NavBrand href="/" class="mcpe-font text-5xl font-bold p-2">N</NavBrand>
  <NavHamburger class="bg-gray-300"/>
  <NavUl class="h-15 bg-white rounded-md">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/">Navbar</NavLi>
    <NavLi href="/">Accordion</NavLi>
    <NavLi href="/">Alert</NavLi>
    <NavLi href="/">Avatar</NavLi>
  </NavUl>
</Navbar>


<div class="w-[100vw] h-auto flex flex-col justify-center items-center bg-[radial-gradient(#BDBDBD_1px,transparent_0)] [background-size:30px_30px] overflow-x-hidden mcpe-font">

    <!-- main -->
    <div class="w-[90vw] h-[100vh] flex justify-center items-center">
        <div class="w-full h-auto border-[1px] bg-white border-dashed rounded-xl border-gray-300 shadow-2xl flex-col 
        p-4 xl:shadow-none xl:bg-transparent xl:border-none">
           <div class="mcpe-font text-green-700 font-vold text-[2vh]">2025</div>
           <div class="mcpe-font text-[9vh] font-bold">NAIM ABDULLAH</div>
           <div class="flex w-full gap-2 font-bold">
               <p class="p-2 bg-green-500/50 text-green-900 rounded-xl">NODEJS</p>
               <p class="p-2 bg-blue-500/50 text-blue-900 rounded-md">GO</p>
               <p class="p-2 bg-gray-300 rounded-md">BUN</p>
        </div>
        </div>
    </div>

    <!-- about -->
    <div class="w-full h-[100vh] flex flex-col items-center">
      <!-- about -->
        <div class="w-80 h-100 bg-white rounded-xl border-4 border-dashed border-gray-400 relative p-2">
          <h1 class="text-8xl absolute left-[40%] top-[-22%] transform origin-center rotate-180 mcpe-font">^</h1>
          <h1 class="text-4xl">ABOUT</h1>
          <div class="h-[90%] overflow-y-scroll font-sans">
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti asperiores consequuntur explicabo accusantium velit perspiciatis. Ut pariatur omnis similique repellat sit iste, corrupti minus! Ipsam asperiores quis, in neque ea obcaecati maxime nulla officiis optio atque eius quibusdam quisquam velit facilis impedit cupiditate provident! Voluptas eaque iure quod deserunt velit fugiat illo ea reiciendis doloremque culpa ex ullam amet, et reprehenderit quis blanditiis veritatis deleniti laboriosam fugit vitae. Inventore iste, temporibus id omnis facilis rem blanditiis modi fugiat ut corporis. Suscipit incidunt dolorum earum neque qui libero, eveniet eum ducimus a optio adipisci cupiditate, dolor asperiores est rem nihil!</p>
          </div>
        </div>

        <!-- skill -->
         <div class="w-[90vw] h-53 border border-dashed border-gray-400"></div>
    </div>

</div>