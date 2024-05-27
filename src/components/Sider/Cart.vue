<template>
    <div class="max-h-[vh40] overflow-auto  pr-2 text-xs">
    <div v-for="items in cart" :key="items.id"
      class="flex justify-between text-center bg-slate-200 rounded-lg py-3 px-2 my-3 relative"
      
    >
      <span @click="removeItem(items.id)"
        class="absolute flex -top-3 w-5 text-center items-center rounded-full justify-center h-5 -right-2 cursor-pointer bg-red-500 text-xs text-white"
        >x</span
      >
      <img :src="items.images ? items.images : 'https://via.placeholder.com/100'" alt="" class="rounded-md max-w-20" />
      <div class="flex flex-col">
        <h5 class="uppercase ">{{items.title }}</h5>
        <p>£{{ items.price }}</p>
      </div>
      <div class="flex flex-col">
        <h5 class="uppercase">Quantity</h5>
        <div class="flex justify-between items-center">
          <span  @click="decreaseQuantity(items.id)"
            class="flex shadow-sm text-center items-center rounded-full justify-center h-5 w-5 right-0 cursor-pointer bg-slate-500 text-xs text-white"
            >-</span
          >
          <span>{{ items.quantity }}</span>
          <span @click="increaseQuantity(items.id)"
            class="flex shadow-sm text-center items-center rounded-full justify-center h-5 w-5 right-0 cursor-pointer bg-slate-500 text-xs text-white"
            >+</span
          >
        </div>
      </div>
    </div>
    </div>

</template>
<script setup>
import {computed} from 'vue';
import { useStore } from "vuex";


const store = useStore();
const cart = computed(() => store.state.addToCart);

const increaseQuantity = (id) =>{ 
  store.commit('increaseQuantity',id)
store.dispatch('total')
}
const decreaseQuantity = (id) => {
  store.commit('decreaseQuantity',id)
  store.dispatch('total')
}
const removeItem = (id) =>{
   store.commit('removeItem',id)
   store.dispatch('total')
}
 </script>