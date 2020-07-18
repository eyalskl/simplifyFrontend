<template>
  <div class="edit-site-section">
    <color-picker @input="setBgc" />
  </div>
</template>

<script>
import colorPicker from '@/custom-cmps/color-picker.cmp';
import { eventBus, FORCE_UPDATE } from "@/services/event-bus.service.js";

export default {
  name: 'edit-site-section',
  props: ['cmp'],
  data() {
    return {
      cmpToEdit: {
        style: {
          backgroundColor: '#000'
        }
      }
    }
  },
  methods: {
    setBgc(bgc) {
        this.cmpToEdit.style.backgroundColor = bgc;
        eventBus.$emit(FORCE_UPDATE);
    }
  },
  watch: {
    cmp() {
      this.cmpToEdit = this.cmp;
    }
  },
    components: {
    colorPicker
  }
};
</script>