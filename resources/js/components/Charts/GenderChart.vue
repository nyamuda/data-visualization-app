<template>
    <div class="md:w-1/3 w-full">
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
                legend_visible: false,
                title_position: "center",
                defaultSeries: {
                    type: "pie",
                    pointSelection: true,
                    shape_padding: 0.15
                },
                defaultPoint_label_text: "%name<br><b>%yValue</b>",
                yAxis: { formatString: "n", label_text: "" },
                series: [
                    {
                        points: [
                            { name: "Female", y: 5452500 },
                            { exploded: true, name: "Male", y: 786052 },
                            {
                                exploded: true,
                                name: "Other",
                                y: 477338
                            }
                        ],
                        name: "Employees"
                    }
                ],
                title_label_text: "<b>Driver Scores per Gender</b>"
            }
        };
    },
    components: {
        JSCharting
    }
};
</script>

<style></style>
