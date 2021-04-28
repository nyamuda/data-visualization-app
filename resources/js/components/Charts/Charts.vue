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
                type: "pie",
                title: {
                    label_text: "Top World Populations",
                    position: "center"
                },
                legend_visible: false,
                defaultSeries: { angle: 45, pointSelection: true },
                defaultPoint_label_text: "%name <b>%percentOfTotal%</b>",
                series: [
                    {
                        name: "Top 5 Countries",
                        points: [
                            { name: "China", y: 1349585838 },
                            { name: "India", y: 1220800359 },
                            { name: "Europe", y: 509365627 },
                            { name: "U.S.", y: 316438601 },
                            { name: "Indonesia", y: 251160124 }
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
