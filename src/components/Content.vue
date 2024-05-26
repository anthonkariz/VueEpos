<template>
  <div class="flex flex-col border-r-2 h-full w-full">
    <div class="h-[70vh] w-full overflow-auto pl-3 pt-3 flex flex-wrap gap-2 cursor-pointer">
      <div class="md:w-1/4 lg:w-1/6" v-for="menu in menuData" :key="menu.id"
      @click="getItemById(menu.id)"
      >
        <img
          :src="menu.image ? menu.image : 'https://via.placeholder.com/250'"
          alt="food"
          class="rounded-tr-lg rounded-tl-lg"
        />

        <div class="bg-zinc-200 pt-3 rounded-br-lg rounded-bl-lg">
          <h5 class="text-center uppercase text-xs">{{ menu.title }}</h5>
          <div class="flex justify-between px-3 py-2 text-xs">
            <div class="uppercase">Category</div>
            <div><span>N</span> <span>hh</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="fex flex-wap bg-slate-200 py-3 px-2" >
      <button
        class="bg-slate-400 uppercase hover:bg-green-900 shadow-md text-white font-light py-3 px-5 rounded mr-2"
        v-for="category in categories" :key="category.id" 
        @click="getCategoryId(category.id)" 
      
      >
        {{category.category}}
      </button>
    </div>
 
  
  </div>
</template>

<script setup>

import { defineProps, defineEmits} from "vue";


const emit = defineEmits(['emiCatId','otherEmit'])
const props = defineProps({
  menuData: {
    Array,
    require: true,
  },
  categories: {
    Array,
    require: true,
  },
});

const getCategoryId = (id) =>{
  emit('emiCatId',id)
  
 }
 const getItemById = (id)=>{
  emit('otherEmit',id)

 }

</script>
