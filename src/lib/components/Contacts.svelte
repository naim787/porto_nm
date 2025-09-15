<script>
	import {EnvelopeSolid, GithubSolid, YoutubeSolid} from 'flowbite-svelte-icons';
    import { Indicator, Avatar, Badge } from "flowbite-svelte";
</script>


<div class="w-full h-[90vh] flex justify-center items-center">

    <ul class="w-full max-w-sm divide-y bg-white border p-4 rounded dark:divide-gray-700">
      <li class="py-3 sm:py-4">
        <a href="mailto:naimmmm.abdullah@gmail.com" class="flex items-center space-x-3 rtl:space-x-reverse">
          <EnvelopeSolid class="shrink-0 h-6 w-6" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">naimmmm.abdullah@gmail.com</p>
          </div>
          <Badge color="green" class="px-2.5 py-0.5">
            <Indicator color="green" size="xs" class="me-1" />Lihat
          </Badge>
        </a>
      </li>
      <li class="py-3 sm:py-4">
        <a href="https://github.com/naim787" class="flex items-center space-x-3 rtl:space-x-reverse">
          <GithubSolid class="shrink-0 h-6 w-6" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">https://github.com/naim787</p>
          </div>
          <Badge color="green" class="px-2.5 py-0.5">
            <Indicator color="green" size="xs" class="me-1" />Lihat
          </Badge>
        </a>
      </li>
      <li class="py-3 sm:py-4">
        <a href="https://www.youtube.com/@ncodingg" class="flex items-center space-x-3 rtl:space-x-reverse">
          <YoutubeSolid class="shrink-0 h-6 w-6" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">https://www.youtube.com/@ncodingg</p>
          </div>
          <Badge color="green" class="px-2.5 py-0.5">
            <Indicator color="green" size="xs" class="me-1" />Lihat
          </Badge>
        </a>
      </li>
    </ul>

</div>






<!-- 
 <Li>
        EMAIL : <a href="/" class="font-serif text-blue-500">naimmmmab@gmail.com</a>
      </Li>
      <Li>
        GITHUB :  <a href="https://github.com/naim787" class="font-serif text-blue-500">naim787</a>
      </Li>
      <Li>
        YOU TOUBE :   <a href="https://www.youtube.com/@ncodingg" class="font-serif text-blue-500">ncoding</a>
      </Li> -->