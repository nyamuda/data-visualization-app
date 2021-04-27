<template>
    <div>
        <div
            class="flex flex-col items-center justify-center w-full text-center."
        >
            <p>Number of employees who have completed the survey</p>
            <zingchart :data="chartData"></zingchart>
        </div>
    </div>
</template>

<script>
import "zingchart/es6";
import zingchartVue from "zingchart-vue";

export default {
    components: {
        zingchart: zingchartVue
    },
    data() {
        return {};
    },
    computed: {
        chartData() {
            return {
                type: "ring",
                backgroundColor: "#fff",
                plotarea: {
                    // Margin around each ring chart
                    margin: "0 50"
                },
                plot: {
                    slice: "80%", // Ring width,
                    detach: false, // Prevent ring piece from detaching on click
                    valueBox: [
                        {
                            // Percentage text
                            type: "first",
                            text: `${parseInt(
                                (this.totalUsers[0] /
                                    (this.totalUsers[0] + this.totalUsers[1])) *
                                    100
                            )}%`,
                            connected: false,
                            fontColor: "#1EBAED",
                            fontSize: "35px",
                            placement: "center",
                            visible: true,
                            offsetY: "-55px"
                        },
                        {
                            // Label text
                            type: "first",
                            text: "Participation",
                            connected: false,
                            fontColor: "#718096",
                            fontSize: "20px",
                            placement: "center",
                            visible: true,
                            offsetY: "-25px"
                        }
                    ],
                    animation: {
                        // Animation effect
                        effect: 3,
                        method: 0,
                        speed: 300,
                        sequence: 1
                    }
                },
                labels: [
                    {
                        // Fraction text
                        text: `${this.totalUsers[0]}/${this.totalUsers[0] +
                            this.totalUsers[1]}`,
                        fontColor: "#1EBAED",
                        fontSize: "32px",
                        fontWeight: 100,
                        x: "65%",
                        y: "10%"
                    }
                ],
                scaleR: {
                    // Set to half ring
                    refAngle: 180,
                    aperture: 180
                },
                tooltip: {
                    // Hide tooltip
                    visible: false
                },
                series: [
                    {
                        // First part of the ring (colored)
                        values: [this.totalUsers[0]],
                        backgroundColor: "#1EBAED"
                    },
                    {
                        // Remainder of ring
                        values: [this.totalUsers[1]],
                        backgroundColor: "#EDF2F7"
                    }
                ]
            };
        },
        totalUsers() {
            //calling the getter from module E
            return this.$store.getters.userCompleted;
        }
    },
    created() {
        /*Getting the total number of users who have completed the survey.
        From module E
         */
        this.$store.dispatch("userCompletedSurvey");
    }
};
</script>
