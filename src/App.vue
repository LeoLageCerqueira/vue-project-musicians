

<template>
  <nav-all></nav-all>
  <router-view></router-view>
</template>

<script>
  import NavAll from './components/NavAll.vue';
  export default {
    components: {
      NavAll
    },
    data(){

    }
  }
</script>


<style>
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: sans-serif;
  }

</style>