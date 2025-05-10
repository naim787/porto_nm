<script>
	import { onMount } from "svelte";
  
	onMount(async () => {
		const gsapModule = await import("gsap");
		const scrollTriggerModule = await import("gsap/ScrollTrigger");

		const gsap = gsapModule.default;
		const ScrollTrigger = scrollTriggerModule.default;

		gsap.registerPlugin(ScrollTrigger);

		// animasi scroll
		gsap.fromTo(
		  ".fade",
		  { opacity: 0, y: 50 }, 
		  {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power2.out",
			scrollTrigger: {
			  trigger: ".fade",
			  start: "top 80%", // Animasi mulai saat elemen masuk 80% viewport
			  toggleActions: "play none none reverse",
			},
		  }
		);

		// animasi pertama kali broser di load
		gsap.from(".fade-in", {
			opacity: 0,
			y: 50, // Geser elemen ke bawah
			duration: 3,
			ease: "power2.out",
		});


		// animasi text
		gsap.to(".moving-text", {
			x: "100vw", // Geser teks sejauh 100% lebar layar
			duration: 5, // Waktu tempuh
			ease: "linear", // Gerakan konstan
			repeat: -1, // Animasi terus berulang
			yoyo: true, // Balik ke posisi awal setelah sampai tujuan
        });



		// animasi gradient
		let tl = gsap.timeline({ repeat: -1, yoyo: true });

		tl.to(".gradient-text", {
      backgroundImage: "linear-gradient(to right, #3b82f6, #1e3a8a)", // Biru → Biru Tua
      duration: 2,
    }).to(".gradient-text", {
      backgroundImage: "linear-gradient(to right, #9333ea, #581c87)", // Ungu → Ungu Tua
      duration: 2,
    });
	});
  </script>
  
  <div class="h-[200vh] flex flex-col items-center justify-center bg-gray-100">
	<div class="fade-in bg-white p-6 text-xl font-bold shadow-md rounded-md">
		🎉 Hello, Welcome!
	</div>
	<h1 class="gradient-text text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
		🌈 GSAP Timeline Gradient!
	  </h1>
	<div class="moving-text text-2xl font-bold">🚀 Hello, I am Moving!</div>
	<div class="h-screen"></div> <!-- Spacer agar elemen awalnya tidak terlihat -->
  
	<div class="fade bg-white p-6 text-xl font-bold shadow-md rounded-md opacity-0">
	  👋 Hello, I'm Visible Now!
	</div>



	<div class="fade w-full h-90 shadow rounded-md flex opacity-0"><p class="m-auto">hallo every one</p></div>
  
	<div class="h-screen"></div> <!-- Spacer agar bisa melihat elemen keluar viewport -->
  </div>
  