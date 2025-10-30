<script>
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<Navbar class="fixed top-0 left-0 bg-black/70 backdrop-blur-2xl text-white z-50">
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl class="text-white">
    <NavLi class="text-white" href="/">Home</NavLi>
    <NavLi class="text-white" href="/docs/components/navbar">Navbar</NavLi>
    <NavLi class="text-white" href="/docs/components/accordion">Accordion</NavLi>
    <NavLi class="text-white" href="/docs/components/alert">Alert</NavLi>
    <NavLi class="text-white" href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>