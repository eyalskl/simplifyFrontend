<template>
  <section class="editor flex animate__animated animate__fadeIn">
    <element-dashboard :samples="samples" />
    <site-workspace :site="site" />
  </section>
</template>

<script>
import siteWorkspace from '../components/site-worksapce.cmp.vue';
import elementDashboard from '@/components/element-dashboard.cmp.vue';
import { templateService } from '@/services/template-service.js';
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
  created() {
    this.site = templateService.getTemplateById(this.$route.params.id);
    this.samples = templateService.getSamplesOf('section');
    eventBus.$on(ADD_SAMPLE, sample => this.addSample(sample));
    // eventBus.$on(CLONE_ELEMENT, sample => this.addSample(element,sample));
    // eventBus.$on(REMOVE_ELEMENT, sample => this.addSample(elementId,sample));
    eventBus.$on(MOVE_ELEMENT, (elementId, direction) =>
      this.moveElement(elementId, direction)
    );
  },
  computed: {},
  methods: {
    addSample(sample) {
      this.site.cmps.unshift(sample);
    },
    getElementSamples(element) {
      this.samples = templateService.getSamplesOf(element);
    },
    moveElement(elementId, direction) {
      console.log('elementId:', elementId)
      console.log('direction:', direction)
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
    }
  },
  components: {
    siteWorkspace,
    elementDashboard
  }
};
</script>
