import {createRouter, createWebHistory} from 'vue-router';
import HelloWorld from "@/components/HelloWorld.vue";
import ScriptApp from "@/components/ScriptApp.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/script-app',
        name: 'ScriptApp',
        component: ScriptApp
    },
    {
        path: '/about/:slug',
        name: 'About',
        component: () => import('@/components/About.vue')
    }
];

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
