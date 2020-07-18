<template>
  <div class="site-div" :style="cmp.style" @mouseover="displayControls" @mouseout="hideControls">
    <component v-for="(cmp, idx) in cmp.cmps" :is="cmp.type" :cmp="cmp" :key="idx"></component>
    <element-controls @clone="clone" v-show="showControls" />
  </div>
</template>

<script>
import siteText from '@/element-cmps/site-text.cmp.vue';
import siteImage from '@/element-cmps/site-image.cmp.vue';
import siteButton from '@/element-cmps/site-button.cmp.vue';
import siteForm from '@/element-cmps/site-form.cmp.vue';
import siteList from '@/element-cmps/site-list.cmp.vue';
import elementControls from '@/components/element-controls.cmp.vue';
export default {
  name: 'site-div',
  props: ['cmp'],
  data() {
    return {
      showControls: false
    };
  },
  created(){
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
  },
  components: {
    siteText,
    siteImage,
    siteButton,
    siteList,
    siteForm,
    elementControls
  }
};
</script>
