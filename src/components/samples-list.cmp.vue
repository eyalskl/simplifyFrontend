
<template>
  <component :is="`samp-sections-${type}`" :samples="samples"/>
</template>

<script>
import sampSections from '../samples-cmps/samp-sections.cmp.vue'

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
    sampSections
  }
};
</script>

<style>
</style>