<template>
    <div>
      <div class="flex space-between align-center">
      <select-box :data="fonts" @input="setFont" placeholder="Choose your font..."></select-box>
      <!-- <el-color-picker show-alpha v-model="cmpToEdit.color"></el-color-picker> -->
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


export default {
name: 'site-text-edit',
props: ['cmp'],
  data() {
    return {
      cmpToEdit: {
        style: {
          fontFamily: '',
          fontSize: 20,
          lineHeight: 1,
          letterSpacing: 0,
          color: '#765fe5'
        }
      },
      fontSize: 0,
      showAdvanced: false,
      fonts: ['Arial', 'Righteous', 'Advent Pro', 'Sans Serif', 'Tahoma'],
      shadows: ['Light', 'Medium', 'Heavy'],
    };
  },
  methods: {
    openAdvanced() {
      this.showAdvanced = !this.showAdvanced
    },
    setFont(font) {
      this.cmpToEdit.style.fontFamily = font;
    },
    setFontSize(fontSize) {
      this.fontSize = fontSize
      this.cmpToEdit.style.fontSize = fontSize + 'px';
    }
  },
  components: {
    selectBox
  },
  watch: {
    cmp() {
      this.cmpToEdit = this.cmp; 
      this.fontSize = parseInt(this.cmpToEdit.style.fontSize)
    }
  }
};
</script>