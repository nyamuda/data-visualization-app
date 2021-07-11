<template>
    <div class="w-1/2">
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
                title: {
                    label_text: "Annual Median Income by Race and Gender",
                    position: "center"
                },
                defaultAnnotation: { label_style: { fontSize: "15px" } },
                annotations: [
                    { position: "inside 160,35", label_text: "Male" },
                    {
                        position: "inside 385,35",
                        label_text: "Female"
                    }
                ],
                legend: {
                    horizontalSpacing: 20,
                    defaultEntry_style_fontSize: "16px",
                    position: "inside bottom",
                    template: "%percentOfTotal% %name"
                },
                defaultSeries: {
                    legendEntry: { visible: true },
                    type: "pie",
                    angle_sweep: "%percentOfTotal%",
                    shape: { size: "45%" },
                    defaultPoint: {
                        legendEntry_visible: false,
                        label_text: "%name <b>%percentOfTotal%</b>",
                        tooltip: "%seriesName - %name<br/><b>%yValue</b>"
                    }
                },
                yAxis: { label_text: "USD", formatString: "c" },
                series: [
                    {
                        palette: "default",
                        angle_orientation: -90,
                        name: "Male",
                        points: [
                            { name: "Asian", y: 51760 },
                            { name: "White", y: 51405 },
                            { name: "Black", y: 37496 },
                            { name: "Hispanic", y: 31393 }
                        ]
                    },
                    {
                        name: "Female",
                        palette: "default",
                        angle_orientation: 90,
                        points: [
                            { name: "Asian", y: 42331 },
                            { name: "White", y: 38533 },
                            { name: "Black", y: 31824 },
                            { name: "Hispanic", y: 27181 }
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
