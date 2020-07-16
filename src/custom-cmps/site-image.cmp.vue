<template>
        <img :src="cmp.content" style="cmp.style"/>
</template>

<script>
export default {
    name:"image-box",
    props:['cmp'],
}
</script>
