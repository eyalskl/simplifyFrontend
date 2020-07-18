<template>
  <span
    :style="cmp.style"
    contenteditable="true"
    v-text="cmp.content"
    @blur="onEdit"
    @keydown.enter="endEdit"
    @click.stop="openEditor"
    @dragover.prevent
  >
  </span>
</template>

<script>
import { eventBus, EDIT_ELEMENT, FORCE_UPDATE } from "@/services/event-bus.service.js";

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
    eventBus.$on(FORCE_UPDATE, () => this.$forceUpdate());
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

