import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes : [
        {
          path : '/',
          name : 'main',
          component: ()=>import ('../views/main.vue')  
        },
        {
          path : '/head',
          name : 'head',
          component: ()=>import ('../pages/HelloWorld.vue')
        },
        {
          path : '/projects',
          name : 'projects',
          component: ()=>import ('../pages/projects.vue')
        },
        {
          path : '/technologies',
          name : 'technologies',
          component: ()=>import ('../pages/technologies.vue')
        },
        {
          path : '/Footer',
          name : 'Footer',
          component: ()=>import ('../pages/Footer.vue')
        },
    ]
})

export default router