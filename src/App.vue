<template>
  <Header />
  <section>
    <div class="container mx-auto flex h-[95vh]">
<div>store{{ theTotal }}</div>
      <LeftSideBar />
      <Content
        :menuData="menu"
        :categories="categories"
        @emiCatId="filterCartId"
        @otherEmit="addToCarts"
      
      />
      <RightSideBar
        :cartItems="cart"
        :total="+total"
        @decreaseQuantity="decreaseQuantity"
        @increaseQuantity="increaseQuantity"
        @removeItem="removeItem"
      />
    </div>
  </section>
</template>
<script setup>
import Header from "./components/Header.vue";
import LeftSideBar from "./components/LeftSideBar.vue";
import Content from "./components/Content.vue";
import RightSideBar from "./components/RightSideBar.vue";
import { onMounted, ref, computed } from "vue";
import { useStore } from 'vuex'



onMounted(() => {
  data();
});
const menu = ref([]);
const cart = ref([]);
const categories = ref([]);
const menuCopy = [];
const store = useStore();

const data = async () => {
  let response = await fetch(
    "http://localhost:8888/devthatched/wp-json/resto/food"
  );
  let data = await response.json();
  if (response.ok) {
    menu.value = data;
    menuCopy.value = data;
    let categoriesArray = [];
    
    Object.entries(data).forEach(([key, value]) => {
      categoriesArray.push({ category: value.category, id: value.categoryId });
    });
    let uniqueCategories = [
      ...new Map(categoriesArray.map((item) => [item["id"], item])).values(),
    ];
    categories.value = uniqueCategories;
  }
};
const total = computed(() =>
  cart.value.reduce((acc, item) =>{
    return acc + parseFloat(item.price) * item.quantity;
  }, 0).toFixed(2)
  
);
const theTotal = computed(() =>store.state.theTotal);
const increment = () => store.commit('increment',total.value);



const filterCartId = (id) => {
  let filtered = menuCopy.value.filter((item) => item.categoryId == id);
  menu.value = filtered;
};

const addToCarts = (id) => {
  let item = menu.value.find((item) => item.id == id);
  let index = cart.value.findIndex((item) => item.id == id);
  if (index > -1) {
    cart.value[index].quantity += 1;
  
    return;
  }
  cart.value.push({ ...item, quantity: 1 });

};


const decreaseQuantity = (id) => {  
  let index = cart.value.findIndex((item) => item.id == id);
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity -= 1;

  } else {
    cart.value.splice(index, 1);
  }

};
const increaseQuantity = (id) => {
  let index = cart.value.findIndex((item) => item.id == id);

  cart.value[index].quantity += 1;


};

const removeItem = (id) => {
  let index = cart.value.findIndex((item) => item.id == id);
  cart.value.splice(index, 1);
  
};

</script>
