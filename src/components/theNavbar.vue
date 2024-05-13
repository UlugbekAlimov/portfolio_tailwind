<template>
  <div
    class="py-3.5 px-5 container mx-auto shadow flex justify-between items-center"
  >
    <div class="flex items-center">
      <span class="text-[#1295a1] text-xl mr-1">
        <img src="../assets/vue.svg" alt="" />
      </span>

      <h1 class="text-xl">Portfolio</h1>
    </div>
    <ul class="desktop:flex text-[#fff] hidden gap-4">
      <li v-for="Link in Links" :key="Link" class="">
        <a :href="Link.link" class="text-xl hover:text-[#1561c5]">{{
          Link.name
        }}</a>
      </li>
      <Button>Download CV</Button>
    </ul>

    <span @click="MenuOpen()" class="desktop:hidden cursor-pointer text-4xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <Sidebar :open="open" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import Button from "./Button.vue";

const Links = ref([
  { name: "Home", link: "#" },
  { name: "Home", link: "#" },
  { name: "Home", link: "#" },
]);
let open = ref(false);

function MenuOpen() {
  open.value = !open.value;
}
</script>

<style></style>
