<template>
   <ul class="sample-section clean-list flex align-center column">
     <container behavior="copy" group-name="1" class="flex column align-center" :get-child-payload="getSample">
    <draggable v-for="(sample,idx) in samples" :key="idx">
      <li class="sample-section-preview flex column align-center" @click.prevent="addSample(sample.tree)">
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
  getSample(index){
    return this.samples[index].tree
  }

//     onDropReady(dropResult) {
//       const { removedIndex, addedIndex, payload, element } = dropResult;
// },
//     onDragStart (dragResult) {
//       const { isSource, payload, willAcceptDrop } = dragResult
// },
// onDragEnd (dragResult) {
//   const { isSource, payload, willAcceptDrop } = dragResult
// }


},
components:{
   Container,
   Draggable
     }
}
</script>
