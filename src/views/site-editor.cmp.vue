<template>
  <section class="editor flex animate__animated animate__fadeIn">
      <element-dashboard :samples="samples" @shouldAcceptDrop="false"/>
    <Container @drop="onDrop($event)">
      <site-workspace :site="site" @shouldAcceptDrop="true" />
    </Container>
  </section>
</template>

<script>
import siteWorkspace from '../components/site-workspace.cmp.vue';
import elementDashboard from '@/components/element-dashboard.cmp.vue';
import { templateService } from '@/services/template-service.js';
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/assets/drag-test.js";

import {
  eventBus,
  ADD_SAMPLE,
  EDIT_ELEMENT,
  CLONE_ELEMENT,
  REMOVE_ELEMENT,
  MOVE_ELEMENT
} from '@/services/event-bus.service.js';

const _ = require('lodash');

export default {
  name: 'site-editor',
  data() {
    return {
      site: {},
      elements: [],
      samples: {}
    };
  },
  async created() {
    this.loadSite();
    this.samples = templateService.getSamplesOf('section');
    eventBus.$on(ADD_SAMPLE, sample => this.addSample(sample));
    eventBus.$on(CLONE_ELEMENT, element => this.clone(element));
    eventBus.$on(REMOVE_ELEMENT, elementId => this.remove(elementId));
    eventBus.$on(MOVE_ELEMENT, (elementId, direction) =>
      this.moveElement(elementId, direction)
    );
    
  },
  computed: {},
  methods: {
    async loadSite() {
      const site = await templateService.getTemplateById(this.$route.params.id);
      this.site = _.cloneDeep(site)
  
    },
    addSample(sample) {
      this.site.cmps.unshift(sample);
    },
    getElementSamples(element) {
      this.samples = templateService.getSamplesOf(element);
    },
    moveElement(elementId, direction) {
      const cmps = this.site.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === elementId);
      if (direction === 'down' && idx + 1 < cmps.length) {
        const cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx + 1]);
        cmps.splice(idx + 1, 1, cmp);
      } else if (direction === 'up' && idx !== 0) {
        const cmp = cmps[idx];
        cmps.splice(idx, 1, cmps[idx - 1]);
        cmps.splice(idx - 1, 1, cmp);
      }
    },
    clone(element){
      const cmps = this.site.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === element.id);
      let clone = _.cloneDeep(element)
      clone.id = templateService.makeId()
      clone = templateService.addIds(clone)
      cmps.splice(idx,0,clone)
    },
    remove(elementId){
      console.log('elementId:', elementId)
      const cmps = this.site.cmps;
      const idx = cmps.findIndex(cmp => cmp.id === elementId);
      cmps.splice(idx, 1);
    },
    onDrop(ev){
      console.log(ev)
    }
  },
  watch: {
    '$route.params.id'() {
      this.loadSite()      
    }
  },
  components: {
    siteWorkspace,
    elementDashboard,
    Container,
    Draggable

  }
};
</script>
