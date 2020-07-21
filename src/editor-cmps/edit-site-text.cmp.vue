<template>
    <div class="edit-site-text">
      <h3> {{ (cmp.type  === 'site-text') ? 'Text' : 'Button' }} editor </h3>
      <p class="text-dis" v-if="cmp.type  === 'site-text'" :style="{color: cmp.style.color}"> Currently Editing : <br> {{ cmp.content.slice(0,40).trim() }}... </p>
      <p class="text-dis" v-else  :style="{color: cmp.style.color}"> Currently Editing : <br> "{{ cmp.content.text }}" </p>
      <div class="flex space-between align-center">
        <select-box :data="fonts" v-model="cmp.style.fontFamily" placeholder="Pick a font..."></select-box>
        <el-color-picker show-alpha @active-change="setColor" v-model="cmp.style.color"></el-color-picker>
      </div>
      <div class="flex space-between align-center">
        <label> Font size: </label>
        <el-slider @input="setFontSize" v-model="fontSize"> </el-slider>
      </div>
      <div class="align-controls flex">
        <button @click.stop="setAlign('left')" :class="{selected: textAlign === 'left'}"> <i class="fas fa-align-left"></i> </button>
        <button @click.stop="setAlign('center')" :class="{selected: textAlign === 'center'}"> <i class="fas fa-align-center"></i> </button>
        <button @click.stop="setAlign('right')" :class="{selected: textAlign === 'right'}"> <i class="fas fa-align-right"></i> </button>
      </div>
      <div class="font-style-controls flex">
        <button @click.stop="toggleBold" :class="{selected: isBold}"> <i class="fas fa-bold"></i> </button>
        <button @click.stop="toggleItalic" :class="{selected: isItalic}"> <i class="fas fa-italic"></i> </button>
        <button @click.stop="toggleUnderline" :class="{selected: isUnderline}"> <i class="fas fa-underline"></i> </button>
      </div>
    <div class="text-shadow">
      <select-box @input="setShadow" :data="shadows" placeholder="Add text shadow...">  </select-box>
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
      showAdvanced: false,
      fontSize: 16,
      isBold: false,
      isItalic: false,
      isUnderline: false,
      shadow: 'None',
      textAlign: 'center',
      fonts: ['Arial', 'Nunito Sans', 'Righteous', 'Bitter', 'Advent Pro', 'Sans Serif', 'Russo One', 'Fantasy', 'Impact'],
      shadows: ['Light', 'Medium', 'Heavy'],
    };
  },
  computed: {
    text() {
      return this.cmp.content
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
    setColor(color) {
      this.cmp.style.color = color
      eventBus.$emit(FORCE_UPDATE);
    },
    setAlign(align) {
      this.textAlign = align;
      this.cmp.style.textAlign = align
      eventBus.$emit(FORCE_UPDATE);
    },
    toggleBold() {
      this.isBold = !this.isBold
      this.cmp.style.fontWeight = this.isBold ? 'bold' : 'normal';
      eventBus.$emit(FORCE_UPDATE);
    },
    toggleItalic() {
      this.isItalic = !this.isItalic
      this.cmp.style.fontStyle = this.isItalic ? 'italic' : 'normal';
      eventBus.$emit(FORCE_UPDATE);
    },
    toggleUnderline() {
      this.isUnderline = !this.isUnderline
      this.cmp.style.textDecoration = this.isUnderline ? 'underline' : 'none';
      eventBus.$emit(FORCE_UPDATE);
    },
    setShadow(shadow) {
      console.log('shadow:', shadow)
      this.shadow = shadow;
      this.cmp.style.textShadow = shadow === 'Light' ? '1px 1px 1px black' : shadow === 'Medium' ? '2px 2px 4px black' : '4px 4px 8px black';
      eventBus.$emit(FORCE_UPDATE);
    }
  },
  components: {
    selectBox
  },
  created() {
      this.fontSize = (this.cmp.style.fontSize) ? parseFloat(this.cmp.style.fontSize) * 16 : 16;
      this.textAlign = (this.cmp.style.textAlign) ? this.cmp.style.textAlign : '';
      this.isBold = (this.cmp.style.fontWeight === 'bold');
      this.isItalic = (this.cmp.style.fontStyle === 'italic');
      this.isUnderline = (this.cmp.style.textDecoration === 'underline');
  },
  watch: {
    cmp(newVal , oldVal) {
      deep: true,
      this.fontSize = (newVal.style.fontSize) ? parseFloat(newVal.style.fontSize) * 16 : 16;
      this.textAlign = (newVal.style.textAlign) ? newVal.style.textAlign : '';
      this.isBold = (newVal.style.fontWeight === 'bold');
      this.isItalic = (newVal.style.fontStyle === 'italic');
      this.isUnderline = (newVal.style.textDecoration === 'underline');
    }
  }
};
</script>