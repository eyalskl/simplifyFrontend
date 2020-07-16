<template>
  <section class="workspace flex column">
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
  name: 'workspace',
  props:['site'],
  components: {
    siteSection,
    siteNav
  }
};
</script>
