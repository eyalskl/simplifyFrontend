<template>
  <section class="editor flex animate__animated animate__fadeIn">
    <element-control/>
    <site-workspace :site="site"/>
  </section>
</template>

<script>
import siteWorkspace from '../components/site-worksapce.cmp.vue';
import elementControl from '@/components/element-control.cmp.vue';
const _ = require("lodash")

export default {
  name: 'editor',
  components: {
      siteWorkspace,
      elementControl
  },
    computed: {
    site() {
      return _.cloneDeep(this.$store.getters.site);
    }
}
}
</script>
