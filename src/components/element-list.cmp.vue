<template>
  <ul>
    <li v-for="(sample,idx) in samples" :key="idx"></li>
  </ul>
</template>

<script>
export default {
  data() {
    props:['samples']
    return {

    };
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style>
</style>