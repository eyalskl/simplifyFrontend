<template>
  <ul>
    <li v-for="(sample,idx) in samples" :key="idx">
      {{sample}}
    </li>
  </ul>
</template>

<script>
export default {
  props:['samples'],
  data() {
    return {

    };
  },
  created(){
    console.log(this.samples)
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style>
</style>