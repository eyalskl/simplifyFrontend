<template>
  <section class="element-edit">
    <!-- <input placeholder="Element's name..." v-model="cmpToEdit.cmpName" /> -->
    <edit-site-text :cmp="cmpToEdit" />
  </section>
</template>

<script>
import selectBox from '@/custom-cmps/select-box.cmp';
import editSiteText from '@/editor-cmps/edit-site-text.cmp';
import { eventBus, EDIT_ELEMENT } from "@/services/event-bus.service.js";

export default {
  name: 'element-edit',
  data() {
    return {
      cmpToEdit: {
        style: {
          cmpName: '',
          fontSize: 20,
          lineHeight: 1,
          letterSpacing: 0,
          color: '#765fe5'
        }
      },
      showAdvanced: false,
      fonts: ['Arial', 'Righteous', 'Advent Pro', 'Sans Serif', 'Tahoma'],
      shadows: ['Light', 'Medium', 'Heavy'],
    };
  },
  methods: {
    openAdvanced() {
      this.showAdvanced = !this.showAdvanced
    },
  },
  created() {
    eventBus.$on(EDIT_ELEMENT, cmp => {this.cmpToEdit = cmp})
  },
  components: {
    selectBox,
    editSiteText
  }
};
</script>