<template>
  <section class="site-workspace flex column" :class="minimized">
    <component
      v-for="(cmp, idx) in site.cmps"
      :is="cmp.type"
      :cmp="cmp"
      :key="idx"
    >

    </component>
  </section>
</template>

<script>
import siteSection from '@/custom-cmps/site-section.cmp.vue';
import siteNav from '@/custom-cmps/site-nav.cmp.vue';
const _ = require("lodash")

export default {
  name: 'site-workspace',
  props:['site'],
  data() {
    return {
      minimize: false,
    }
  },
  computed: {
    minimized() {
      if (this.minimize) return 'minimized';
    }
  },
  components: {
    siteSection,
    siteNav
  },
  created() {

  }
};
</script>
