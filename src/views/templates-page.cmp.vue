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
  async created() {
    this.templates = await templateService.query();
    this.templates = this.templates.map(template => {
        return { _id: template._id, name: template.name, previewImg: template.previewImg }
    })
    console.log(this.templates);
  },
  methods: {
    editTemplate(id){
      this.$router.push(`/editor/${id}`)
    }
  }
};
</script>
