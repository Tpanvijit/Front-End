<script setup>
import myBar from './views/myBar.vue';
 
</script>
<template>
  <header>
    <myBar />
    <router-view/>
   </header>
  <main>
     
  </main>
</template>
<script>
export default {
  name: "App",
  components : {
    myBar,
  },
};
</script>