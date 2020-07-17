<template>
  <section class="element-edit">
    <!-- <input placeholder="Element's name..." v-model="cmpToEdit.cmpName" /> -->
    <site-text-edit />
  </section>
</template>

<script>
import selectBox from '../custom-cmps/select-box.cmp';
import siteTextEdit from '../custom-cmps/site-text-edit.cmp';

export default {
  name: 'element-edit',
  data() {
    return {
      cmpToEdit: {
        cmpName: '',
        fontSize: 20,
        lineHeight: 1,
        letterSpacing: 0,
        color: '#765fe5'
      },
      showAdvanced: false,
      fonts: ['Arial', 'Righteous', 'Advent Pro', 'Sans Serif', 'Tahoma'],
      shadows: ['Light', 'Medium', 'Heavy'],
    };
  },
  methods: {
    openAdvanced() {
      this.showAdvanced = !this.showAdvanced
    }
  },
  components: {
    selectBox,
    siteTextEdit
  }
};
</script>