<template>
  <section :style="cmp.style">
    <component
      v-for="(cmp, idx) in cmp.cmps"
      :is="cmp.type"
      :cmp="cmp"
      :key="idx"
    >
    </component>
  </section>
</template>

<script>
import siteText from '@/custom-cmps/site-text.cmp.vue'
import siteImage from '@/custom-cmps/site-image.cmp.vue';
import siteButton from '@/custom-cmps/site-button.cmp.vue';

export default {
  name: 'site-section',
  props: ['cmp'],
  components:{
      siteText,
      siteImage,
      siteButton,
  }
};
</script>
