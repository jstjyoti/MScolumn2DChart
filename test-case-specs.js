var chartSpec = {
    "test_1": {
        "id": "test_1",
        "description": "chart height width along with animation,animationDuration, palette, paletetColor, showLabel,MaxLabelHeight test, useEllipses when Overflow",
        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "300",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    //"plotFillAlpha": "80",
                    //"theme": "fusion"
                    //"animation":1,
                    "animationDuration":3,
                    "palette":10,
                    "paletteColor":"#00ff00,#0000ff,#ff0000",
                    showLabels:1,
                    "labeldisplay":"wrap",
                    "maxLabelHeight":100,
                    "useEllipsesWhenOverflow":1,
                    //"rotateLabels":1,
                    "slantLabels":1,

                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": "Question1"
                            },
                            {
                                "label": "Question2"
                            },
                            {
                                "label": "Question3"
                            },
                            {
                                "label": "Question4"
                            }
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Previous Year",
                        "data": [
                            {
                                "value": "10000"
                            },
                            {
                                "value": "11500"
                            },
                            {
                                "value": "12500"
                            },
                            {
                                "value": "15000"
                            }
                        ]
                    },
                    {
                        "seriesname": "Current Year",
                        "data": [
                            {
                                "value": "25400"
                            },
                            {
                                "value": "29800"
                            },
                            {
                                "value": "21800"
                            },
                            {
                                "value": "26800"
                            }
                        ]
                    }
                ],

            }
            
        }
    },
    "test_2": {
        "id": "test_2",
        "description": "canvas background color",
        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "300",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "plotFillAlpha": "80",
                    "theme": "fusion"
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": "Q1"
                            },
                            {
                                "label": "Q2"
                            },
                            {
                                "label": "Q3"
                            },
                            {
                                "label": "Q4"
                            }
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Previous Year",
                        "data": [
                            {
                                "value": "10000"
                            },
                            {
                                "value": "11500"
                            },
                            {
                                "value": "12500"
                            },
                            {
                                "value": "15000"
                            }
                        ]
                    },
                    {
                        "seriesname": "Current Year",
                        "data": [
                            {
                                "value": "25400"
                            },
                            {
                                "value": "29800"
                            },
                            {
                                "value": "21800"
                            },
                            {
                                "value": "26800"
                            }
                        ]
                    }
                ],
                "trendlines": [
                    {
                        "line": [
                            {
                                "startvalue": "12250",
                                "color": "#0075c2",
                                "displayvalue": "Previous{br}Average",
                                "valueOnRight": "1",
                                "thickness": "1",
                                "showBelow": "1",
                                "tooltext": "Previous year quarterly target  : $13.5K"
                            },
                            {
                                "startvalue": "25950",
                                "color": "#1aaf5d",
                                "displayvalue": "Current{br}Average",
                                "valueOnRight": "1",
                                "thickness": "1",
                                "showBelow": "1",
                                "tooltext": "Current year quarterly target  : $23K"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "test_3": {
        "id": "test_3",
        "description": "canvas border color",
        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "300",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "plotFillAlpha": "80",
                    "theme": "fusion"
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": "Q1"
                            },
                            {
                                "label": "Q2"
                            },
                            {
                                "label": "Q3"
                            },
                            {
                                "label": "Q4"
                            }
                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Previous Year",
                        "data": [
                            {
                                "value": "10000"
                            },
                            {
                                "value": "11500"
                            },
                            {
                                "value": "12500"
                            },
                            {
                                "value": "15000"
                            }
                        ]
                    },
                    {
                        "seriesname": "Current Year",
                        "data": [
                            {
                                "value": "25400"
                            },
                            {
                                "value": "29800"
                            },
                            {
                                "value": "21800"
                            },
                            {
                                "value": "26800"
                            }
                        ]
                    }
                ],
                "trendlines": [
                    {
                        "line": [
                            {
                                "startvalue": "12250",
                                "color": "#0075c2",
                                "displayvalue": "Previous{br}Average",
                                "valueOnRight": "1",
                                "thickness": "1",
                                "showBelow": "1",
                                "tooltext": "Previous year quarterly target  : $13.5K"
                            },
                            {
                                "startvalue": "25950",
                                "color": "#1aaf5d",
                                "displayvalue": "Current{br}Average",
                                "valueOnRight": "1",
                                "thickness": "1",
                                "showBelow": "1",
                                "tooltext": "Current year quarterly target  : $23K"
                            }
                        ]
                    }
                ]
            }
        }
    }
};