  <script>
  import { Card } from "flowbite-svelte";

  let dataProjects = [
    {
        src_parent : "",
        tiggiImg : "h-100",
        judul : "Restorant Nm V2",
        deskripsi : "app yang dibuat untuk menyelesaikan masalah yang ada di restorant, untuk management & kariyawan",
        stack : [
            {
                src : "https://raw.githubusercontent.com/naim787/zkfs/refs/heads/main/src/lib/assets/favicon.webp",
                lebar : "w-20",
            }
        ]
    },
  ]
  </script>
  
  <div class="w-full h-auto flex justify-evenly mt-20 flex-wrap">
    {#each dataProjects as data}
        <Card img={data.src_parent} class={`${data.tiggiImg} my-2 bg-white`}>
        <div class="m-6">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.judul}</h5>
            <p class="mb-3 leading-tightz text-gray-700 dark:text-gray-400">{data.deskripsi}</p>
            <div class="w-full h-20 flex justify-start items-start gap-2">
                {#each data.stack as dc}
                   <img src={dc.src} alt="fiber" class={`${dc.lebar}`}>
                {/each}
            </div>
        </div>
        </Card> 
    {/each}
  </div> 