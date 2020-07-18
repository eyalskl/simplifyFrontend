<template>
  <section class="element-edit">
    <h2 v-show="!elementPicked"> Please pick an element on the workspace to enter edit mode.</h2>
    <div v-show="elementPicked">
      <!-- <edit-site-text v-if="cmpToEdit.type === 'site-text'" :cmp="cmpToEdit" />
      <edit-site-section v-if="cmpToEdit.type === 'site-section'" :cmp="cmpToEdit" /> -->
      <component v-if="cmpToEdit.type" :is="'edit-' + cmpToEdit.type" :cmp="cmpToEdit"> </component>
    </div>
  </section>
</template>

<script>
import selectBox from '@/custom-cmps/select-box.cmp';
import editSiteText from '@/editor-cmps/edit-site-text.cmp';
import editSiteButton from '@/editor-cmps/edit-site-text.cmp';
import editSiteSection from '@/editor-cmps/edit-site-section.cmp';
import { eventBus, EDIT_ELEMENT } from "@/services/event-bus.service.js";

export default {
  name: 'element-edit',
  data() {
    return {
      elementPicked: false,
      cmpToEdit: {
        style: {
          cmpName: '',
          fontSize: 20,
          lineHeight: 1,
          letterSpacing: 0,
          color: '#765fe5'
        }
      },
    }
  },
  created() {
    eventBus.$on(EDIT_ELEMENT, cmp => {
      this.elementPicked = true;
      this.cmpToEdit = cmp;
      })
  },
  components: {
    selectBox,
    editSiteText,
    editSiteButton,
    editSiteSection
  },
  destroyed() {
    this.elementPicked = false;
  }
};
</script>