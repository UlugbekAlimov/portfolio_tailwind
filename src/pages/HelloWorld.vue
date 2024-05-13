<template>
  <div class="container relative mx-auto">
    <img class="absolute z-10 right-0 desktop:w-[450px] w-[200px]" src="../assets/drawing.png" alt="">
    <div>
      <h1 class="text-white mb-4 md:ml-28 ml-10 desktop:mt-[80px] font-medium text-[#fff] mt-[50px] desktop:text-[36px] text-[22px]">Lorem ipsum dolor sit amet</h1>
      <p class="text-white mobile:max-w-[60%] desktop:text-[25px] text-[20px] text-[#fff] desktop:ml-24 ml-14 desktop:mt-10 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <Button class="desktop:mt-[30px] text-[#fff] desktop:ml-[120px] ml-14 font-bold py-2 px-6 rounded-[20px]">
        Let's begin
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue';
export default {
  components:{
    Button,
  }
}
</script>

<style>

</style>
