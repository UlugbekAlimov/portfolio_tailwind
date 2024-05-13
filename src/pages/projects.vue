<template>
  <div class="container mx-auto">
    <p class="desktop:text-[36px] text-[22px] text-[#fff] desktop:mt-32 mt-10 ml-10 mb-10">Project</p>
  </div>
  <div class="grid desktop:grid-cols-2 grid-cols-1 gap-y-6">
  <div v-for="project in projects" :key="project.id">
    <projectBlock :image="project.image" :title="project.title" :description="project.description"/>
  </div>
</div>
</template>

<script>
import projectBlock from '../components/projectBlock.vue';
export default {
  components:{
    projectBlock
  },
  data() {
    return {
      blockWidthPercentage: '20%' ,
      projects: [
        { image: 'src/assets/rayan.png', title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 1' },
        { image: 'src/assets/rayan.png', title: 'Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 1' },
      ]
    }
  }
}
</script>

<style scoped>
.blockk {
  box-shadow: rgba(209, 183, 183, 0.35) 0px 0px 5px 5px;
}
.gradient-hr {
  width: 220px;
  height: 2px; 
  background: linear-gradient(to right, #13ADC7, #945DD6); 
  border: 10px;
  margin-top: 10px; 
  margin-bottom: 10px; 
  height: 5px;
}
.btn{
  background: linear-gradient(to right, #13ADC7, #945DD6); 
}
</style>

