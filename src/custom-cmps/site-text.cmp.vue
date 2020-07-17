<template>
  <span
    :style="cmp.style"
    contenteditable="true"
    v-text="cmp.content"
    @blur="onEdit"
    @keydown.enter="endEdit"
    @dragover.prevent
  >
  </span>
</template>

<script>
export default {
  name: 'site-text',
  props: ['cmp'],
  data() {
    return {
      content: ''
    };
  },
  created() {
    this.content = this.cmp.content;
  },
  methods: {
    onEdit(ev) {
      var txt = ev.target.innerText;
      this.content = txt;
    },
    endEdit() {
      this.$store.dispatch({ type: 'saveSite', content: this.content });
      this.$el.blur();
    }
  }
};
</script>

