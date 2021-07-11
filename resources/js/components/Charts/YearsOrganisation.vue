<template>
    <div class="w-1/3">
        <JSCharting :options="chartOptions" class="columnChart"></JSCharting>
    </div>
</template>

<script>
import JSCharting from "jscharting-vue";

export default {
    name: "columnChart",
    data() {
        return {
            chartOptions: {
                type: "funnel",
                legend_visible: false,

                /*These y axis settings  describe the point y values.*/
                yAxis: { label_text: "Employees", formatString: "" },
                title: {
                    label_text: "Driver Scores per 'Years at Organization'",
                    position: "center"
                },
                defaultSeries: {
                    /*Gaps between cone section.*/
                    shape_innerPadding: 6,
                    defaultPoint: {
                        label: {
                            text: "<b>%name</b> (%percentOfSeries%)",
                            placement: "outside"
                        }
                    }
                },
                series: [
                    {
                        name: "Employees",
                        palette: "default",
                        points: [
                            { name: "Less than 1 year", y: 183 },
                            { name: "1 - 2 years", y: 140 },
                            { name: "3 - 5 years", y: 136 },
                            { name: "6 - 10 years", y: 80 },
                            { name: "10+ years", y: 50 }
                        ]
                    }
                ]
            }
        };
    },
    components: {
        JSCharting
    }
};
</script>

<style></style>
