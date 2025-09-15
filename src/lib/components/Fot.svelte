<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from "flowbite-svelte";
</script>

<Footer footerType="socialmedia">
  <div class="flex flex-col">
    <div class="mb-6 md:mb-0">
      <h1 class="text-8xl mcpe-font hidden md:inline-block">N</h1>
    </div>
    <div class="flex flex-col md:flex-row md:justify-evenly">
      <div>
        <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Resources</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="/">Flowbite</FooterLink>
          <FooterLink class="mb-4" href="/">Tailwind CSS</FooterLink>
          <FooterLink class="mb-4" href="/">Svelte</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Contac Us</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="mailto:naimmmm.abdullah@gmail.com">Email</FooterLink>
          <FooterLink class="mb-4" href="https://github.com/naim787">GitHub</FooterLink>
          <FooterLink class="mb-4" href="https://www.youtube.com/@ncodingg">Youtube</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Legal</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="/">Privacy Policy</FooterLink>
          <FooterLink class="mb-4" href="/">Terms & Conditions</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <!-- <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" /> -->
</Footer>