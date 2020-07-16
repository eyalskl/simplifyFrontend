<template>
  <span
    :style="cmp.style"
    contenteditable="true"
    v-text="content"
    @blur="onEdit"
    @keydown.enter="endEdit"
  >
  </span>
</template>

<script>
export default {
  name: 'textBox',
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
