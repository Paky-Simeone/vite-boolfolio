import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import BlogPage from './pages/BlogPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

const router = createRouter({
    history:  createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/blog',
            name: 'project.index',
            component: BlogPage,
        },
        {
            path: '/project/:title',
            name: 'project.show',
            component: ProjectPage,
        },
    ]
});


export { router };