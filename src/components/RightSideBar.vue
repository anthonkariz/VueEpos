<template>
  <div class="flex flex-col w-1/3 pl-3 pt-5">
    <Order />
    <Cart
      :menuData="cartItems"
      @decreaseQuantity="decreaseQuantity"
      @increaseQuantity="increaseQuantity"
      @removeItem="removeItem"
    />
    <Total :total="+total" @removeItem="removeItem" />
  </div>
</template>
<script setup>
import Order from "./Sider/Order.vue";
import Cart from "./Sider/Cart.vue";
import Total from "./Sider/Total.vue";
import { defineProps, defineEmits } from "vue";
const props = defineProps({

  total:{
    type:Number,
    required: true
  
  },
    cartItems: {
    Type: Array,
    require: true,
  }

});
console.log(props.Total, props.cartItems);
const emits = defineEmits(["increaseQuantity", "decreaseQuantity","removeItem"]);

const increaseQuantity = (id) => emits("increaseQuantity", id);
const decreaseQuantity = (id) => emits("decreaseQuantity", id);
const removeItem = (id) =>{
  console.log("At side",id);
   emits("removeItem", id);
}
</script>
