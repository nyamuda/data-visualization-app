<template>
    <div class="flex flex-col h-screen justify-between">
        <admin-header :section="section"></admin-header>

        <div
            id="charts"
            class="bg-white flex flex-col items-center justify-evenly flex-wrap m-auto relative border border-gray-200 pt-4 md:flex-row"
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
        <the-footer></the-footer>
        <loader></loader>
    </div>
</template>

<script>
import AdminHeader from "./AdminHeader";
import EmployeeChart from "./Charts/EmployeeChart.vue";
import Charts from "./Charts/PositionChart";
import AgeChart from "./Charts/AgeChart";
import QualificationChart from "./Charts/QualificationChart";
import YearsOrganisationChart from "./Charts/YearsOrganisation";
import GenderChart from "./Charts/GenderChart";
import CategoryChart from "./Charts/CategoryChart";
import HappinessChart from "./Charts/HappinessChart";
import Footer from "../Footer";
import Loader from "../Loader";

export default {
    components: {
        "em-chart": EmployeeChart,
        "data-charts": Charts,
        "age-chart": AgeChart,
        "quali-chart": QualificationChart,
        "years-org": YearsOrganisationChart,
        "gender-chart": GenderChart,
        "cat-chart": CategoryChart,
        "happy-chart": HappinessChart,
        "admin-header": AdminHeader,
        "the-footer": Footer,
        loader: Loader
    },
    data() {
        return {
            section: "Dashboard"
        };
    },
    computed: {},
    created() {
        /*Getting the total number of users who have completed the survey.
        From module E
         */
        this.$store.dispatch("userCompletedSurvey");

       
        /*Getting the total data to be analysed from the database.
        From module E*/
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
