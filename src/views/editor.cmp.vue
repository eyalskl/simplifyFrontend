<template>
  <section class="editor flex animate__animated animate__fadeIn">
    <div class="elements-container">
      <div class="element-picker" :class="minimized">
        <div v-show="listShown" class="element-list">
          <h1 @click.stop="toggleList">I am an Heading1</h1>
          <h2 @click.stop="toggleList">I am an Heading2</h2>
          <h3 @click.stop="toggleList">I am an Heading3</h3>
          <h4 @click.stop="toggleList">I am an Heading4</h4>
          <h5 @click.stop="toggleList">I am an Heading5</h5>
          <h6 @click.stop="toggleList">I am an Heading6</h6>
        </div>
        <button
          v-show="!listShown"
          v-for="(n, idx) in 12"
          @click.stop="toggleList"
          :key="idx"
        >
          Text
        </button>
        <button
          :title="minimize ? 'Unfold toolbox' : 'Fold toolbox'"
          class="minimize"
          :class="minimized"
          @click="toggleMinimize"
        >
          <span></span>
        </button>
      </div>
    </div>
    <workspace />
  </section>
</template>

<script>
import workspace from '../components/worksapce.cmp.vue';

export default {
  name: 'editor',
  data() {
    return {
      listShown: false,
      minimize: false
    };
  },
  computed: {
    minimized() {
      if (this.minimize) return 'minimized';
    },
    isShown() {
      if (this.listShown) return 'open';
    }
  },
  methods: {
    toggleMinimize() {
      this.minimize = !this.minimize;
    },
    toggleList() {
      this.listShown = !this.listShown;
    }
  },
  components: {
      workspace,
  }
};
</script>

<style>
</style>