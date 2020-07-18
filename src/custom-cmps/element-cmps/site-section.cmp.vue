<template>
  <section class="site-section" :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls">
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
    <element-controls v-show="showControls" :element="cmp" />
  </section>
</template>

<script>
import siteDiv from '@/custom-cmps/element-cmps/site-div.cmp.vue';
import siteText from '@/custom-cmps/element-cmps/site-text.cmp.vue';
import siteImage from '@/custom-cmps/element-cmps/site-image.cmp.vue';
import siteButton from '@/custom-cmps/element-cmps/site-button.cmp.vue';
import siteList from '@/custom-cmps/element-cmps/site-list.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';

export default {
  name: 'site-section',
  props: ['cmp'],
  data() {
    return {
      showControls: false
    };
  },
  created(){
  },
  methods: {
    displayControls() {
      this.showControls = true;
    },
    hideControls() {
      this.showControls = false;
    },
  },
  components: {
    siteDiv,
<<<<<<< HEAD:src/custom-cmps/site-section.cmp.vue
    siteText,
    siteImage,
    siteButton,
    elementControls,
=======
    elementControls,
    siteText,
    siteImage,
    siteButton,
    siteList,
>>>>>>> c8e6465e84a1f27899d82dce5c1f2f21022f2987:src/custom-cmps/element-cmps/site-section.cmp.vue
  }
};
</script>
