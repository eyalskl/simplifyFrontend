<template>
  <container class="site-container"> 
    <container :get-child-payload="getCmp"  :drop-placeholder="placeHolderOptions" drag-class="section-drag" auto-scroll-enabled  @drop="onDrop" group-name="1" lock-axis="y" class="site-workspace flex column" :class="minimized">
      <component
        v-for="(cmp, idx) in site.cmps"
        :is="cmp.type"
        :cmp="cmp"
        :key="idx"
      >
      </component>
    </container>
  </container>
</template>

<script>
import siteSection from '@/element-cmps/site-section.cmp.vue';
import { eventBus, MINIMIZE_DASHBOARD, FORCE_UPDATE, ADD_SAMPLE } from '@/services/event-bus.service.js';
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/assets/drag-test.js";
const _ = require("lodash")

export default {
  name: 'site-workspace',
  props:['site'],
  data() {
    return {
      minimize: false,
        placeHolderOptions: {
          className: 'drop-preview',
          animationDuration: '50',
          showOnTop: true
      }
    }
  },
  computed: {
    minimized() {
      if (this.minimize) return 'minimized';
    }
  },

  methods:{
    onDrop(dropResult){
      this.site.cmps = applyDrag(this.site.cmps,dropResult)
    },
    getCmp(index){
      return this.site.cmps[index]
    },

  },
  components: {
    siteSection,
    Container,
    Draggable
    
  },
  created() {
    eventBus.$on(MINIMIZE_DASHBOARD, isMinimized => {
      this.minimize = isMinimized
      })
    eventBus.$on(FORCE_UPDATE, () => {
        this.$forceUpdate();
      })
      // setInterval(() => {
      //   console.log(this.site);
      // }, 5000);
  }
};
</script>
