import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/views/home-page.cmp.vue'
import aboutPage from '@/views/about-page.cmp.vue'
import siteEditor from '@/views/site-editor.cmp.vue'
import templatesPage from '@/views/templates-page.cmp.vue'

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
        path: '/editor/:id?',
        name: 'Editor Page',
        component: siteEditor
    },
    {
        path: '/templates',
        name: 'Templates Page',
        component: templatesPage
    }
]

const router = new VueRouter({
    routes
})

export default router