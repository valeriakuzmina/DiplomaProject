import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    routes: [
            {
                path: "/",
                name: "home",
                component: () => import('@/pages/HomePage.vue')

            },
            {
                path: "/favorite",
                name: "project",
                component: () => import('@/pages/FavoritePage.vue')

            },
            {
                path: "/message",
                name: "blog",
                component: () => import('@/pages/NotesPage.vue')

            },
            {
                path: '/user',
                name: "projectdetails",
                component: () => import('@/pages/UserPage.vue')
            },
            // {
            //     path: '/404',
            //     name: "blogdetails",
            //     component: () => import('@/components/BlogDetails.vue')
            // }
        ]
    }
)


