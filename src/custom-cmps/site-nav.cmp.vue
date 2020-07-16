<template>
  <nav :style="cmp.style">
    <component v-for="(cmp, idx) in cmp.cmps.logo"
      :is="cmp.type"
      :cmp="cmp"
      :key="idx"
    >
    </component>
    <component
      v-for="(cmp, idx) in cmp.cmps.buttons"
      :is="cmp.type"
      :cmp="cmp"
      :key="'btn'+idx"
    >
    </component>

  </nav>
</template>

<script>
import siteText from '@/custom-cmps/site-text.cmp.vue'
import siteImage from '@/custom-cmps/site-image.cmp.vue';
import siteButton from '@/custom-cmps/site-button.cmp.vue';

export default {
  name: 'site-nav',
  props: ['cmp'],
  components:{
      siteText,
      siteImage,
      siteButton,
  },
  created(){
      console.log(this.cmp)
  }

};
</script>