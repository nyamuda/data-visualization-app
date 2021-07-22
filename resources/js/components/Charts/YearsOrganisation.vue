<template>
    <div class="md:w-2/3 w-full">
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
    methods: {
        /*The following function will group the years into interrvals eg 1-2 years, 3-5 years etc and
        add the values of the indiviual years within that interval. The aim is to get the total number of employees for each interval.*/
        count_years(obj) {
            let zero_years = 0;
            let one_to_two_years = 0;
            let three_to_five_years = 0;
            let six_to_ten_years = 0;
            let plus_ten_years = 0;
            for (let key in obj) {
                //less than 1 year
                if (key == 0) {
                    zero_years += obj[key];
                }
                //1-2 years
                if (key >= 1 && key <= 2) {
                    one_to_two_years += obj[key];
                }
                //3-5 years
                if (key >= 3 && key <= 5) {
                    three_to_five_years += obj[key];
                }
                //6-10 years
                if (key >= 6 && key <= 10) {
                    six_to_ten_years += obj[key];
                }
                //more than ten years
                if (key > 10) {
                    plus_ten_years += obj[key];
                }
            }
            return {
                zero_years,
                one_to_two_years,
                three_to_five_years,
                six_to_ten_years,
                plus_ten_years
            };
        }
    },
    computed: {
        chartOptions() {
            let years = this.$store.state.e.employeeYearsAtCompany;

            let interval_years = this.count_years(years);

            return {
                type: "funnel",
                legend_visible: false,

                /*These y axis settings  describe the point y values.*/
                yAxis: { label_text: "Employees", formatString: "" },
                title: {
                    label_text:
                        "<b>Driver Scores per 'Years at Organization'</b>",
                    position: "center"
                },
                defaultSeries: {
                    /*Gaps between cone section.*/
                    shape_innerPadding: 6,
                    defaultPoint: {
                        label: {
                            text: "<b>%name</b> (%percentOfSeries%)",
                            placement: "outside"
                        }
                    }
                },
                series: [
                    {
                        name: "Employees",
                        palette: "default",
                        points: [
                            {
                                name: "Less than 1 year",
                                y: interval_years.zero_years
                            },
                            {
                                name: "1 - 2 years",
                                y: interval_years.one_to_two_years
                            },
                            {
                                name: "3 - 5 years",
                                y: interval_years.three_to_five_years
                            },
                            {
                                name: "6 - 10 years",
                                y: interval_years.six_to_ten_years
                            },
                            {
                                name: "10+ years",
                                y: interval_years.plus_ten_years
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
