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
        //getting position data from our state -module E.
        chartOptions() {
            let position = this.$store.state.e.employeePosition;
            return {
                title_position: "center",
                legend: {
                    template: "%value {%percentOfTotal:n1}% %icon %name",
                    position: "inside left bottom"
                },
                defaultSeries: { type: "pie", pointSelection: true },
                defaultPoint_label_text: "<b>%name</b>",
                title_label_text: "<b>Driver Score per Position</b>",
                yAxis: { label_text: "Number", formatString: "n" },
                series: [
                    {
                        name: "Employees",
                        points: [
                            {
                                name: "Executive",
                                //in case the property is no there/available we assign 0.
                                y: position["Executive"]
                                    ? position["Executive"]
                                    : 0
                            },
                            {
                                name: "Senior Manager",
                                //in case the property is no there/available we assign 0.
                                y: position["Senior Manager"]
                                    ? position["Senior Manager"]
                                    : 0
                            },
                            {
                                name: "Junior Manager",
                                //in case the property is no there/available we assign 0.
                                y: position["Junior Manager"]
                                    ? position["Junior Manager"]
                                    : 0
                            },
                            {
                                name: "Operational/Staff",
                                //in case the property is no there/available we assign 0.
                                y: position["Operational/Staff"]
                                    ? position["Operational/Staff"]
                                    : 0
                            },
                            {
                                name: "Supervisor",
                                //in case the property is no there/available we assign 0.
                                y: position["Supervisor"]
                                    ? position["Supervisor"]
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
