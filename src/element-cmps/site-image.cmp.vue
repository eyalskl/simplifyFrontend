<template>
        <img :src="cmp.content" :style="cmp.style"/>
</template>

<script>
export default {
    name:"site-image",
    props:['cmp'],
}
</script>
