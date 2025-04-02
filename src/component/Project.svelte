<script>
  let Dproject = [
    {
      j_proj: "Bakar Rica",
      url_proj: "./bakar-r-h.png",
      tes_stc: [
        '<i class="fa-brands fa-html5 text-4xl m-3 text-orange-500 inline-block"></i>',
        '<img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="" class="w-10 inline-block"/>',
        '<img src="https://img.icons8.com/?size=100&id=Mm35TzLKahiF&format=png&color=000000" alt="" class="w-10 inline-block"/>',
        '<img src="https://static.cdnlogo.com/logos/l/38/leveldb.svg" alt="" class="w-10 inline-block"/>',
      ]
    },
    {
      j_proj: "Dashbord Bakar Rica",
      url_proj: "./dasahbord-resto-br.jpeg",
      tes_stc: [
        '<i class="fa-brands fa-html5 text-4xl m-3 text-orange-500 inline-block"></i>',
        '<img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="" class="w-10 inline-block"/>',
        '<img src="https://img.icons8.com/?size=100&id=Mm35TzLKahiF&format=png&color=000000" alt="" class="w-10 inline-block"/>',
        '<img src="https://static.cdnlogo.com/logos/l/38/leveldb.svg" alt="" class="w-10 inline-block"/>',
      ]
    },
    {
      j_proj: "Bli-Bli Lite",
      url_proj: "./e_commerce.png",
      tes_stc: [
        '<i class="fa-brands fa-html5 text-4xl m-3 text-orange-500 inline-block"></i>',
        '<i class="fa-brands fa-js text-4xl m-3 text-yellow-500 inline-block"></i>',
        '<i class="fa-brands fa-golang text-5xl m-3 text-blue-500 inline-block"></i>',
        '<img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="" class="w-10 inline-block"/>',
        '<img src="https://static.cdnlogo.com/logos/l/38/leveldb.svg" alt="" class="w-10 inline-block"/>',
      ]
    },
    {
      j_proj: "Portofolio Web 2",
      url_proj: "./porto-2.jpeg",
      tes_stc: [
        '<i class="fa-brands fa-html5 text-4xl m-3 text-orange-500 inline-block"></i>',
        '<i class="fa-brands fa-js text-4xl m-3 text-yellow-500 inline-block"></i>',
        '<img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="" class="w-10 inline-block"/>',
      ]
    },
    {
      j_proj: "Portofolio Web 3",
      url_proj: "./porto-3.png",
      tes_stc: [
        '<i class="fa-brands fa-html5 text-4xl m-3 text-orange-500 inline-block"></i>',
        '<img src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="" class="w-10 inline-block"/>',
        '<img src="https://img.icons8.com/?size=100&id=Mm35TzLKahiF&format=png&color=000000" alt="" class="w-10 inline-block"/>',
        '<img src="https://venuvivek.com/bg%20Images/GSap.png" alt="" class="w-10 inline-block"/>',
      ]
    },
  ];

  // Array untuk melacak status loading per gambar
  let loadingStatus = Dproject.map(() => true); 
</script>

{#each Dproject as project, index}
  <div class="w-[90vw] md:w-1/2 h-[450px] flex flex-col justify-start items-start m-2">
    <h1 class="text-3xl font-thin">{project.j_proj}</h1>

    <!-- Gambar dengan loading menggunakan bounce dari Tailwind CSS -->
    {#if loadingStatus[index]}
      <!-- Bounce animation as loading -->
      <div class="animate-pulse w-full h-[450px] bg-gray-300 rounded-3xl bg-center flex">
        <i class="fa-solid fa-image m-auto text-5xl"></i>
      </div>
    {/if}
    
    <img
      src={project.url_proj}
      alt={project.j_proj}
      on:load={() => loadingStatus[index] = false}
      style="display: {loadingStatus[index] ? 'none' : 'block'}"
      class="w-full h-full bg-yellow-500 rounded-3xl bg-cover border-[10px] bg-center"
    />

    <!-- Teknologi yang digunakan -->
    <div class="flex justify-evenly items-center w-auto h-10">
      {#each project.tes_stc as stc}
        <div class="m-1">
          {@html stc}
        </div>
      {/each}
    </div>
  </div>
{/each}

