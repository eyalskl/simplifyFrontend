<template>
  <section class="element-edit">
    <!-- <input placeholder="Element's name..." v-model="cmpName" /> -->
    <div class="flex space-between align-center">
      <select-box :data="fonts"></select-box>
      <el-color-picker show-alpha v-model="color"></el-color-picker>
    </div>
    <div class="flex space-between align-center">
      <label>Font size:</label>
      <el-slider v-model="fontSize"></el-slider>
    </div>
  </section>
</template>

<script>
import selectBox from '../custom-cmps/select-box.cmp';

export default {
  name: 'element-edit',
  data() {
    return {
      cmpName: '',
      fontSize: 20,
      fonts: ['Arial', 'Righteous', 'Advent Pro', 'Sans Serif', 'Tahoma'],
      color: '#765fe5'
    };
  },
  components: {
    selectBox
  }
};
</script>