<template>
    <div class="edit-site-text">
      <div class="flex space-between align-center">
        <select-box :data="fonts" v-model="cmp.style.fontFamily" placeholder="Pick a font..."></select-box>
        <el-color-picker show-alpha v-model="cmp.style.color"></el-color-picker>
      </div>
      <div class="flex space-between align-center">
        <label>Font size:</label>
        <el-slider @input="setFontSize" v-model="fontSize"> </el-slider>
      </div>
      <div class="align-controls flex">
        <button> <i class="fas fa-align-left"></i> </button>
        <button> <i class="fas fa-align-center"></i> </button>
        <button> <i class="fas fa-align-right"></i> </button>
      </div>
      <div class="font-style-controls flex">
        <button> <i class="fas fa-bold"></i> </button>
        <button> <i class="fas fa-italic"></i> </button>
        <button> <i class="fas fa-underline"></i> </button>
      </div>
    <div class="text-shadow">
      <select-box :data="shadows" placeholder="Add text shadow...">  </select-box>
    </div>
    <button class="advanced" @click="openAdvanced"> Advanced Settings </button>
    <div v-if="showAdvanced" class="advanced-settings animate__animated animate__fadeInUpBig">
      <div class="flex space-between align-center">
        <label>Line height:</label>
        <!-- <el-slider v-model="cmpToEdit.lineHeight"></el-slider> -->
    </div>
      <div class="flex space-between align-center">
      <label>Letter spacing:</label>
      <!-- <el-slider v-model="cmpToEdit.letterSpacing"></el-slider> -->
    </div>
    </div>
    </div>
</template>

<script>
import selectBox from '../custom-cmps/select-box.cmp';
import { eventBus, FORCE_UPDATE } from "@/services/event-bus.service.js";


export default {  
name: 'edit-site-text',
props: ['cmp'],
  data() {
    return {
      fontSize: 16 ,
      showAdvanced: false,
      fonts: ['Arial', 'Righteous', 'Advent Pro', 'Sans Serif', 'Tahoma', 'Cursive', 'Fantasy', 'Impact'],
      shadows: ['Light', 'Medium', 'Heavy'],
    };
  },
  computed: {
    fontSize() {
      return (this.cmp.style.fontSize) ? parseFloat(this.cmp.style.fontSize) * 16 : 16;
    }
  },
  methods: {
    openAdvanced() {
      this.showAdvanced = !this.showAdvanced
    },
    setFontSize(fontSize) {
      this.fontSize = fontSize
      this.cmp.style.fontSize = (fontSize / 16) + 'rem';
      eventBus.$emit(FORCE_UPDATE);
    },
  },
  components: {
    selectBox
  },
  created() {
      this.fontSize = (this.cmp.style.fontSize) ? parseFloat(this.cmp.style.fontSize) * 16 : 16;
      
  },
  watch: {
    cmp(newVal , oldVal) {
      deep: true,
      this.fontSize = (newVal.style.fontSize) ? parseFloat(newVal.style.fontSize) * 16 : 16;
      
    }
  }
};
</script>