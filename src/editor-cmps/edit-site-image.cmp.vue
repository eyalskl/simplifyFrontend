<template>
  <div class="edit-site-image">
    <input v-if="!isUploading" type="file" @change="onUploadImg" />
    <img
      class="uploading"
      v-else
      src="https://i.pinimg.com/originals/3d/1b/73/3d1b739fb2546948f207d2be7ae1b105.gif"
      alt="Uploading Image..."
    />
  </div>
</template>

<script>
import { uploadImg } from '@/services/img-upload.service.js'

export default {
  name: 'edit-site-image',
  props: ['cmp'],
  data() {
    return {
      isUploading: false
    };
  },
  methods: {
    async onUploadImg(ev) {
      this.isUploading = true;
      let res = uploadImg(ev);
      let img = await res;
      this.cmp.content = img.url;
      this.isUploading = false;
      console.log(this.cmp);
    }
  }
};
</script>