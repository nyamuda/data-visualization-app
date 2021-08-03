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
        return {};
    },
    computed: {
        //getting gender data from our state -module E.
        chartOptions() {
            let gender = this.$store.state.e.employeeGender;
            return {
                debug: false,
                title_position: "center",
                defaultSeries_type: "pie donut",
                legend_visible: false,
                palette: "fiveColor26",
                defaultPoint: {
                    label_text: "<br><b>%name</b> ",
                    outline: { color: "white", width: 3 }
                },
                title_label_text: "<b>Driver Scores Per Gender</b>",
                yAxis: { label_text: "Employees", formatString: "n" },
                series: [
                    {
                        name: "Employees",
                        points: [
                            //in case the property is no there/available we assign 0.
                            { name: "Male", y: gender.Male ? gender.Male : 0 },
                            {
                                name: "Female",
                                //in case the property is no there/available we assign 0.
                                y: gender.Female ? gender.Female : 0
                            },
                            //in case the property is no there/available we assign 0.
                            {
                                name: "Other",
                                y: gender.Other ? gender.Other : 0
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
