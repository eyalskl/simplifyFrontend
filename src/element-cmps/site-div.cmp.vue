<template>
  <div class="site-div" :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls" @click.stop="openEditor">
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
    <element-controls @clone="clone" v-show="showControls" />
  </div>
</template>

<script>
import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteMap from '@/element-cmps/site-map.cmp.vue'
import siteForm from '@/element-cmps/site-form.cmp.vue';
import siteList from '@/element-cmps/site-list.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';
import { eventBus, EDIT_ELEMENT, FORCE_UPDATE } from "@/services/event-bus.service.js";

export default {
  name: 'site-div',
  props: ['cmp'],
  data() {
    return {
      showControls: false
    };
  },
  created(){
      eventBus.$on(FORCE_UPDATE, () => {
        this.$forceUpdate();
      })
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
    siteText,
    siteImage,
    siteButton,
    siteList,
    siteForm,
    siteMap,
    elementControls
  }
};
</script>
