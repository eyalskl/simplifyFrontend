<template>
  <section :style="cmpTree.attr.style" class="zone">
    <component
      v-for="(cmp, idx) in cmpTree.cmps"
      :is="cmp.cmpName"
      :cmpTree="cmp"
      :key="idx"
    >
    </component>
  </section>
</template>

<script>
import textBox from './text-box.cmp.vue'
export default {
  name: 'zone',
  props: ['cmpTree'],
  components:{
      textBox,
  }
};
</script>
