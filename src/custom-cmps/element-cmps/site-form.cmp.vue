<template>
  <form :style="cmp.style">
      <label v-for="(item,idx) in content" :key="idx" contenteditable="true" @click.prevent>{{item.tag}}
      <input v-if="item.type!=textarea" :type="item.type" :style="item.style"/>
      </label>
      <button :style="cmp.btnStyle">Sumbit</button>
  </form>
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
    },
    openEditor() {
      eventBus.$emit(EDIT_ELEMENT, this.cmp);
    }
  }
};
</script>

