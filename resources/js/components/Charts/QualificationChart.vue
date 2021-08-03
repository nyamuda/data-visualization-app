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
        return {};
    },
    computed: {
        chartOptions() {
            let education = this.$store.state.e.employeeEducation;
            return {
                debug: false,
                title: {
                    position: "center",
                    label_text: "<b>Driver Scores per Qualification</b>"
                },
                yAxis_visible: false,
                defaultPoint_label_visible: true,
                legend_visible: false,
                defaultSeries_type: "column",
                series: [
                    {
                        name: "Employees",
                        hatchPalette: false,
                        defaultPoint_hatch_color: "#000000",
                        palette: "waterMeadow",
                        points: [
                            {
                                name: "Postgrad Degree",
                                y: education["Postgrad Degree"]
                                    ? education["Postgrad Degree"]
                                    : 0
                            },
                            {
                                name: "Bachelor's Degree",
                                y: education["Bachelor's Degree"]
                                    ? education["Bachelor's Degree"]
                                    : 0
                            },
                            {
                                name: "Diploma/Certificate",

                                y: education["Diploma/Certificate"]
                                    ? education["Diploma/Certificate"]
                                    : 0
                            },
                            {
                                name: "Matric",
                                y: education["Matric"] ? education["Matric"] : 0
                            },
                            {
                                name: "Less than Matric",
                                y: education["Less than Matric"]
                                    ? education["Less than Matric"]
                                    : 0
                            }
                        ]
                    }
                ]
            };
        }
    },
    components: {
        JSCharting
    }
};
</script>

<style></style>
