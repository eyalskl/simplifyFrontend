<template>
  <div class="edit-site-section">
    <color-picker @input="setBgc" />
  </div>
</template>

<script>
import colorPicker from '@/custom-cmps/color-picker.cmp';

export default {
  name: 'edit-site-section',
  props: ['cmp'],
  components: {
    colorPicker
  },
  watch: {
    cmp() {
      this.cmpToEdit = this.cmp;
      this.fontSize = parseInt(this.cmp.style.fontSize) * 16;
      this.fontFamily = this.cmp.style.fontFamily;
      this.color = this.cmp.style.color;
    }
  }
};
</script>

<style>
</style>