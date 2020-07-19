<template>
  <button
    :style="cmp.style"
    contenteditable="true"
    v-text="content.text"
    :href="content.href"
    @blur="onEdit"
    @click.stop="openEditor"
    @keydown.enter="endEdit"
    @dragover.prevent
  >
  </button>
</template>

<script>
import { eventBus, EDIT_ELEMENT, OPEN_EDITOR } from "@/services/event-bus.service.js";

export default {
  name: 'site-button',
  props: ['cmp'],
  data() {
    return {
      content:{ text:' ', href:''}
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
    },
    openEditor() {
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
      eventBus.$emit(OPEN_EDITOR, this.cmp.type);
    }
  }
};
</script>
