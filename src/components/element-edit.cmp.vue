<template>
  <section class="element-edit">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Element Name" name="1">
        <el-input placeholder="Element's name..." v-model="cmpName"></el-input>
      </el-collapse-item>
      <el-collapse-item title="Text" name="2">
        <el-input type="textarea" :rows="2" placeholder="Text..."></el-input>
        <div class="flex justify-center align-center">
          <label>Font size:</label>
          <el-slider v-model="fontSize"> </el-slider>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Size" name="3"></el-collapse-item>
      <el-collapse-item title="Layout" name="4"></el-collapse-item>
    </el-collapse>
  </section>
</template>

<script>
export default {
  name: 'element-edit',
  data() {
    return {
      activeName: 1,
      cmpName: '',
      fontSize: '20'
    };
  }
};
</script>