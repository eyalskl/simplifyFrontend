<template>

  <transition name="fade">
    <section class="site-section" :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls">
      <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
      <element-controls v-show="showControls" :element="cmp" />
    </section>
  </transition>

</template>

<script>
import siteDiv from '@/element-cmps/site-div.cmp.vue';
import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteList from '@/element-cmps/site-list.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';

export default {
  name: '',
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
    siteText,
    siteImage,
    siteButton,
    elementControls,
  }
};
</script>
