import Vue from "vue";
import VueRouter from "vue-router";

import DashBoard from "./components/DashBoard.vue";
import AdminPage from "./components/AdminPage.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import axios from "axios";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [{
            path: "/dashboard",
            name: "dashboard",
            component: DashBoard,
            beforeEnter: (to, from, next) => {
                axios
                    .get("/api/authenticated")
                    .then(() => next())
                    .catch(() => {
                        return next({ name: "login" });
                    });
            }
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