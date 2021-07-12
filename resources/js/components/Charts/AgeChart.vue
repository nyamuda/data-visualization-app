<template>
    <div class="md:w-3/4 w-full">
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
                    label_text: "<b>Driver Scores per Generation</b>",
                    position: "center"
                },
                legend_visible: false,
                defaultSeries: {
                    type: "pie donut",
                    angle_orientation: 125,
                    shape_padding: 0.3,
                    mouseTracking_enabled: false
                },
                defaultPoint: {
                    label: {
                        text:
                            "<b>%name</b><br/>Population: <b>{%yValue/1000000:n1}M</b><br/>Unemployment: <b>%zValue%</b>",
                        margin: 10
                    }
                },
                zAxis_formatString: "n1",
                series: [
                    {
                        name: "Employees",
                        points: [
                            {
                                name: "Gen Z (1997 - 2012)",
                                y: 949585838,
                                z: 6.4
                            },
                            {
                                name: "Millenials (1981 - 1996)",
                                y: 1220800359,
                                z: 7.8
                            },
                            {
                                name: "Gen X (1965 - 1980)",
                                y: 509365627,
                                z: 8.8
                            },
                            {
                                name: "Boomers II (1955 - 1964)",
                                y: 316438601,
                                z: 7.5
                            },
                            {
                                name: "Boomers I (1946 - 1954)",
                                y: 251160124,
                                z: 6.6
                            },
                            {
                                name: "Post War (1928 - 1945)",
                                y: 951160124,
                                z: 6.6
                            }
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
