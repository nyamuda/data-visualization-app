import Vue from "vue";
import VueRouter from "vue-router";

import DashBoard from "./components/DashBoard.vue";
import AdminPage from "./components/AdminPage.vue";
import AdminLogin from "./components/AdminLogin.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import axios from "axios";
import Quiz from "./components/Quiz.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        {
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
            component: AdminPage,
            beforeEnter: (to, from, next) => {
                axios
                    .get("/api/authenticated")
                    .then(() => next())
                    .catch(() => {
                        return next({ name: "admin_login" });
                    });
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/admin_login",
            name: "admin_login",
            component: AdminLogin
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: Quiz
        }
    ]
});

export default router;
