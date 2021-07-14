<template>
    <div class="bg-white">
        <admin-menu :section="section">
            <template v-slot:header>
                <div class="ml-10 flex items-baseline space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                    <router-link
                        to="/admin_dashboard"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Dashboard</router-link
                    >

                    <router-link
                        to="/admin_analytics"
                        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Analytics</router-link
                    >
                    <router-link
                        to="/admin_register_employee"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Add Employee</router-link
                    >

                    <router-link
                        to="/admin_new_question"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >Add Survey</router-link
                    >
                </div>
            </template>
            <template v-slot:default>
                <router-link
                    to="/admin_dashboard"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Dashboard</router-link
                >

                <router-link
                    to="/admin_analytics"
                    class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Analytics</router-link
                >
                <router-link
                    to="/admin_register_employee"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Add Employee</router-link
                >
                <router-link
                    to="/admin_new_question"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >Add Survey</router-link
                >
            </template>
        </admin-menu>

        <div
            id="charts"
            class="flex flex-col items-center justify-evenly flex-wrap m-auto relative border border-gray-200 pt-4 md:flex-row"
        >
            <em-chart></em-chart>
            <happy-chart></happy-chart>
            <cat-chart></cat-chart>
            <data-charts></data-charts>
            <quali-chart></quali-chart>
            <gender-chart></gender-chart>
            <years-org></years-org>
            <age-chart></age-chart>
        </div>
    </div>
</template>

<script>
import AdminMenu from "./AdminMenu";
import EmployeeChart from "./Charts/EmployeeChart.vue";
import Charts from "./Charts/PositionChart";
import AgeChart from "./Charts/AgeChart";
import QualificationChart from "./Charts/QualificationChart";
import YearsOrganisationChart from "./Charts/YearsOrganisation";
import GenderChart from "./Charts/GenderChart";
import CategoryChart from "./Charts/CategoryChart";
import HappinessChart from "./Charts/HappinessChart";
export default {
    components: {
        "admin-menu": AdminMenu,
        "em-chart": EmployeeChart,
        "data-charts": Charts,
        "age-chart": AgeChart,
        "quali-chart": QualificationChart,
        "years-org": YearsOrganisationChart,
        "gender-chart": GenderChart,
        "cat-chart": CategoryChart,
        "happy-chart": HappinessChart
    },
    data() {
        return {
            section: "Analytics"
        };
    },
    computed: {},
    created() {
        /*Getting the total number of users who have completed the survey.
        From module E
         */
        this.$store.dispatch("userCompletedSurvey");
        this.$store.dispatch("dataForAnalysis");
    }
};
</script>
<style scoped>
#charts {
    width: 95%;
    margin-top: 5rem !important;
}
</style>
