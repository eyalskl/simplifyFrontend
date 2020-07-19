<template>

    <draggable class="site-section" :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls" @click.stop="openEditor">
      <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
      <element-controls v-show="showControls" :element="cmp" />
    </draggable>

</template>

<script>
import siteDiv from '@/element-cmps/site-div.cmp.vue';
import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteMap from '@/element-cmps/site-map.cmp.vue'
import siteList from '@/element-cmps/site-list.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';
import { eventBus, EDIT_ELEMENT, FORCE_UPDATE, OPEN_EDITOR } from "@/services/event-bus.service.js";
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/assets/drag-test.js";

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
    openEditor() {
      eventBus.$emit(OPEN_EDITOR, this.cmp.type);
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
    }
  },
  created() {
    eventBus.$on(FORCE_UPDATE, () => {
        this.$forceUpdate();
      })
  },
  components: {
    siteDiv,
    siteText,
    siteImage,
    siteButton,
    siteMap,
    elementControls,
    Container,
    Draggable
    
  }
};
</script>
