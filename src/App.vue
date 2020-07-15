<template>
  <div class="main-app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import navBar from '@/components/nav-bar.cmp.vue';

export default {
  name: 'main-app',

  components: {
    navBar
  }
};
</script>
