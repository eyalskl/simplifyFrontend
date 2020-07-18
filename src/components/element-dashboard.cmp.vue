<template>
  <div class="element-dashboard flex column" :class="minimized">

    <div class="element-header flex justify-center">
      <button @click="pickerMode=true">Elemenets</button>
      <button @click="pickerMode=false">Edit</button>
    </div>

    <div v-show="pickerMode" class="element-picker">

      <element-picker v-if="!showSamples" @showList="showList"/>

      <div v-else>
        <button class="back-btn" @click="showSamples = false"><i class="fas fa-arrow-left"></i> </button>
        <samples-list :samples="samples" :type="currSampList" @addSample="addSample"/>
      </div>

    </div>

    <element-edit v-show="!pickerMode" />

    <button
      :title="minimize ? 'Unfold toolbox' : 'Fold toolbox'"
      class="minimize"
      :class="minimized"
      @click="toggleMinimize"
    ></button>

  </div>
</template>

<script>
import elementPicker from './element-picker.cmp.vue';
import samplesList from './samples-list.cmp.vue';
import elementEdit from './element-edit.cmp.vue';
import { eventBus, MINIMIZE_DASHBOARD } from "@/services/event-bus.service.js";


export default {
  name: 'element-dahsboard',
  props:['samples'],
  data() {
    return {
      currSampList:'sections',
      pickerMode: true,
      showSamples: false,
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
      eventBus.$emit(MINIMIZE_DASHBOARD, this.minimize);
    },
    showList(listName) {
      this.$emit('setSamplesList', listName)
      this.currSampList = listName
      this.showSamples = true;
    },
    addSample(sample) {
      this.$emit('addSample', sample);
    }
  },
  components: {
    samplesList,
    elementPicker,
    elementEdit
  }
};
</script>

<style>
</style>