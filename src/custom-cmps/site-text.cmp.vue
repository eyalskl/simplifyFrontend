<template>
  <span
    :style="cmp.style"
    contenteditable="true"
    v-text="cmp.content"
    @blur="onEdit"
    @keydown.enter="endEdit"
    @click.stop="openEditor"
  >
  </span>
</template>

<script>
import { eventBus, EDIT_ELEMENT } from "@/services/event-bus.service.js";

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
    },
    openEditor() {
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
    }
  }
};
</script>

