<template>
    <div class="w-1/3">
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
                title_position: 'center',
        legend: {
          template: '%value {%percentOfTotal:n1}% %icon %name',
          position: 'inside left bottom'
        },
        defaultSeries: { type: 'pie', pointSelection: true },
        defaultPoint_label_text: '<b>%name</b>',
        title_label_text: 'Driver Score per Position',
        yAxis: { label_text: 'Number', formatString: 'n' },
        series: [
          {
            name: 'Employees',
            points: [
              { name: 'Executive', y: 5452500 },
              { name: 'Senior Manager', y: 786052 },
              { name: 'Junior Manager', y: 477338 },
              { name: 'Operational/Staff', y: 155313 },
              { name: 'Supervisor', y: 155313 }
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
