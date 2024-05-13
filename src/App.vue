<template>
  <div class="bg-[#0F1624] text-[#ffff]">
    <the-navbar class="text-[]"></the-navbar>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
import theNavbar from './components/theNavbar.vue';
export default {
  components:{
    theNavbar,
  },
}
</script>
