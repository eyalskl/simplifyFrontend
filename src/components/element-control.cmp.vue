<template>
      <div class="elements-container flex column" :class="minimized">
          <div class="elements-header flex justify-center">
              <button>Elemenets</button>
              <button>Edit</button>
          </div>
      <div class="element-picker" :class="minimized">
        <button @click="toggleList('sections')">
          Sections
          </button>
          <element-list
          v-if="listShown" :samples="samples" :element="pickedElement">
        </element-list>
        <button v-if="!listShown" v-for="(btn, idx) in elementBtns" @click.stop="toggleList(btn)" :key="idx">
          {{btn}}
        </button>
        <button
          :title="minimize ? 'Unfold toolbox' : 'Fold toolbox'"
          class="minimize"
          :class="minimized"
          @click="toggleMinimize"
        >
        </button>
      </div>
    </div>
</template>

<script>
import elementList from './element-list.cmp.vue'

export default {
  data() {
    return {
      pickedElement: 'sections',
      elementBtns:['text','image','button'],
      listShown: false,
      minimize: false
    };
  },
  computed: {
    samples(){
      this.$store.getters.samples[this.pickedElement]
    },
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
    toggleList(element) {
      this.pickedElement = element;
      this.listShown = !this.listShown;
    },

  },
}
</script>

<style>

</style>