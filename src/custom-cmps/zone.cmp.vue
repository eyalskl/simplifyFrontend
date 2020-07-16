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
import imageBox from '@/custom-cmps/image-box.cmp.vue';
import buttonBox from '@/custom-cmps/button-box.cmp.vue';
import navBar from '@/components/nav-bar.cmp.vue';

export default {
  name: 'zone',
  props: ['cmpTree'],
  components:{
      textBox,
      imageBox,
      navBar,
      buttonBox
  }
};
</script>
