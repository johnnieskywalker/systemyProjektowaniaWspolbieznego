AmCharts.useUTC = true;
var test = [{
    "category": "Miecio",
    "segments": [ {
        "start": 7,
        "duration": 60,
        "color": "#ff00ff",
        "task": "Kopanie łopatą"
    }, {
        "duration": 2,
        "color": "#ff0000",
        "task": "Task #2"
    }, {
        "duration": 2,
        "color": "#8dc49f",
        "task": "Task #3"
    } ]
},
    {"category": "Jasiu",
    "segments": [ {
    "start": 7,
    "duration": 60,
    "color": "#ff00ff",
    "task": "Kopanie łopatą"
}, {
    "duration": 2,
    "color": "#ff0000",
    "task": "Task #2"
}, {
    "duration": 2,
    "color": "#8dc49f",
    "task": "Task #3"
} ]
}
];

console.log(local_data);

var chart = AmCharts.makeChart( "chartdiv", {
    "type": "gantt",
    "theme": "dark",
    "marginRight": 70,
    "period": "hh",
    "dataDateFormat":"YYYY-MM-DD",
    "balloonDateFormat": "JJ:NN",
    "columnWidth": 0.5,
    "valueAxis": {
        "type": "date",
        "minimum": 1,
        "maximum": 70
    },
    "brightnessStep": 10,
    "graph": {
        "fillAlphas": 1,
        "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
    },
    "rotate": true,
    "categoryField": "category",
    "segmentsField": "segments",
    "colorField": "color",
    "startDate": "2016-01-01",
    "startField": "start",
    "endField": "end",
    "durationField": "duration",
    "dataProvider":  local_data,
    "valueScrollbar": {
        "autoGridCount":true
    },
    "chartCursor": {
        "cursorColor":"#0000ff",
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0.7,
        "valueLineAlpha":0.5,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true,
        "zoomable":false,
        "valueZoomable":true
    },
    "export": {
        "enabled": true
     }
} );