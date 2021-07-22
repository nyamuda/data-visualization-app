<template>
    <div class="md:w-2/3 w-full overflow-x-auto">
        <JSCharting :options="chartOptions" class="columnChart"></JSCharting>
    </div>
</template>

<script>
import JSCharting from "jscharting-vue";

export default {
    name: "columnChart",
    data() {
        return {};
    },
    components: {
        JSCharting
    },
    computed: {
        seriesData() {
            return this.$store.getters.categoryBreakDown;
        },
        chartOptions() {
            return {
                type: "pieDonut",
                palette: "darkRainbow",
                title: {
                    label_text: "<b>Employee Satisfaction</b>",
                    position: "center"
                },
                defaultPoint: {
                    label_text: "<b>%name</b> %PercentOfTotal%",
                    tooltip: "%name <br> %PercentOfTotal% of Answers"
                },
                legend_position: "bottom",
                legend_visible: false,
                series: this.seriesData
            };
        }
    }
};
</script>

<style></style>
