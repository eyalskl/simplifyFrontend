<template>
  <section class="site-section" :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls" @click.stop="openEditor">
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
    <element-controls v-show="showControls" :element="cmp" />
  </section>
</template>

<script>
import siteDiv from '@/element-cmps/site-div.cmp.vue';
import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteList from '@/element-cmps/site-list.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';
import { eventBus, EDIT_ELEMENT } from "@/services/event-bus.service.js";


export default {
  name: '',
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
    openEditor() {
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
    }
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
