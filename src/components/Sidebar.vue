<template>
  <div class="w-full top-14 duration-500 z-50 ease-in absolute" :class="[ props.open ? 'left-0' : 'left-[-100%]']">
  <ul class="z-40 pl-14 bg-[#0F1624] container mx-auto">
      <li v-for="Link in Links" :key="Link" class="md:mx-4 md:my-0 my-6">
        <a :href="Link.link" class="text-xl hover:text-[#1561c5]">{{ Link.name }}</a>
      </li>
      <Button>Download CV</Button>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps} from 'vue'
import Button from './Button.vue'

const props = defineProps(['open'])
const Links = ref([
    {name : "Home" , link : "#"},
    {name : "Home" , link : "#"},
    {name : "Home" , link : "#"}
  ])
</script>

<style>

</style>