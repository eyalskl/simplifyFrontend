<template>
  <div class="edit-site-section">
    <h3>Section Editor</h3>

    <p>Set a Background Color:</p>
    <color-picker @input="setBgc" />
    <div class="edit-image">
      <p>Or upload an image:</p>
      <label class="img-upload flex column" v-if="!isUploading">
        <div class="img-preview" :style="{backgroundColor: cmp.style.backgroundColor, background: cmp.style.background}"></div>
        <p>
          <i class="fas fa-upload"></i> Upload Your Own
        </p>
        <input type="file" @change="onUploadImg" />
      </label>
      <img
        class="uploading"
        v-else
        src="https://i.pinimg.com/originals/3d/1b/73/3d1b739fb2546948f207d2be7ae1b105.gif"
        alt="Uploading Image..."
      />
    </div>
  </div>
</template>

<script>
import colorPicker from '@/custom-cmps/color-picker.cmp';
import { uploadImg } from '@/services/img-upload.service.js';
import { eventBus, FORCE_UPDATE } from '@/services/event-bus.service.js';

export default {
  name: 'edit-site-section',
  props: ['cmp'],
  data() {
    return {
      isUploading: false,
      keyword: '',
      imgKey: '',
      showImgs: false
    };
  },
  methods: {
    searchOnline() {
      if (this.imgKey) this.imgKey = ''
      this.showImgs = true;
      this.imgKey = this.keyword;
      this.keyword = ''
    },
    setBgc(bgc) {
      this.cmp.style.background = bgc;
      eventBus.$emit(FORCE_UPDATE);
    },
    async onUploadImg(ev) {
      this.isUploading = true;
      let res = uploadImg(ev);
      let img = await res;
      this.cmp.style.background = `url(${img.url}) no-repeat center center scroll`;
      this.isUploading = false;
      eventBus.$emit(FORCE_UPDATE);
      console.log(this.cmp);
    }
  },
  created() {
    console.log(this.cmp);
  },
  components: {
    colorPicker
  }
};
</script>