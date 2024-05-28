<template>
   <section class="border-b-2 border-b-gray-100">
      <div class="container mx-auto">
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center">
            <div class="font-bold text-3xl">
              <span class="text-slate-500">P</span>OS
            </div>
            <input
              type="text"
              class="rounded-lg p-2 ml-2 bg-slate-100 py-2"
              placeholder="Search"
            />
          </div>
          <div class="flex justify-end items-center">
            <div class="mr-2">October 18th 2002 10:00AM</div>
            <button
            @click="clear"
              class="bg-slate-300 hover:bg-blue-700 shadow-md text-white font-light py-2 px-4 rounded"
            >
              clear
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
   const clear = () => localStorage.removeItem('menu');
</script>
