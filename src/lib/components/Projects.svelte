  <script>
   import { Card, Button } from "flowbite-svelte";
   import { ArrowRightOutline } from "flowbite-svelte-icons";

  let dataProjects = [
    {
        src : "https://raw.githubusercontent.com/naim787/zkfs/refs/heads/main/src/lib/assets/favicon.webp",
        cap : "ZKFS adalah sebuah app encripsi data sensitif",
        stack : [
            {
                src : "",
                lebar : "w-20",
            }
        ]
    },
  ]
  </script>
  
  <div class="w-full h-auto flex justify-evenly mt-20 flex-wrap">
    {#each dataProjects as data}
    <div class="space-y-4 relative">
        <Card img={data.src}>
            <div class="m-6">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.cap}</h5>
            </div>
        </Card>
        <h1 class="absolute top-[60%] left-[40%] bg-linear-to-r from-cyan-300 to-white bg-clip-text text-5xl font-extrabold text-transparent">ZKFS</h1>
    </div>
    {/each}
  </div> 