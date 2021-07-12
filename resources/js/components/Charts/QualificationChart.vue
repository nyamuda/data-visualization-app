<template>
    <div class="md:w-1/2 w-full">
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
                    position: "center",
                    label_text: "<b>Driver Scores per Qualification</b>"
                },
                defaultSeries_type: "column",
                series: [
                    {
                        name: "Employees",
                        hatchPalette: false,
                        defaultPoint_hatch_color: "#000000",
                        palette: "fiveColor44",
                        points: [
                            { name: "Postgrad Degree", y: 91 },
                            { name: "Bachelor's Degree", y: 118 },
                            {
                                name: "Diploma/Certificate",
                                hatch_style: "none",
                                y: 136
                            },
                            { name: "Matric", y: 230 },
                            { name: "Less than Matric", y: 123 }
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
