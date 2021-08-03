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
        return {};
    },
    methods: {
        /*The following function will group the ages into generations eg Millenials(1981-1996), Gen X(1965-1980) etc years etc and
        add the values of the indiviual age within that generation. The aim is to get the total number of employees for each generation.*/
        count_ages(obj) {
            let post_war = 0;
            let boomers1 = 0;
            let boomers2 = 0;
            let millenials = 0;
            let genx = 0;
            let genz = 0;
            for (let key in obj) {
                if (key >= 1928 && key <= 1945) {
                    post_war += obj[key];
                }

                if (key >= 1946 && key <= 1954) {
                    boomers1 += obj[key];
                }

                if (key >= 1955 && key <= 1964) {
                    boomers2 += obj[key];
                }

                if (key >= 1965 && key <= 1980) {
                    genx += obj[key];
                }
                if (key >= 1981 && key <= 1996) {
                    millenials += obj[key];
                }
                if (key >= 1997 && key <= 2012) {
                    genz += obj[key];
                }
            }
            return {
                post_war,
                boomers1,
                boomers2,
                genx,
                genz,
                millenials
            };
        }
    },
    computed: {
        chartOptions() {
            let age = this.$store.state.e.employeeAge;
            let generations = this.count_ages(age);
            return {
                debug: false,
                type: "column",
                title_label_text: "<b>Driver Scores per Generation</b>",
                palette: "waterMeadow",
                legend_visible: false,
                yAxis_visible: false,
                yAxis_defaultTick_label_text: "%value%",

                series: [
                    {
                        defaultPoint: {
                            tooltip:
                                "<b>%yValue%</b> of employees are<br><b>%name</b>",

                            label_text: "%value%"
                        },
                        name: "Generations",
                        points: [
                            {
                                name: "Post War",
                                y: generations.post_war
                            },
                            {
                                name: "Boomers I",
                                y: generations.boomers1
                            },
                            {
                                name: "Boomers II",
                                y: generations.boomers2
                            },
                            {
                                name: "Gen X",
                                y: generations.genx
                            },
                            {
                                name: "Millenials",
                                y: generations.millenials
                            },
                            {
                                name: "Gen Z",
                                y: generations.genz
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
