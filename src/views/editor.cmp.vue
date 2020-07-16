<template>
  <section class="editor flex animate__animated animate__fadeIn">
    <element-picker />
    <workspace />
  </section>
</template>

<script>
import workspace from '../components/worksapce.cmp.vue';
import elementPicker from '@/components/element-picker.cmp.vue';

export default {
  name: 'editor',
  components: {
      workspace,
      elementPicker
  }
};
</script>

<style>
</style>