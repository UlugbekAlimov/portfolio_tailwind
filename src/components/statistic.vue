<template>
  <div class="mb-10 ">
    <div class="flex justify-between"> 
      <p class="text-[#ffff] desktop:ms-[100px] ms-10 desktop:mt-0 mt-3 desktop:text-[34px] text-[22px]">{{ title }}</p>
      <p class="text-[#ffff] mt-4 desktop:me-[100px] me-10 desktop:text-[25px] text-[20px]">{{ knowledge }}</p>
    </div>
    <div class="container rounded-[30px] mb-5 mx-auto max-w-[1100px] h-[20px] border bg-[#162950]">
      <div :style="{ width: level }" class="h-[18.5px] rounded-[30px] bg-[#13ADC7]" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: String, 
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    knowledge:{
      type: String,
      required: true
    }
  }
} 
</script>

<style>

</style>
