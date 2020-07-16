<template>
    <span :style="cmpTree.attr.style" contenteditable="true">
        {{cmpTree.content}}
    </span>
</template>

<script>
export default {
    name:"textBox",
    props:['cmpTree'],

}
</script>
