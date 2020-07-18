<template>
        <img :src="cmp.content" :style="cmp.style" class="site-image" @click.stop="openEditor" />
</template>

<script>
import { eventBus, EDIT_ELEMENT, FORCE_UPDATE } from "@/services/event-bus.service.js";

export default {
    name:"site-image",
    props:['cmp'],
    methods: {
        openEditor() {
            eventBus.$emit(EDIT_ELEMENT, this.cmp);
        }
    }
}
</script>
