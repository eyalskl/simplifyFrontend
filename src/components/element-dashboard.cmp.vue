<template>
      <div class="elements-container flex column" :class="minimized">
          <div class="elements-header flex justify-center">
              <button @click="pickerMode=true">Elemenets</button>
              <button @click="pickerMode=false">Edit</button>
          </div>
          <div v-show="pickerMode" class="element-picker" :class="minimized">
            <samples-list v-if="showSamples" :samples="samplesToShow"/>
            <element-picker v-else @showList="showList"/>
          </div>
          <element-edit v-show="!pickerMode"/> 

          <button
          :title="minimize ? 'Unfold toolbox' : 'Fold toolbox'"
          class="minimize"
          :class="minimized"
          @click="toggleMinimize"
        >
        </button>
    </div>
    
</template>

<script>
import elementPicker from './element-picker.cmp.vue'
import samplesList from './samples-list.cmp.vue'
import elementEdit from './element-edit.cmp.vue'

export default {
  data() {
    return {
      pickerMode: true,
      showSamples: false,
      minimize: false
    };
  },
  computed: {
    samplesToShow(){
      return this.$store.getters.samples
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
    showList(listName) {
      this.$store.commit(({ type: "setSamplesList", listName: listName}))
      this.showSamples = true
    },

  },
  components:{
    samplesList,
    elementPicker,
    elementEdit
  }
}
</script>

<style>

</style>