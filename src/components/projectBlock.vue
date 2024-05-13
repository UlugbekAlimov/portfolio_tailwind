<template>
    <div class="flex text-[#fff] justify-center">
      <div class="bg-[#0F1624] z-50 w-[300px] desktop:w-[400px] p-6 border rounded-sm rounded-tl-[60px] rounded-br-[30px] ">
          <img class="rounded-[20px] p-3" :src="image">
          <h2 class="desktop:text-[36px] text-[22px] text-[#fff] my-2 text-center"><a class="cursor-pointer hover:underline " href="#"> {{ title }}</a></h2>
          <div class="flex justify-center ">
            <hr class="gradient-hr rounded-sm w-[220px]">
          </div>
          <p class="desktop:text-[25px] text-[20px]">{{ description }}</p>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    image:{
      type: Array,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    }
  }
}
</script>

<style>
  .gradient-hr {
      border: none;
      height: 5px;
      margin-bottom: 5px;
      background: linear-gradient(to right, #007bff, #8a2be2, #00bfff);
  }
</style>