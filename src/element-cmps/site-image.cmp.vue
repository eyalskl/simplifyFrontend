<template>
        <img :src="cmp.content" :style="cmp.style" class="site-image"/>
</template>

<script>
export default {
    name:"site-image",
    props:['cmp'],
}
</script>
