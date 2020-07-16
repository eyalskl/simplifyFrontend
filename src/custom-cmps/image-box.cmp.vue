<template>
    <span>
        <component :is="cmpTree.tagName" :src="cmpTree.attr.src" :style="cmpTree.attr.style" />
    </span>
</template>

<script>
export default {
    name:"image-box",
    props:['cmpTree'],
    created() {
        console.log(this.cmpTree);
    }
}
</script>
