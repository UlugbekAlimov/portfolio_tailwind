<template>
  <div class="container mx-auto">
    <h1 class="desktop:text-[36px] text-[22px] text-[#fff] desktop:mt-40 mt-10 ml-10 mb-5">Technologies</h1>
    <div class=" w-full mx-auto p-8 ">
      <div class="grid desktop:px-10 px-10 grid-cols-1 gap-6">
        <div v-for="item in timelineData" class="relative col-span-1">
          <div class="border-l-2 rounded-sm absolute h-full"></div>
          <div class="p-4 relative z-10 bg_shadow shadow-lg rounded-lg">
            <h2 class="desktop:text-[27px] text-[22px] font-semibold mb-2">{{ item.year }}</h2>
            <p class="desktop:text-[25px] text-[20px]">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineData: [
        { year: 2018, text: 'weokfmwokemf' },
        { year: 2018, text: 'weokfmwokemf' },
        { year: 2018, text: 'weokfmwokemf' },
        { year: 2018, text: 'weokfmwokemf' },
      ],
    };
  },
};
</script>

<style scoped>
.bg_shadow{
  box-shadow: 4px 6px 10px 0px white;
}
</style>
