<script>
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<Navbar class="fixed top-0 left-0 bg-gray-200 z-50">
  <NavBrand href="/">
    <img src="./favicon.webp" class="h-9 sm:h-9" alt="logo naim" />
    <!-- <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AIM</span> -->
  </NavBrand>
  <NavHamburger />
  <NavUl >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>