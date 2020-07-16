<template>
    <nav class="flex space-between" :style="cmp.style">
        <div :style="cmp.style.logo">
        logo
        </div>
        <div :style="cmp.style.main-nav">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>

        </div>
    </nav>
</template>

<script>
export default {
    name:"siteNav",
    props:['cmp'],
    created() {
        console.log(this.cmp);
    }
}
</script>