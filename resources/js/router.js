import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";
import AdminLogin from "./components/AdminLogin.vue";
import AdminPage from "./components/AdminPage.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/admin",
            name: "admin",
            component: AdminLogin
        },
        {
            path: "/admin",
            name: "admin",
            component: AdminPage
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        }
    ]
});

export default router;