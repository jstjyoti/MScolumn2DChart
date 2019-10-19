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
                    "animation":1,
                    "animationDuration":3,
                    "palette":5,
                    "paletteColor":"#00ff00,#0000ff,#ff0000",
                    showLabels:1,
                    "labeldisplay":"wrap",
                    
                    
                    "maxLabelHeight":100,
                    "useEllipsesWhenOverflow":1,
                    "rotateLabels":1,
                    "slantLabels":1,
                    "labelstep":1,
                    



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
        "description": "chart Caption, chart Subcaption, xAxisName, yAxisName,stagger and stagger lines, showValues, rotatevalues, placeValuesInside,showLimits,showDivLineValues,showshadow,adjustDiv,clickURL,clickURLOverridesplotlinks,setAdaptiveYmin,maxColWidth, ShowPrintMenuOption",

        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "300",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "subCaption":"Two Years Data Compared",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "plotFillAlpha": "80",
                    "theme": "fusion",
                    //"labeldisplay":"STAGGER",
                    //"staggerlines":2,
                    "showValues":1,
                    "rotatevalues":1,
                    "placeValuesInside":1,
                    "showlimits":1,//show yaxisvalues overrides this vlaues
                    "showDivLineValues":0,
                    "showshadow":1,
                    "adjustdiv":1,
                    "clickURL":"www.google.com",
                    "clickURLOverridesplotlinks":1,
                    "maxcolwidth":20,
                    "setAdaptiveYmin":1,
                    "showPrintMenuItem":1,
                    plotHighlightEffect:"fadeout|color=#ff0000, alpha=60"
