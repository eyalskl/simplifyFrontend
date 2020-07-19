<template>
  <section class="templates-page">
    <h1>Choose your Template</h1>
    <section class="template-list">
      <div
        v-for="template in templates"
        :key="template._id"
        @click="editTemplate(template._id)"
      >
      <img :src="template.previewImg"/>
      </div>
    </section>
  </section>
</template>

<script>
import { templateService } from '@/services/template-service.js';

export default {
  name: 'templates-page',
  data() {
    return {
      templates: []
    };
  },
  created() {
    this.templates = templateService.getTemplates();
  },
  methods: {
    editTemplate(id){
      this.$router.push(`/editor/${id}`)
    }
  }
};
</script>
