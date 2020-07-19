<template>
  <div class="edit-site-section">
    <h3> Section Editor </h3>
    <color-picker @input="setBgc"/>
  </div>
</template>

<script>
import colorPicker from '@/custom-cmps/color-picker.cmp';
import { eventBus, FORCE_UPDATE } from "@/services/event-bus.service.js";

export default {
  name: 'edit-site-section',
  props: ['cmp'],
  methods: {
    setBgc(bgc) {
        this.cmp.style.backgroundColor = bgc;
        eventBus.$emit(FORCE_UPDATE);
    }
  },
  components: {
    colorPicker
  }
};
</script>