<template>
  <section class="editor flex animate__animated animate__fadeIn">

    <element-dashboard @addSample="addSample" :samples="samples"/>
    <site-workspace :site="site"/>

  </section>
</template>

<script>
import siteWorkspace from '../components/site-worksapce.cmp.vue';
import elementDashboard from '@/components/element-dashboard.cmp.vue';
import {templateService} from '@/services/template-service.js';
const _ = require("lodash")

export default {
  name: 'site-editor',
  components: {
      siteWorkspace,
      elementDashboard
  },
  data(){
    return{
      site: {},
      elements: [],
      samples: {}
    }
  },
  created(){
    this.site = templateService.getTemplateById(this.$route.params.id)
    this.samples = templateService.getSamplesOf('section')
  },
    computed: {
    // site() {
    //   return _.cloneDeep(this.$store.getters.site);
    // }
},
methods:{
  addSample(sample){
    this.site.cmps.push(sample)
  },
  getElementSamples(element){
    this.samples = templateService.getSamplesOf(element)
  }
}
}
</script>
