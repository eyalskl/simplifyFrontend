<template>
    <section>
        <component :is="cmpTree.tagName" :style="cmpTree.attr.style"> {{ cmpTree.content }} </component>
    </section>
</template>

<script>
export default {
    name:"siteNav",
    props:['cmpTree'],
    created() {
        console.log(this.cmpTree);
    }
}
</script>