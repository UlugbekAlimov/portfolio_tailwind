<template>
  <div class="container mx-auto">
    <h1 class="desktop:text-[36px] text-[22px] text-[#fff] desktop:mt-32 mt-10 ml-10 mb-10">Technologies</h1>
    <div class="grid desktop:px-5 px-14 gap-1 desktop:grid-cols-1 ">
      <div v-for="statistic in statistics" :key="statistic.id" >
        <statistic :knowledge="statistic.knowledge" :level="statistic.level" :title="statistic.title"/>
      </div>  
    </div>
    <p class="desktop:text-[36px] text-[22px] text-[#fff] mt-10 ml-10 mb-10">Additional technologies and skills</p>
    <div class="container mx-auto px-8">
      <ol class="text-[#ffff] desktop:ml-20 ml-10 desktop:text-[36px] text-[22px] grid grid-cols-3 gap-6 desktop:gap-x-72 ">
        <li>git</li>
        <li>jira</li>
        <li>swagger</li>
        <li>postman</li>
        <li>git</li>
        <li>jira</li>

      </ol>
    </div>
  </div>
</template>
<script>
import statistic from '../components/statistic.vue';
export default {
  components:{
    statistic
  },
  data(){
    return {
      statistics:[
        {id: 1, level: '20%', title: 'Html' , knowledge:'Advanced'},
        {id: 1, level: '20%', title: 'Html' , knowledge:'Advanced'},
        {id: 1, level: '20%', title: 'Html' , knowledge:'Advanced'},
        {id: 1, level: '20%', title: 'Html' , knowledge:'Advanced'},
      ]
      // blockWidthPercentage : '50%',
      // blockWidthPercentage1 : '30%',
      // blockWidthPercentage2 : '20%',
      // blockWidthPercentage3 : '40%',
    }
  }
}
</script>

<style>

</style>