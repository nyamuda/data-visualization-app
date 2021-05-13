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
import {
    protectAdminRoutes,
    protectUserRoutes
} from "./components/protectRoutes";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashBoard,
            beforeEnter: protectUserRoutes
        },
        {
            path: "/admin_dashboard",
            name: "admin_dashboard",
            component: AdminPage,
            beforeEnter: protectAdminRoutes
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
            component: Register,
            beforeEnter: protectAdminRoutes
        },
        {
            path: "/admin_new_question",
            name: "new_question",
            component: AddNewQuestion,
            beforeEnter: protectAdminRoutes
        },
        {
            path: "/admin_analytics",
            name: "analytics",
            component: DataAnalytics,
            beforeEnter: protectAdminRoutes
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: Quiz,
            beforeEnter: protectUserRoutes
        },
        {
            path: "/survey_list",
            name: "survey_list",
            component: SurveyList,
            beforeEnter: protectUserRoutes
        },
        {
            path: "/categories/:id",
            name: "quiz_list",
            component: QuizList,
            beforeEnter: protectUserRoutes
        }
    ]
});

export default router;
