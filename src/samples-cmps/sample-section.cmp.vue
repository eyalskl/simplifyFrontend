<template>
   <ul class="clean-list flex column">
    <li v-for="(sample,idx) in samples" :key="idx" @click="addSample(sample.tree)">
      {{sample.name}}
      <img :src="sample.img" class="section-sample-img"/>
    </li>
  </ul>
</template>

<script>
export default {
name:'sample-section',
props:['samples']
}
</script>

<style>

</style>