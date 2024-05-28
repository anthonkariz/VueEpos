<template>
  <div class="flex flex-col border-r-2 h-full w-full">
    <div
      class="h-[70vh] w-full overflow-auto pl-3 pt-3 items-center justify-center flex flex-col"
    >
   customer {{ customer }}
      <form @submit.prevent="onSubmit" class="w-1/2">
        <div class="flex flex-col">
          <label
            for="name"
            class="block text-sm font-medium text-left text-gray-700"
          >
            Name
          </label>
          <div class="mt-">
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              class="shadow-sm border-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-500 py-2 px-3 rounded-md w-full"
              v-model="form.name"
            />
          </div>
          <label
            for="phone"
            class="block text-sm font-medium text-left text-gray-700"
          >
            Phone
          </label>
          <div class="mt-1 mb-2">
            <input
              type="text"
              name="phone"
              id="phone"
              autocomplete="off"
              class="shadow-sm border-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-500 py-2 px-3 rounded-md w-full"
              v-model="form.phone"
            />
          </div>
          <label
            for="table"
            class="block text-sm font-medium text-left text-gray-700"
          >
            Table
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="table"
              id="table"
              autocomplete="off"
              class="shadow-sm border-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-500 py-2 px-3 rounded-md w-full"
              v-model="form.table"
            />
          </div>
          <div class="mt-2 flex justify-end">
            <button
              type="submit"
              class="py-2 px-4 bg-slate-300 hover:bg-slate-600 hover:text-white shadow-md rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();
const form = reactive({
  name: "",
  phone: "",
  table: "",
});
const customer = computed(()=> store.state.customerName);
const onSubmit = () => {
  store.commit("addCustomer", form);
  console.log(store.state.customerName);
};
</script>
