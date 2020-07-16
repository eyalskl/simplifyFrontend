<template>
  <section class="workspace">
    <component
      v-for="(cmp, idx) in siteTree.cmps"
      :is="cmp.cmpName"
      :cmpTree="cmp"
      :key="idx"
    >
    </component>
  </section>
</template>

<script>
import zone from '@/custom-cmps/zone.cmp.vue';

export default {
  name: 'workspace',
  data() {
    return {};
  },
  created() {},
  computed: {
    siteTree() {
      return this.$store.getters.site;
    },
  },
  components: {
    zone
  }
};
</script>
