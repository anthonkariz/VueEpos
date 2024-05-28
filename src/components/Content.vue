<template>
  <div class="flex flex-col border-r-2 h-full w-full">
    <div v-if="!loading" 
    class="flex items-center justify-center h-full">
    <div class="text-3xl">Loading....</div>
  </div>
    <div class="h-[70vh] w-full overflow-auto pl-3 pt-3 flex flex-wrap gap-2">
      <div
        class="md:w-1/4 lg:w-1/6 cursor-pointer relative"
        v-for="menu in menu"
        :key="menu.id"
        @click="addToCarts(menu.id)"
      >
        <div v-if="checkItemId(menu.id)"
          class="bg-green-800 text-white items-center justify-center flex rounded-lg shadow-md absolute top-0 h-full text-center left-0 w-full opacity-50"
        >
        <div>Selected</div>
        </div>
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

    <div class="fex flex-wap bg-slate-200 py-3 px-2">
      <button
        class="bg-slate-400 uppercase hover:bg-green-900 shadow-md text-white font-light py-3 px-5 rounded mr-2"
        :class="
          category.id === selectedCategory ? 'bg-green-900' : 'bg-slate-400'
        "
        v-for="category in categories"
        :key="category.id"
        @click="getCategoryId(category.id)"
      >
        {{ category.category }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
onMounted(() =>  store.dispatch("loadData"));
const menu = computed(() => store.state.menu);
const categories = computed(() => store.state.categories);
const getCategoryId = (id) => store.commit("filteredMenu", id);
const selectedCategory = computed(() => store.state.selected);
const addToCarts = (id) =>{
   store.commit("addToCart", id);
   store.dispatch('total')
}
const loading = computed(() => store.state.loading);
const checkItemId = (id) => {
  let itemIndex = store.state.addToCart.findIndex((item) => item.id == id);
  if (itemIndex !== -1) {
    return true;
  }
  return false;
};

</script>
