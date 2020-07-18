<template>
        <ul class="clean-list" :style="cmp.style">
            <li v-for="(cmp, idx) in cmp.cmps" :key="idx">
        <component :is="cmp.type" :cmp="cmp" ></component>
        </li>
        </ul>
</template>

<script>

    import siteText from '@/custom-cmps/site-text.cmp.vue';
    import siteImage from '@/custom-cmps/site-image.cmp.vue';
    import siteButton from '@/custom-cmps/site-button.cmp.vue';


export default {
    name:"site-list",
    props:['cmp'],
    components:{
        siteText,
        siteImage,
        siteButton,


    }
}
</script>
