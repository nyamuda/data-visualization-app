<template>
    <div class="w-5/6">
        <JSCharting :options="chartOptions" class="columnChart"></JSCharting>
    </div>
</template>

<script>
import JSCharting from "jscharting-vue";

export default {
    name: "columnChart",
    components: {
        JSCharting
    },
    data() {
        return {
            employeeInfo: ""
        };
    },
    computed: {
        employeeTotal() {
            //calling the getter from module E
            return this.$store.getters.userCompleted;
        },
        chartOptions() {
            return {
                title: {
                    label_text: "Employee Participation.",
                    position: "center"
                },
                legend_visible: false,
                yAxis: [
                    {
                        line_visible: true,
                        defaultTick_enabled: false,
                        scale_range: [0, 100]
                    },
                    {
                        id: "y2",
                        line_width: 0,
                        defaultTick_enabled: false,
                        scale_range: [0, 100]
                    },
                    {
                        id: "y3",
                        line_width: 0,
                        defaultTick_enabled: false,
                        scale_range: [0, 100]
                    }
                ],
                xAxis: [
                    {
                        defaultTick_gridLine_width: 0,

                        /*Reduces column size to pad against axis line.*/
                        spacingPercentage: 0.15
                    },
                    {
                        id: "x2",
                        defaultTick_gridLine: {
                            onTop: true,
                            width: 3,
                            dashStyle: "dot"
                        },
                        spacingPercentage: 0.15
                    },
                    {
                        id: "x3",
                        defaultTick_gridLine_width: "column",
                        spacingPercentage: 0.15
                    }
                ],
                defaultSeries: {
                    type: "gauge column roundCaps",
                    shape: {
                        innerSize: "70%",
                        label: [
                            { text: "%name" },
                            {
                                text: "%sum%",
                                verticalAlign: "middle",
                                style_fontSize: 20
                            }
                        ]
                    }
                },
                series: [
                    {
                        name: `${this.employeeTotal.goodUsers} out of ${this.employeeTotal.total} employees participated in the survey.`,
                        yAxis: "y3",
                        xAxis: "x3",
                        points: [["value", this.employeeTotal.percent]]
                    },
                   
                ]
            };
        }
    }
};
</script>

<style></style>
