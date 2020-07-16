<template>
      <div class="elements-container flex column" :class="minimized">
          <div class="elements-header flex justify-center">
              <button @click="pickMode=true">Elemenets</button>
              <button @click="pickMode=false">Edit</button>
          </div>
      <div v-show="pickMode" class="element-picker" :class="minimized">
          <element-list v-if="listShown" :samples="samples" :element="pickedElement"/>
          <element-picker v-else/>
      </div>
          <element-edit v-show="!pickMode"/> 
    </div>
</template>

<script>
import elementPicker from './element-picker.cmp.vue'
import elementList from './element-list.cmp.vue'
import elementEdit from './element-edit.cmp.vue'

export default {
  data() {
    return {
      pickedElement: 'sections',
      elementBtns:['text','image','button'],
      pickMode: true,
      listShown: false,
      minimize: false
    };
  },
  computed: {
    samples(){
      this.$store.getters.samples[this.pickedElement]
    },
    minimized() {
      if (this.minimize) return 'minimized';
    },
    isShown() {
      if (this.listShown) return 'open';
    }
  },
  methods: {
    toggleMinimize() {
      this.minimize = !this.minimize;
    },
    toggleList(element) {
      this.pickedElement = element;
      this.listShown = !this.listShown;
    },

  },
  components:{
    elementList,
    elementPicker,
    elementEdit
  }
}
</script>

<style>

</style>