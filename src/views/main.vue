<template>
  <hello-world></hello-world>
  <projects></projects>
  <technologies></technologies>
  <about-me></about-me>
  <Footer></Footer>
</template>

<script>
import HelloWorld from '../pages/HelloWorld.vue';
import projects from '../pages/projects.vue';
import technologies from '../pages/technologies.vue';
import aboutMe from '../pages/aboutMe.vue';
import Footer from '../pages/Footer.vue';
export default {
components:{
  HelloWorld,
  projects,
  technologies,
  aboutMe,
  Footer
}
}
</script>

<style>

</style>