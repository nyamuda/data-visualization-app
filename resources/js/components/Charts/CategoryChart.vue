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
    components: {
        JSCharting
    },
    computed: {
        seriesData() {
            return this.$store.getters.categoryBreakDown;
        },
        chartOptions() {
            return {
                type: "horizontal column",
                palette: "darkRainbow",
                yAxis: {
                    scale_type: "stackedFull",
                    visible: true,
                    label_text: "<b>Percentage</b>"
                },
                defaultPoint: {
                    label_text: "{%percentOfGroup:n1}%<br>%seriesName",
                    tooltip:
                        "<b>%xValue (%seriesName)</b><hr><b>{%percentOfGroup:n1}%</b> of %xValue<br><b>{%percentOfSeries:n1}%</b> of %seriesName"
                },
                title_label_text: "<b>Breakdown per Category</b>",
                xAxis_label_text: "<b>Categories</b>",
                legend_visible: false,
                series: this.seriesData
            };
        }
    }
};
</script>

<style></style>
