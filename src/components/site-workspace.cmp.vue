<template>
  <container :get-child-payload="getCmp" @drop="onDrop($event)" group-name="1" class="site-workspace flex column" :class="minimized">
    <component
      v-for="(cmp, idx) in siteToEdit.cmps"
      :is="cmp.type"
      :cmp="cmp"
      :key="idx"
    >
    </component>
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
  props:['siteToEdit'],
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

  methods:{
    onDrop(dropResult){
      this.siteToEdit.cmps = applyDrag(this.siteToEdit.cmps,dropResult)
      this.$store.commit('setSite',this.siteToEdit)
    },
    getCmp(index){
      return this.siteToEdit.cmps[index]
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
        this.$store.commit('setSite',this.siteToEdit)
        this.$forceUpdate();
      })
  },
};
</script>
