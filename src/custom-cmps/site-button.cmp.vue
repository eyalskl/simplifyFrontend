<template>
  <button
    :style="cmp.style"
    contenteditable="true"
    v-text="content.text"
    :href="content.href"
    @blur="onEdit"
    @keydown.enter="endEdit"
    @dragover.prevent
  >
  </button>
</template>

<script>
export default {
  name: 'site-button',
  props: ['cmp'],
  data() {
    return {
      content:{ text:'', href:''}
    };
  },
  created() {
    this.content = this.cmp.content;
  },
  methods: {
    onEdit(ev) {
      var txt = ev.target.innerText;
      this.content.text = txt;
    },
    endEdit() {
      this.$store.dispatch({ type: 'saveSite', content: this.content });
      this.$el.blur();
    }
  }
};
</script>
