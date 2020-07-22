<template>
     <container behavior="copy" group-name="4" drag-class="sample-drag" class="sample-section flex column align-center" :get-child-payload="getSample">
      <draggable v-for="(sample,idx) in samples" :key="idx">
          <div class="sample-section-preview flex column adivgn-center" @click.prevent="addSample(sample.tree)" @dragstart.prevent>
            <h3> {{sample.name}} </h3>
            <img :src="sample.img" class="section-sample-img" />
          </div>
        </draggable>
     </container>
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



},
components:{
   Container,
   Draggable
     }
}
</script>
