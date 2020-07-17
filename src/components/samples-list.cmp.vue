
<template>
  <component :is="`sampel-sections-${type}`" :samples="samples"/>
</template>

<script>
import sampelSections from '../samples-cmps/sampel-sections.cmp.vue'

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
    sampelSections
  }
};
</script>

<style>
</style>