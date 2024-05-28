<template>
    <Header />
    <section>
      <div class="container mx-auto flex h-[95vh]">   
        <LeftSideBar />
        <Forms />
        <RightSideBar />
      </div>
    </section>
    <router-view />
  </template>
  <script setup>
    import Header from "../components/Header.vue"
  import LeftSideBar from "../components/LeftSideBar.vue";

  import Forms from "@/components/main/Forms.vue";
  import RightSideBar from "../components/RightSideBar.vue";
  </script>