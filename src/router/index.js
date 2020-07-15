import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/home-page.cmp.vue'
import aboutPage from '@/views/about-page.cmp.vue'
import editor from '@/views/editor.cmp.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home Page',
        component: homePage
    },
    {
        path: '/about',
        name: 'About Page',
        component: aboutPage
    },
    {
        path: '/editor',
        name: 'Editor Page',
        component: editor
    }
]

const router = new VueRouter({
    routes
})

export default router