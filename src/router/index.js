import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/oj/Main'
import Login from '../views/Login'
import ProblemList from "@/views/oj/problem/ProblemList.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Main
        },
        {
            path: "/problems",
            component: ProblemList
        }
    ]
})
