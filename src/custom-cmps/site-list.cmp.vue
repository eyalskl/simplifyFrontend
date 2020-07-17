<template>
        <ul class="clean-list" :style="cmp.style">
        <li v-for="(cmp,idx) in cmp.list" :key="idx" v-text="cmp" contenteditable="true"/>
        </ul>
</template>

<script>
export default {
    name:"site-list",
    props:['cmp'],
}
</script>
