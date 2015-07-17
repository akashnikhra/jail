$(function () {
    $('#chart1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Particulars Number of Prisons'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Numbers'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Number of Jails: <b>{point.y:.1f}</b>'
        },
        series: [{
            name: 'Number of Jails',
            data: [
                ['Central Prisons', 11],
                ['District Prisons', 39],
                ['Open-Jails', 01],
                ['Sub-Jails', 72],
                ['Total', 123]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 4,
                y: 10,
                style: {
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });
});

$(function () {
    $('#chart2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Approved Capacity'
        },
        xAxis: {
            categories: [
                'Central Prisons',
                'District Prisons',
                'Open-Jails',
                'Sub-Jails',
                'Total'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Numbers'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            data: [12799, 7903, 25, 4890, 25617]

        },
        {
            name: 'Female',
            data: [623, 628, 00, 339, 1650]

        }]
    });
});

$(function () {
    $('#chart3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Actual Population'
        },
        xAxis: {
            categories: [
                'Central Prisons',
                'District Prisons',
                'Open-Jails',
                'Sub-Jails',
                'Total'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Numbers'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            data: [19068, 11535, 23, 5644, 36270]

        },
        {
            name: 'Female',
            data: [625, 565, 00, 00, 1190]

        }]
    });
});

$(function () {
    $('#chart4').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Classification'
        },
        xAxis: {
            categories: [
                'Convicts',
                'Under-trial',
                'Others (Civil/Detenus)',
                'Total'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Numbers'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            data: [16333, 19799, 138, 36270]

        },
        {
            name: 'Female',
            data: [561, 627, 02, 1190]

        }]
    });
});

