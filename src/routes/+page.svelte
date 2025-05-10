<script>
  import Nav from "../component/Nav.svelte";
  import Project from "../component/Project.svelte";
  import FormContact from "../component/FormContact.svelte";
  import Footer from "../component/Footer.svelte";

  import { onMount } from "svelte";
  import "../app.css";

  let DarkMode = false;

  function handleToggle(event) {
    DarkMode = event.detail.DarkMode;
  }

  onMount(async () => {
    const gsapModule = await import("gsap");
    const scrollTriggerModule = await import("gsap/ScrollTrigger");

    const gsap = gsapModule.default;
    const ScrollTrigger = scrollTriggerModule.default;

    gsap.registerPlugin(ScrollTrigger);

    // animasi scroll
    gsap.fromTo(
      ".fade-scroll",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fade-scroll",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // animasi text gradient
    let tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to("#text-g", {
      backgroundImage: "linear-gradient(to right, #17f943, #17f9f8)",
      duration: 2,
    });
    tl.to("#text-g", {
      backgroundImage: "linear-gradient(to right,  #17f9f4, #1765f9)",
      duration: 2,
    }).to("#text-g", {
      backgroundImage: "linear-gradient(to right, #1765f9, #dd17f9)",
      duration: 2,
    });

    // animasi test pertama kali di load
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50, letterSpacing: "5vw" },
      { opacity: 1, y: 0, letterSpacing: "0vw", duration: 2, ease: "power2.out" }
    );

    // animasi marquee
    const marquee = document.querySelector(".marquee-content");

    if (marquee) {
      const clone = marquee.innerHTML;
      marquee.innerHTML += clone;

      gsap.to(".marquee-content", {
        xPercent: -50,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }
  });
</script>


<Nav DarkMode={DarkMode} on:toggle={handleToggle}></Nav>

<!-- jarak navigasi -->
<div class="w-[100vw] h-45 md:h-auto"
class:bg-black={DarkMode}
class:bg-white={!DarkMode}
></div>

<!-- container pembugkus -->
<div class="w-[100vw] h-auto overflow-hidden bg-black"
class:bg-black={DarkMode}
class:text-white={DarkMode}
class:bg-white={!DarkMode}
>


  <div id="home" class="w-full h-[100vh] flex flex-col md:flex-row justify-around items-center">
  
      <div class="w-90 h-auto flex flex-col justify-start items-start">
        <h1 class="text-7xl font-bold fade-in"> <span id="text-g" class="gradient-text bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent">FULL STACK WEB DEVELOPER </span> <br> NAIM ABDULLAH</h1>
        <p class="text-2xl text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti voluptates iusto facilis rerum nulla!</p>
      </div>

      
  
      <div class="w-[20vw] h-[50vh] ">
        <div class="w-full flex justify-start items-center">
          <h1 class="text-2xl font-bold p-5 rounded-xl shadow-md  bg-gray-100 transform rotate-10"
          class:shadow-xl={DarkMode}
          class:shadow-gray-600={DarkMode}
          ><img src="https://static.cdnlogo.com/logos/l/38/leveldb.svg" alt="" class="w-15" /></h1>
        </div>
        <div class="w-full flex justify-end items-center">
          <h1 class="text-2xl font-bold p-5 rounded-xl shadow-md bg-blue-500 transform rotate-3"
          class:shadow-xl={DarkMode}
          class:shadow-gray-600={DarkMode}
          >
          <img src="https://go.dev/images/go-logo-white.svg" alt="golang" class="w-15">
          </h1>
        </div>
        <div class="w-full flex justify-start items-center">
          <h1 class="text-2xl font-bold p-5 rounded-xl shadow-md bg-gray-100 transform -rotate-10"
          class:shadow-xl={DarkMode}
          class:shadow-gray-600={DarkMode}
          ><img src="https://raw.githubusercontent.com/sveltejs/branding/2af7bc72f1bf5152dab89bee1ee2093b1be0824d/svelte-logo-cutout.svg" alt="" class="w-15"/>
          </h1>
  
        </div>
      </div>
      
    </div>


    <!-- marque -->
     <div class="w-full flex justify-center">
       <div class="relative w-[50vw] overflow-hidden py-4">
         <!-- Efek Fade (Kabut) Kiri -->
         <div class="absolute left-0 top-0 h-full w-20 bg-gradient-to-r via-transparent to-transparent z-10"
         class:from-black={DarkMode}
         class:from-white={!DarkMode}
         ></div>
         
         <!-- Marquee Content -->
         <div class="marquee-content flex space-x-8 min-w-max">
           <i class="fa-brands fa-html5 text-6xl text-orange-500"></i>
           <i class="fa-brands fa-css3 text-6xl text-blue-500"></i>
           <i class="fa-brands fa-js text-6xl text-yellow-400"></i>
           <i class="fa-brands fa-react text-6xl text-cyan-400"></i>
           <i class="fa-brands fa-node-js text-6xl text-green-500"></i>
           <i class="fa-brands fa-golang text-7xl text-blue-400"></i>
           <img src="https://raw.githubusercontent.com/sveltejs/branding/2af7bc72f1bf5152dab89bee1ee2093b1be0824d/svelte-logo-cutout.svg" alt="Svelte" class="w-16"/>
           <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" class="w-20"/>
           <img src="https://raw.githubusercontent.com/gofiber/docs/master/static/img/logo.svg" alt="Fiber" class="w-16"/>
         </div>
       
         <!-- Efek Fade (Kabut) Kanan -->
         <div class="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-transparent to-transparent z-10"
         class:from-black={DarkMode}
         class:from-white={!DarkMode}
         ></div>
       </div>
     </div>

    <!-- about -->
     <div id="about" class="w-full h-[100vh] flex flex-col justify-center items-center relative">
         <div class="w-full"><h1 class="text-8xl mx-[10vw] absolute top-[10%]  text-st">About</h1></div>
         <div class="fade-scroll w-[100vw] md:w-[900px] h-[500px] bg-gray-900/70 rounded-none md:rounded-3xl p-5 flex justify-center items-center relative border-2 border-gray-600 backdrop-blur-[2px]">
           <div style="background-image: url('./nm-no-bg.png');" class="hidden md:block w-[300px] h-[400px] rounded-3xl bg-cover"
           class:bg-purple-500={DarkMode}
           class:bg-yellow-500={!DarkMode}
           ></div>
           <div class="w-[450px] h-[400px] flex flex-col justify-start items-start p-2 text-white">
              <h1 class="text-5xl md:text-4xl font-bold {DarkMode ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : ""}">CHAIRUN NAIM ABDULLAH</h1>
              <p class="overflow-auto font-thin text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus quo accusamus tempora aspernatur blanditiis nobis possimus quae fugiat doloribus? Explicabo saepe autem voluptatem officiis cupiditate temporibus illo exercitationem porro eius velit suscipit aut totam laudantium enim excepturi earum asperiores, a recusandae vero aperiam tenetur? Et, animi fugit. Mollitia, molestiae. Cum nam impedit veritatis voluptatibus enim accusantium, iusto, voluptatem dolores corporis, beatae nemo ipsam temporibus eligendi sunt tempore. Fugiat amet dignissimos obcaecati placeat molestias cumque, sint vero nesciunt illo quae consequatur numquam qui corrupti saepe porro provident in suscipit. Incidunt vero reprehenderit aliquam perferendis commodi dignissimos assumenda, similique culpa voluptatem!</p>
           </div>
           <p class="hidden md:inline-block absolute rotate-90 left-[-10%] text-gray-400 font-thin">What we do in life echoes in eternity</p>
         </div>
     </div>


     <!-- project -->
     <div id="project" class="w-full h-auto flex flex-col justify-center items-center">
      <div class="w-full"><h1 class="text-8xl mx-[10vw] text-st">Project</h1></div>
      
      <!-- component project -->
        <Project></Project>

     </div>
     
     <!-- contact -->
     <div class="w-full" id="contact"><h1 class="text-8xl mx-[10vw] text-st">Contact</h1></div>
     <div class="w-full h-[85vh] flex flex-col justify-center items-center">
       <FormContact DarkMode={DarkMode} />
      </div>



      <!-- // Footer -->
      <div class="w-full"><h1 class="text-8xl mx-[10vw] text-st">Contact</h1></div>
      <div class="flex flex-col min-h-screen md:min-h-auto">
        <Footer></Footer>
      </div>
    
</div>