<template>
  <div class="border-b-2 border-dotted mb-3 pb-3">
    <div class="flex justify-between uppercase">
      <div>ORDER #</div>
      <div class="">12345678</div>
    </div>
    <div class="flex justify-between uppercase">
      <div>Name :{{ Name }}</div>
      <div>table: {{ table }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const table = computed(() => store.state.customerName.table);
const Name = computed(() => store.state.customerName.name);
</script>
