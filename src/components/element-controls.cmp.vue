<template>
  <div class="element-controls flex">
    <button class="drag-btn"> <i class="fas fa-arrows-alt"></i> </button>
    <button @click.stop="move('up')"><i class="fas fa-arrow-up"></i></button>
    <button @click.stop="move('down')">
      <i class="fas fa-arrow-down"></i>
    </button>
    <button @click.stop="clone"><i class="fas fa-clone"></i></button>
    <button @click.stop="edit"><i class="fas fa-edit"></i></button>
    <button @click.stop="remove"><i class="fas fa-trash"></i></button>
  </div>
</template>

<script>
import {
  eventBus,
  EDIT_ELEMENT,
  CLONE_ELEMENT,
  REMOVE_ELEMENT,
  MOVE_ELEMENT
} from '@/services/event-bus.service.js';

export default {
  name: 'element-controls',
  props: ['element'],
  methods: {
    move(direction) {
      eventBus.$emit(MOVE_ELEMENT, this.element.id, direction);
    },
    clone() {
      eventBus.$emit(CLONE_ELEMENT, this.element);
    },
    edit() {
      eventBus.$emit(EDIT_ELEMENT, this.element);
    },
    remove() {
      eventBus.$emit(REMOVE_ELEMENT, this.element.id);
    }
  }
};
</script>

<style>
</style>