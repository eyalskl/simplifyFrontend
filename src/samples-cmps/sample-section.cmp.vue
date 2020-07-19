<template>
   <ul class="sample-section clean-list flex align-center column">
     <container class="flex column align-center" @drop="onDrop">
    <draggable v-for="(sample,idx) in samples" :key="idx" @click="addSample(sample.tree)" >
      <li class="sample-sectio-preview flex column align-center">
      <h3> {{sample.name}} </h3>
      <img :src="sample.img" class="section-sample-img"/>
      </li>
    </draggable>
     </container>
  </ul>
</template>

<script>
import { eventBus, ADD_SAMPLE } from "@/services/event-bus.service.js";
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/assets/drag-test.js";

export default {
name:'sample-section',
props:['samples'],
methods:{
  addSample(sample){
    eventBus.$emit(ADD_SAMPLE, sample)
  },

//     onDropReady(dropResult) {
//       const { removedIndex, addedIndex, payload, element } = dropResult;
// },
//     onDragStart (dragResult) {
//       const { isSource, payload, willAcceptDrop } = dragResult
// },
// onDragEnd (dragResult) {
//   const { isSource, payload, willAcceptDrop } = dragResult
// }

    onDrop (dropResult) {
      this.samples = applyDrag(this.samples, dropResult)
    },
},
components:{
   Container,
   Draggable
     }
}
</script>
