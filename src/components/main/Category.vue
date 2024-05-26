<template>
     <div class="fex flex-wap bg-slate-200 py-3 px-2" >
      <button
        class="bg-slate-400 uppercase hover:bg-green-900 shadow-md text-white font-light py-3 px-5 rounded mr-2"
        v-for="category in categories" :key="category.id" 
        @click="getCategoryId(category.id)" 
      
      >
        {{category.category}}
      </button>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    categories: {
    Array,
    require: true,
  },
})
</script>
