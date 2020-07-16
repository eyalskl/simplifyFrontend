<template>
    <section>
        <component :is="cmpTree.tagName" :style="cmpTree.attr.style"> {{ cmpTree.content }} </component>
    </section>
</template>

<script>
export default {
    name:"siteFooter",
    props:['cmpTree'],
    created() {
        console.log(this.cmpTree);
    }
}
</script>