<template>
    <div class="w-3/4">
        <JSCharting :options="chartOptions1" class="columnChart"></JSCharting>
        <JSCharting :options="chartOptions2" class="columnChart"></JSCharting>
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
            return [
                {
                    name: "Very Happy",
                    id: "s1",
                    points: [
                        { x: "Equitable Treatment", y: 230 },
                        { x: "Mutual Support", y: 240 },
                        { x: "Confidence in Redress", y: 267 },
                        { x: "Workplace Fairness", y: 238 },
                        { x: "Organisational Belonging", y: 238 }
                    ]
                },
                {
                    name: "Very Unhappy",
                    points: [
                        { x: "Equitable Treatment", y: 130 },
                        { x: "Mutual Support", y: 140 },
                        { x: "Confidence in Redress", y: 167 },
                        { x: "Workplace Fairness", y: 138 },
                        { x: "Organisational Belonging", y: 138 }
                    ]
                },
                {
                    name: "Neutral",
                    points: [
                        { x: "Equitable Treatment", y: 30 },
                        { x: "Mutual Support", y: 40 },
                        { x: "Confidence in Redress", y: 67 },
                        { x: "Workplace Fairness", y: 38 },
                        { x: "Organisational Belonging", y: 28 }
                    ]
                },
                {
                    name: "Happy",
                    points: [
                        { x: "Equitable Treatment", y: 23 },
                        { x: "Mutual Support", y: 24 },
                        { x: "Confidence in Redress", y: 167 },
                        { x: "Workplace Fairness", y: 231 },
                        { x: "Organisational Belonging", y: 28 }
                    ]
                },
                {
                    name: "Unhappy",
                    points: [
                        { x: "Equitable Treatment", y: 30 },
                        { x: "Mutual Support", y: 24 },
                        { x: "Confidence in Redress", y: 217 },
                        { x: "Workplace Fairness", y: 211 },
                        { x: "Organisational Belonging", y: 22 }
                    ]
                }
            ];
        },
        chartOptions1() {
            return {
                type: "column",
                palette: "bright",
                yAxis: {
                    scale_type: "stackedFull",
                    visible: true,
                    label_text: "<b>Percentage</b>"
                },
                defaultPoint: {
                    label_text: "{%percentOfGroup:n1}%<br>%seriesName",
                    tooltip:
                        "%xValue %seriesName <b>%yValue</b><hr><b>{%percentOfGroup:n1}%</b> of %xValue<br><b>{%percentOfSeries:n1}%</b> of %seriesName"
                },
                title_label_text: "<b>Breakdown per Category</b>",
                xAxis_label_text: "<b>Categories</b>",
                series: this.seriesData
            };
        },
        chartOptions2() {
            return {
                type: "pie",
                palette: "bright",
                title: {
                    label_text: "Sales By Representative",
                    position: "center"
                },
                defaultPoint_label_text: "<b>%name</b> %PercentOfTotal%",
                legend_position: "bottom",
                series: this.seriesData
            };
        }
    }
};
</script>

<style></style>
