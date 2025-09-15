<script>
  import Contacts from "$lib/components/Contacts.svelte";
  import Footer from "$lib/components/Fot.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Skill from "$lib/components/Skill.svelte";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Card, Button, Toggle } from "flowbite-svelte";
</script>

<Navbar class="fixed w-[100vw] backdrop-blur border border-b-1 border-gray-200 z-10">
  <NavBrand href="/" class="mcpe-font text-5xl font-bold p-2">N</NavBrand>
  <NavHamburger class="bg-gray-300"/>
  <NavUl class="h-15 bg-white rounded-md">
    <NavLi href="#tentag">Tenteng</NavLi>
    <NavLi href="#proyek">Proyek</NavLi>
    <NavLi href="#kontak">Kontak</NavLi>
  </NavUl>
</Navbar>


<div class="w-[100vw] h-auto flex flex-col justify-center items-center bg-[radial-gradient(#BDBDBD_1px,transparent_0)] [background-size:30px_30px] overflow-x-hidden pt-15">

    <!-- main -->
    <div class="w-[100vw] h-[100vh] flex justify-evenly items-center flex-col lg:flex-row">
        <div class="w-auto h-auto border-[1px] bg-white border-dashed rounded-xl border-gray-300 shadow-2xl flex-col 
        p-4 lg:shadow-none lg:bg-transparent lg:border-none">
           <div class="mcpe-font text-green-700 font-vold text-[2vh]">2025</div>
           <div class="mcpe-font text-[5.5vh] font-bold">NAIM ABDULLAH</div>
           <div class="flex w-full gap-2 font-bold">
               <p class="p-2 bg-green-500/50 text-green-900 rounded-xl">NODEJS</p>
               <p class="p-2 bg-blue-500/50 text-blue-900 rounded-md">GO</p>
               <p class="p-2 bg-gray-300 rounded-md">BUN</p>
        </div>
        </div>
        <img src="./nm-no-bg.png" alt="" class="w-100 bg-gray-700 rounded-2xl">
    </div>

    <div class="w-full px-4" id="tentag">
      <h1 class="text-6xl mcpe-font">TENTAG SAYA</h1>
    </div>
    <!-- about -->
    <div class="w-full h-auto flex flex-row flex-wrap justify-evenly items-center gap-4">
      <!-- about -->
        <div class="w-115 h-185 bg-white rounded-xl border-4 border-dashed border-gray-400 relative p-2">
          <h1 class="text-8xl absolute left-[40%] top-[-13%] transform origin-center rotate-180 mcpe-font">^</h1>
          <!-- <h1 class="text-3xl">ABOUT</h1> -->
          <div class="h-180 overflow-y-auto font-sans">
            <p class="text-2xl">Nama saya Chairun Naim Abdullah, seorang pengembang web yang berasal dari Sulawesi Utara, Indonesia, dengan latar belakang pendidikan terakhir di SMA. Meskipun saya tidak menempuh pendidikan tinggi formal di bidang teknologi, saya berhasil membuktikan bahwa pembelajaran otodidak yang konsisten dan pengalaman nyata di lapangan bisa membawa saya menjadi seorang profesional yang kompeten di dunia teknologi, khususnya dalam pengembangan web dan blockchain. <br><br>

Saya telah memiliki pengalaman lebih dari 4 tahun dalam mengembangkan berbagai jenis aplikasi web, mulai dari sistem internal perusahaan hingga solusi berbasis Web3 yang memanfaatkan teknologi blockchain. Dalam perjalanan karier saya, saya terbiasa bekerja dengan teknologi-teknologi modern, baik untuk pengembangan front-end maupun back-end, dan selalu mengikuti perkembangan terbaru dalam dunia pengembangan perangkat lunak.  <br><br>

Di sisi back-end, saya menguasai dan aktif menggunakan Node.js, Bun, serta Golang—tiga teknologi yang memungkinkan saya membangun sistem yang tangguh, ringan, cepat, dan skalabel. Saya berfokus tidak hanya pada performa, tetapi juga pada keamanan, struktur kode yang bersih, dan kemudahan dalam pengelolaan jangka panjang.<br><br>

Salah satu bidang yang sangat saya tekuni dan menjadi kekuatan utama saya adalah dunia blockchain dan Web3. Tidak hanya sekadar membangun aplikasi desentralisasi (DApps), saya juga mampu merancang dan mengimplementasikan blockchain Layer 1 (L1) saya sendiri, yang berarti saya memahami arsitektur sistem blockchain dari tingkat paling dasar, termasuk lapisan konsensus, yang merupakan jantung dari sistem desentralisasi.  <br><br>

Saya percaya bahwa teknologi bukan hanya tentang kode, tetapi tentang menciptakan solusi yang relevan dan berkelanjutan. Oleh karena itu, dalam setiap proyek yang saya tangani, saya selalu berusaha memahami kebutuhan bisnis dan pengguna akhir, agar solusi yang saya bangun benar-benar memiliki dampak positif dan nyata.  <br><br>

Sebagai seorang profesional yang terus belajar, saya terbuka terhadap tantangan baru, kolaborasi lintas disiplin, dan kesempatan untuk tumbuh bersama komunitas teknologi di Indonesia maupun secara global. Ke depan, saya ingin terus berkontribusi dalam membangun ekosistem teknologi yang inklusif, efisien, dan inovatif—khususnya dalam mendorong adopsi teknologi blockchain di Indonesia dan kawasan Asia Tenggara.</p>
          </div>
        </div>

        <!-- skill -->
       <Skill />
  </div>

  <div class="w-full px-4" id="proyek">
      <h1 class="text-6xl mcpe-font">projects</h1>
  </div>
  <!-- projects -->
   <Projects />

   <div class="w-full px-4 mt-20" id="kontak">
      <h1 class="text-6xl mcpe-font">CONTACTS</h1>
  </div>

  <Contacts />

</div>

<Footer />