
<template>
  <component :is="`sample-${type}`" :samples="samples"/>
</template>

<script>
import sampleSections from '../samples-cmps/sample-sections.cmp.vue'

export default {
  props:['samples', 'type'],
  data() {
    return {

    };
  },
  created(){
  },
  computed: {

  },
  methods: {
    addSample(sample){
      this.$emit('addSample', sample)
    }
  },
  components:{
    sampleSections
  }
};
</script>

<style>
</style>