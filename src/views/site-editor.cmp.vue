<template>
  <section class="editor flex animate__animated animate__fadeIn">
    <element-dashboard/>
    <site-workspace :site="site"/>
  </section>
</template>

<script>
import siteWorkspace from '../components/site-worksapce.cmp.vue';
import elementDashboard from '@/components/element-dashboard.cmp.vue';
const _ = require("lodash")

export default {
  name: 'site-editor',
  components: {
      siteWorkspace,
      elementDashboard
  },
    computed: {
    site() {
      return _.cloneDeep(this.$store.getters.site);
    }
}
}
</script>
