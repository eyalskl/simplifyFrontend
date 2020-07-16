<template>
  <section class="editor flex animate__animated animate__fadeIn">
    <element-picker />
    <site-workspace :site="site"/>
  </section>
</template>

<script>
import siteWorkspace from '../components/site-worksapce.cmp.vue';
import elementPicker from '@/components/element-picker.cmp.vue';

export default {
  name: 'editor',
  components: {
      siteWorkspace,
      elementPicker
  },
    computed: {
    site() {
      return _.cloneDeep(this.$store.getters.site);
    }
}
}
</script>
