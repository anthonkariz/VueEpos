<template>
  <div class="mt-2 border-2 rounded-lg border-dashed">
    <div class="flex justify-between p-3 text-sm">
      <div class="uppercase">Subtotal</div>
      <div>$40</div>
    </div>
    <div class="flex justify-between p-3">
      <div class="uppercase">service charges 10%</div>
      <div>$40</div>
    </div>
    <div class="border-b-2 border-dotted my-3"></div>
    <div class="uppercase text-2xl">
      <div class="flex justify-between p-3">
        <div class="">Total</div>
        <div>£{{total}}</div>
      </div>
    </div>

    <div class="flex justify-between my-3 p-3">
      <button
        class="bg-rose-500 hover:bg-blue-700 shadow-md font-light py-3 px-4 rounded uppercase"
      >
        Cancel orders
      </button>
      <button
        class="bg-slate-300 hover:bg-blue-700 shadow-md uppercase font-light py-2 px-4 rounded"
      >
        send order
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const total = computed(() => store.state.theTotal);
</script>

