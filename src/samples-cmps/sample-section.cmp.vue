<template>
   <ul class="clean-list flex column">
    <li v-for="(sample,idx) in samples" :key="idx" @click="addSample(sample.tree)">
      {{sample.name}}
      <img :src="sample.img" class="section-sample-img"/>
    </li>
  </ul>
</template>

<script>
import { eventBus, ADD_SAMPLE } from "@/services/event-bus.service.js";

export default {
name:'sample-section',
props:['samples'],
methods:{
  addSample(sample){
    eventBus.$emit(ADD_SAMPLE, sample)
  }
}
}
</script>