/**
* plotHighlightEffect : String
This attribute lets you enable/disable the highlight effect, in the form of a fadeout, for the data plots corresponding to a legend item. When this attribute is enabled and the mouse pointer is hovered over a legend item label, plots belonging to the other data series fadeout, by reducing their opacity.

The fadeout effect can be customized by specifying the fadeout color and opacity using the color and alpha attributes. Eg. fadeout|color=#ff0000, alpha=60
*/
                    
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
                                "value": "10000",
                                "link":"https://www.google.com"
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
    "test_3": {
        "id": "test_3",
        "description": "Chart Caption cosmetic",
        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "300",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "captionAlignment":"right",
                    "captionfontcolor": "#00ff00",
                    //"captionfont":"Ariel",
                    // "captionFontsize":72,
                    // "captionOntop":0,
                    "aligncaptionwithcanvas":1,
                    "captionHorizontalPadding":20, 

                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "animation":0,
                    

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
    "test_4": {
        "id": "test_4",
        "description": "Chart Axis Configuration Attributes",
        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "500",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "transposeaxis":1,
                    "showxaxisline":"1",
                    "xaxisposition":"top",
                    "yaxisposition":"right",
                    "xaxislinecolor":"#00ff00",
                    "xaxislinethickness":10,
                    "showYaxis":0,
                    "yaxislinecolor":"#0000ff",
                    "yaxislinethickness":10,
                    //"showaxisvalues":0,
                    "yaxisvaluesstep":2,
                    "rotateYaxisName":1,
                    "yaxisnamewidth":100,
                    "yaxisminvalues":"2000",
                    "yaxismaxValues":"2000000000000",
                    "forceyaxisvaluedecimal":1,
                    "yaxisvaluedecimal":10,
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
    "test_5": {
        "id": "test_5",
        "description": "x and y name cosmetic",
        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "500",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "xaxisnameFont":"Ariel",
                    "yaxisnamefont":"Ariel",
                    "xaxisnamefontcolor":"#ff0000",
                    "yaxisnamefontcolor":"#00ff00",
                    "xaxisnamefontsize":"12",
                    "yaxisnamefontsize":"12",
                    "xaxisnamefontbold":1,
                    "xaxisnamefontitalic":1,
                    "yaxisnamefontbold":1,
                    "yaxisnamefontitalic":1,
                    "xaxisnamebgcolor":"#dddddd",
                    "yaxisnamebgcolor":"#dddddd",
                    "xaxisnamebordercolor":"#000000",
                    "yaxisnamebordercolor":"#000000",
                    "xaxisnamealpha":"80",
                    "yaxisnamealpha":"70",
                    "xAxisNameBorderAlpha":60,
                    "yAxisNameBorderAlpha":60,
                    "xAxisNameBorderPadding":5,
                    "yAxisNameBorderPadding":5,
                    "xAxisNameBorderRadius":5,
                    "yAxisNameBorderRadius":5,
                    "xAxisNameBorderThickness":2,
                    "yAxisNameBorderthickness":5,
                    "xAxisNameBorderDashed":1,
                    "yAxisNameBorderDashed":1,
                    "xAxisNameBorderDashLen":2,
                    "xAxisNameBorderDashGap":4,
                    "yAxisNameBorderDashLen":3,
                    "yAxisNameBorderDashGap":3,



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
    "test_6": {
        "id": "test_6",
        "description": "chart and canvas cosmetic and padding and margin",
        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "500",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "showborder":1,
                    "bordercolor":"#ff00ff",
                    "borderthickness":10,
                    "borderalpha":80,
                    //"bgcolor":"#3770ff",
                    // "bgAlpha":85,
                    // "bgratio":"40,60",
                    // "bgangle":"45",
                    // "bgcolor":"#3770ff,#ffffff",
                    "bgImage":"jpg.jpg",
                    bgImageAlpha : 100,
                    bgImageDisplayMode :"fit" ,
                    bgImageVAlign :"middle",
                    bgImageHAlign : "middle",
                    //bgImageScale : ,
                    canvasBgColor : "#dddddd",
                    canvasBgAlpha : "5",
                    //canvasBgRatio : "",
                    // canvasBgAngle : ,
                    // canvasBorderColor : ,
                    canvasBorderThickness : 3 ,
                    canvasBorderAlpha : 0 ,
                    showVLineLabelBorder : 1 ,
                    rotateVLineLabels : 1 ,
                    logoURL : "jpg.jpg" ,
                    logoLeftMargin : 10 ,
                    logoTopMargin : 10 ,
                    logoPosition : "TL",
                    logoAlpha : 10 ,
                    logoScale : 30 ,
                    logoLink :  "https://www.google.com",
                    captionPadding :  10,
                    xAxisNamePadding :  10,
                    yAxisNamePadding :  10,
                    yAxisValuesPadding : 5,
                    labelPadding :  15,
                    valuePadding :  2,
                    plotSpacePercent : 25,
                    plotPaddingPercent : 5,
                    canvasPadding :  20,
                    // canvasLeftPadding :  ,  
                    // canvasRightPadding :  ,  
                    // canvasTopPadding :  ,  
                    // canvasBottomPadding :  ,  
                    // chartLeftMargin :  ,
                    // chartRightMargin :  ,
                    // chartTopMargin :  ,
                    // chartBottomMargin :  ,
                    legendPadding :  20,
                    canvasLeftMargin : 5,
                    canvasRightMargin : 10,
                    // canvasTopMargin :  ,
                    // canvasBottomMargin :  ,


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
    "test_7": {
        "id": "test_7",
        "description": "Dataplot Cosmetics",
        "options": {
            "type": "mscolumn2d",
            "width": "500",
            "height": "500",
            "dataFormat": "json",
            "dataSource" : {
                "chart": {
                    "caption": "Comparison of Quarterly Revenue",
                    "xAxisname": "Quarter",
                    "yAxisName": "Revenues (In USD)",
                    "numberPrefix": "$",
                    "showborder":1,
                    "bordercolor":"#ff00ff",
                    "borderthickness":5,
                    useRoundEdges :  1,
                    showPlotBorder :  1,
                    plotBorderColor : "#3770ff",
                    plotBorderThickness : 5,
                    plotBorderAlpha : 70,
                    plotBorderDashed :  1,
                    plotBorderDashLen : 5,
                    plotBorderDashGap : 3,
                    plotFillAngle : 30,
                    plotFillRatio : "40,60",
                    plotFillAlpha : 50,
                    plotGradientColor :  "#3770ff,#ffffff",
                    usePlotGradientColor :  0,
                    minPlotHeightForValue : 50,
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
    
};