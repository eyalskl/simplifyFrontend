<template>
  <ul>
    <!-- <button @click="toggleList('sections')">
          Sections
          </button>
        <button  v-for="(btn, idx) in elementBtns" @click.stop="toggleList(btn)" :key="idx">
          {{btn}}
        </button>
        <button
          :title="minimize ? 'Unfold toolbox' : 'Fold toolbox'"
          class="minimize"
          :class="minimized"
          @click="toggleMinimize"
        >
        </button> -->
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