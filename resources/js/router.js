import Vue from "vue";
import VueRouter from "vue-router";

import DashBoard from "./components/DashBoard.vue";
import AdminPage from "./components/AdminPage.vue";
import AdminLogin from "./components/AdminLogin.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import axios from "axios";
import Quiz from "./components/Quiz.vue";
import AddNewQuestion from "./components/AddNewQuestion.vue";
import DataAnalytics from "./components/DataAnalytics.vue";
import SurveyList from "./components/SurveyList.vue";
import QuizList from "./components/QuizList.vue";

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
            path: "/admin_dashboard",
            name: "admin_dashboard",
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
            path: "/admin",
            name: "admin_login",
            component: AdminLogin
        },
        {
            path: "/admin_register_employee",
            name: "register",
            component: Register
        },
        {
            path: "/admin_new_question",
            name: "new_question",
            component: AddNewQuestion
        },
        {
            path: "/admin_analytics",
            name: "analytics",
            component: DataAnalytics
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: Quiz
        },
        {
            path: "/survey_list",
            name: "survey_list",
            component: SurveyList
        },
        {
            path: "/categories/:id",
            name: "quiz_list",
            component: QuizList
        }
    ]
});

export default router;
