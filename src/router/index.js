import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/oj/Main'
import Login from '../views/Login'
import ProblemList from "@/views/oj/problem/ProblemList.vue";
import ContestList from "@/views/oj/contest/ContestList";
import Status from "@/views/oj/status/Status";
import Rank from "@/views/oj/rank/Rank";
import Blog from "@/views/oj/blog/Blog";
import About from "@/views/oj/About";
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            component: Login,
        },
        {
            path: "/logo",
            redirect: "/"
        },
        {
            path: '/',
            component: Main
        },
        {
            path: "/problems",
            component: ProblemList
        },
        {
            path: "/contest",
            component: ContestList
        },
        {
            path: "/status",
            component: Status
        },
        {
            path: "/rank",
            component: Rank
        },
        {
            path: "/blog",
            component: Blog
        },
        {
            path: "/about",
            component: About
        },

    ]
})
