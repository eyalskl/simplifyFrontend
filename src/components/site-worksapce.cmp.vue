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
import siteSection from '@/element-cmps/site-section.cmp.vue';
import { eventBus, MINIMIZE_DASHBOARD, FORCE_UPDATE } from '@/services/event-bus.service.js';
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
    
  },
  created() {
    eventBus.$on(MINIMIZE_DASHBOARD, isMinimized => {
      this.minimize = isMinimized
      })
    eventBus.$on(FORCE_UPDATE, () => {
        this.$forceUpdate();
      })
  }
};
</script>
