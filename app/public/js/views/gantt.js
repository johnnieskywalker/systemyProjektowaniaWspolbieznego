AmCharts.useUTC = true;
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
    "dataProvider": [ {
        "category": "Zdzichu",
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
    }, {
        "category": "Smith",
        "segments": [ {
            "start": 10,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 1,
            "color": "#8dc49f",
            "task": "Task #3"
        }, {
            "duration": 4,
            "color": "#46615e",
            "task": "Task #1"
        } ]
    }, {
        "category": "Ben",
        "segments": [ {
            "start": 12,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "start": 16,
            "duration": 2,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    }, {
        "category": "Mike",
        "segments": [ {
            "start": 9,
            "duration": 6,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 4,
            "color": "#727d6f",
            "task": "Task #2"
        } ]
    }, {
        "category": "Lenny",
        "segments": [ {
            "start": 8,
            "duration": 1,
            "color": "#8dc49f",
            "task": "Task #3"
        }, {
            "duration": 4,
            "color": "#46615e",
            "task": "Task #1"
        } ]
    }, {
        "category": "Scott",
        "segments": [ {
            "start": 15,
            "duration": 3,
            "color": "#727d6f",
            "task": "Task #2"
        } ]
    }, {
        "category": "Julia",
        "segments": [ {
            "start": 9,
            "duration": 2,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 1,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 8,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Bob",
        "segments": [ {
            "start": 9,
            "duration": 8,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 7,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Kendra",
        "segments": [ {
            "start": 11,
            "duration": 8,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "start": 16,
            "duration": 2,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    }, {
        "category": "Patryk",
        "segments": [ {
            "start": 9,
            "duration": 4,
            "color": "#0000ff",
            "task": "wbic do johnnego"
        }, {
            "duration": 3,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 5,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Kyle",
        "segments": [ {
            "start": 6,
            "duration": 3,
            "color": "#727d6f",
            "task": "Task #2"
        } ]
    }, {
        "category": "Anita",
        "segments": [ {
            "start": 12,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "start": 16,
            "duration": 2,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    }, {
        "category": "Jack",
        "segments": [ {
            "start": 8,
            "duration": 10,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        } ]
    }, {
        "category": "Kim",
        "segments": [ {
            "start": 12,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 3,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Mietek",
        "segments": [ {
            "start": 20,
            "duration": 1,
            "color": "#ffff00",
            "task": "wyciac las"
        }, {
            "duration": 9,
            "color": "#001100",
            "task": "napalic w piecu"
        } ]
    }, {
        "category": "Alan",
        "segments": [ {
            "start": 17,
            "duration": 2,
            "color": "#46615e",
            "task": "Task #1"
        }, {
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 2,
            "color": "#8dc49f",
            "task": "Task #3"
        } ]
    }, {
        "category": "Ruth",
        "segments": [ {
            "start": 13,
            "duration": 2,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "duration": 1,
            "color": "#8dc49f",
            "task": "Task #3"
        }, {
            "duration": 4,
            "color": "#46615e",
            "task": "Task #1"
        } ]
    }, {
        "category": "Simon",
        "segments": [ {
            "start": 10,
            "duration": 3,
            "color": "#727d6f",
            "task": "Task #2"
        }, {
            "start": 17,
            "duration": 4,
            "color": "#FFE4C4",
            "task": "Task #4"
        } ]
    } ],
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