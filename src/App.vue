<template>
  <Header />
  <section>
    <div class="container mx-auto flex h-[95vh]">
 <div @click="sortCategory"> sort</div>
      <LeftSideBar />
      <Content/>
      <RightSideBar />
    </div>
  </section>
</template>
<script setup>
import Header from "./components/Header.vue";
import LeftSideBar from "./components/LeftSideBar.vue";
import Content from "./components/Content.vue";
import RightSideBar from "./components/RightSideBar.vue";
import { onMounted, ref, computed, onBeforeUnmount } from "vue";
import { useStore } from 'vuex'

// const cart = ref([]);

// const menuCopy = [];
// const store = useStore();
// const loadData = 'loadData';


// const total = computed(() =>
//   cart.value.reduce((acc, item) =>{
//     return acc + parseFloat(item.price) * item.quantity;
//   }, 0).toFixed(2)
  
// );
// const theTotal = computed(() =>store.state.theTotal);

// const categories = computed(() => store.state.categories); 

// const sortCategory = (id) =>{
//   store.commit('filteredMenu', 18)
//   console.log('filterd',store.state.menu)
// }
// const filterCartId = (id) => {
//   let filtered = menuCopy.value.filter((item) => item.categoryId == id);
//   menu.value = filtered;
// };




// const decreaseQuantity = (id) => {  
//   let index = cart.value.findIndex((item) => item.id == id);
//   if (cart.value[index].quantity > 1) {
//     cart.value[index].quantity -= 1;

//   } else {
//     cart.value.splice(index, 1);
//   }

// };
// const increaseQuantity = (id) => {
//   let index = cart.value.findIndex((item) => item.id == id);

//   cart.value[index].quantity += 1;


// };

// const removeItem = (id) => {
//   let index = cart.value.findIndex((item) => item.id == id);
//   cart.value.splice(index, 1);
  
// };


</script>
