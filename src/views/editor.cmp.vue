<template>
  <section class="editor flex">
      <div class="element-picker"> </div>
      <div class="workspace"> </div>
      <workspace/>
  </section>
</template>

<script>
import workspace from '../components/worksapce.cmp.vue';

export default {
    name: 'editor',
    components: {
      workspace,
      // elementPicker,
      // elementTools
    }
}
</script>

<style>

</style>