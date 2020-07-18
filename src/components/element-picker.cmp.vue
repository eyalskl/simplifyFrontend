<template>

  <section>
    <button v-for="(name , idx) in elementNames" @click="showList(name)" :key="idx">
      {{ name }}
    </button>
  </section>

</template>

<script>
export default {
  data() {
    return {
      elementNames: ['section','text', 'image', 'button']
    };
  },
  computed: {},
  methods: {
    showList(listName){
      this.$emit('showList',listName)
    }
  }
};
</script>

<style>
</style>