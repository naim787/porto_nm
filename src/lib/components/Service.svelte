<script>
  import { Card, Button } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";

  let data = [
    {
    title : "PORTOFOLIO",
    mony_type : "Rp",
    mount : "100,000",
    between : "/tahun",
    backround : "bg-linear-to-r from-green-200 to-white",
    redy : [
        "halaman arahan (1 halaman)",
        "revisi 3x",
        "geratis domain (.my.id)",
    ],
    not_redy : [
        "X (.com/.net/.co.id/.net/.id/ dan lain-lain)",
        "tidak ada database"
        // bg-linear-to-r from-green-200 to-blue-200
    ]
    },
    {
    title : "SEDAG",
    mony_type : "Rp",
    mount : "500,000",
    between : "/tahun",
    backround : "bg-linear-to-r from-blue-200 to-cyan-200",
    redy : [
        "1 halaman",
        "revisi 3x",
        "gratis domain (.com/.xyz/.store/.site/.org/ dan lain-lain)"
    ],
    not_redy : [
        "X (.co.id/.net/.id)",
        "tidak ada database"
    ]
    },
    {
    title : "PREMIUM",
    mony_type : "Rp",
    mount : "1,000,0000",
    between : "/tahun",
    backround : "bg-linear-to-r from-red-300 to-orange-200",
    redy : [
        "5 halaman",
        "revisi 1x",
        "custom bebas domain (.com/.co.id/.xyz/.net/.id/ dan lain-lain)",
        "database users & product (posgre sql, mysql, sqlite)",
    ],
    not_redy : [
        "tidak teringrasi deggan mintrans,ewallet atau bank",
    ]
    },
  ]
</script>

<div class="w-[100vw] h-auto flex flex-wrap justify-evenly items-start">
    {#each data as dat}
        <Card class={`p-4 sm:p-8 md:p-10 ${dat.backround}`}>
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{dat.title}</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold">{dat.mony_type}</span>
            <span class="text-5xl font-extrabold tracking-tight">{dat.mount}</span>
            <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">{dat.between}</span>
        </div>
        <!-- List -->
        <ul class="my-7 space-y-4">
            {#each dat.redy as r}
                <li class="flex space-x-2 rtl:space-x-reverse">
                <CheckCircleSolid class="text-primary-600 dark:text-primary-500 h-4 w-4" />
                <span class="text-base leading-tight font-normal text-gray-500 dark:text-gray-400">{r}</span>
                </li>
            {/each}
            {#each dat.not_redy as n}
                <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
                <CheckCircleSolid class="h-4 w-4 text-red-400 dark:text-gray-500" />
                <span class="text-base leading-tight font-normal text-red-800">{n}</span>
                </li>
            {/each}
        </ul>
        <a href="https://api.whatsapp.com/send/?phone=62895352455400&text&type=phone_number&app_absent=0" class="">
            <Button class="w-full bg-black text-white">Cek Dulu</Button>
        </a>
        </Card>
    {/each}
</div>