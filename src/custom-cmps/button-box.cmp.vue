<template>
    <span :class="cmpTree.attr.class">
        <component :is="cmpTree.tagName" :style="cmpTree.attr.style"> {{ cmpTree.content }} </component>
    </span>
</template>

<script>
export default {
    name:"button-box",
    props:['cmpTree'],
    created() {
        console.log(this.cmpTree);
    }
}
</script>
