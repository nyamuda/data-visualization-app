<template>
    <div>
        <div class="w-full">
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
        return {
            chartData: {
                type: "pie",
                title: {
                    text: "A Pie Chart"
                },
                series: [
                    {
                        values: [59]
                    },
                    {
                        values: [55]
                    },
                    {
                        values: [30]
                    },
                    {
                        values: [28]
                    },
                    {
                        values: [15]
                    }
                ]
            }
        };
    },
    computed: {}
};
</script>
