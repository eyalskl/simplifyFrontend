<template>
  <section class="site-section" :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls">
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
    <element-controls @clone="clone" v-show="showControls"  />
  </section>
</template>

<script>
import siteText from '@/custom-cmps/site-text.cmp.vue';
import siteImage from '@/custom-cmps/site-image.cmp.vue';
import siteButton from '@/custom-cmps/site-button.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';

export default {
  name: 'site-section',
  props: ['cmp'],
  data() {
    return {
      showControls: false
    };
  },
  methods: {
    displayControls() {
      this.showControls = true;
    },
    hideControls() {
      this.showControls = false;
    },
    clone() {
      this.$store.commit({type: 'cloneCmp', cmp: _.cloneDeep(this.cmp)})
    }
  },
  components: {
    siteText,
    siteImage,
    siteButton,
    elementControls
  }
};
</script>
