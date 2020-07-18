
<template>
  <component v-if="samples" :is="`sample-${type}`" :samples="samples" />
</template>

<script>
import sampleSection from '../samples-cmps/sample-section.cmp.vue'

export default {
  props:['samples', 'type'],
  data() {
    return {

    };
  },
  methods: {

  },
  components:{
    sampleSection
  }
};
</script>

<style>
</style>