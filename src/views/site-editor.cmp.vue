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
import { eventBus, ADD_SAMPLE } from '@/services/event-bus.service.js';

const _ = require('lodash');

export default {
  name: 'site-editor',
  components: {
    siteWorkspace,
    elementDashboard
  },
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
  },
  computed: {},
  methods: {
    addSample(sample) {
      console.log('sample:', sample);
      this.site.cmps.unshift(sample);
    },
    getElementSamples(element) {
      this.samples = templateService.getSamplesOf(element);
    }
  }
};
</script>
