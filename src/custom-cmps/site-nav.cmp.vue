<template>
  <nav :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls">
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
<element-controls @clone="clone" v-show="showControls" />
  </nav>
</template>

<script>
import siteText from '@/custom-cmps/site-text.cmp.vue'
import siteImage from '@/custom-cmps/site-image.cmp.vue';
import siteButton from '@/custom-cmps/site-button.cmp.vue';
import siteList from '@/custom-cmps/site-list.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';


export default {
  name: 'site-nav',
  props: ['cmp'],
  components:{
      siteText,
      siteImage,
      siteButton,
      siteList,
      elementControls
  },
  data(){
    return {
      showControls: false
    };
  },
  methods: {
    displayControls() {
      this.showControls = true;
    },
    hideControls() {
      this.showControls = false;
    },
    clone() {
      this.$store.commit({type: 'cloneCmp', cmp: _.cloneDeep(this.cmp)})
    }
  }

};
</script>