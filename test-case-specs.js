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
                    "maxcolwidth":5,
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
        "description": "x and y name cosmetic, Divisional Line and  Grid",
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
                    numDivLines : 3,
                    divLineColor : "#00ff00",
                    divLineThickness : "10",
                    divLineAlpha : 50,
                    divLineDashed : 1,
                    divLineDashLen : 10,
                    divLineDashGap : 3,
                    zeroPlaneColor : "#000000",
                    zeroPlaneThickness : 10,
                    zeroPlaneAlpha : 50,
                    showZeroPlaneValue :1,
                    showAlternateHGridColor : 1,
                    alternateHGridColor : "00ffff",
                    alternateHGridAlpha : 60,


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
                    plotSpacePercent : 45,
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
        "description": "Dataplot Cosmetics, Hover effect and font cosmetics of catagories",
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
                    "borderColor":"#ff00ff",
                    "borderthickness":5,
                    "useRoundEdges" :  1,
                    "showPlotBorder" :  1,
                    "plotBorderColor": "#3770ff",
                    "plotBorderThickness" : 5,
                    "plotBorderAlpha" : "70",
                    "plotBorderDashed" :  1,
                    "plotBorderDashLen" : 5,
                    "plotBorderDashGap": 3,
                    "plotFillAngle" : 30,
                    "plotFillRatio": "60",
                    "plotFillAlpha": "50",
                    "plotGradientColor" : "#ffffff",
                    "usePlotGradientColor" :  1,
                    "minPlotHeightForValue" : 50,
                     showHoverEffect : 0,//not clear
                     plotHoverEffect : 1,
                     plotFillHoverColor : "#00ff0f",
                     plotFillHoverAlpha : "50",
                     columnHoverColor : "#377037",
                     columnHoverAlpha : "50",
                     plotHoverGradientColor : "#ff00ff,#000000",
                     plotHoverRatio :"40,60",
                     plotHoverAngle : "30",
                     plotBorderHoverColor : "#000000",
                     plotBorderHoverThickness : "5",
                     plotBorderHoverDashed : 1,
                     plotBorderHoverDashLen : "3",
                     plotBorderHoverDashGap : "4",

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
                    },
                    {
                         font : "Ariel",
                         fontColor : "#345123",
                         fontSize : "12",
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
                         data: [ {
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
    "test_8": {
        "id": "test_8",
        "description": "Data value Cosmetics and Y axis value Cosmetic",
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
                    valueFont : "Ariel",
                    valueFontColor : "#3777ff",
                    valueFontSize : "10",
                    valueFontItalic : 1,
                    valueBgColor :"#dddddd",
                    valueBorderColor : "#000000",
                    valueAlpha : "50",
                    valueFontAlpha : "60",
                    valueBgAlpha : "30",
                    valueBorderAlpha : 100,
                    valueBorderThickness : 2,
                    valueBorderPadding : 2,
                    valueBorderRadius : 5,
                    valueBorderDashed : 1,
                    valueBorderDashLen : 5,
                    valueBorderDashGap : 8,
                    textOutline : 1,
                    yAxisValueFont : "Ariel",
                    yAxisValueFontColor : "#00ff00",
                    yAxisValueFontSize : "10",
                    yAxisValueFontBold : 1,
                    yAxisValueFontItalic : 1,
                    yAxisValueBgColor : "#dddddd",
                    yAxisValueBorderColor : "#000000",
                    yAxisValueAlpha : 55,
                    yAxisValueBgAlpha : 30,
                    yAxisValueBorderAlpha : 60,
                    yAxisValueBorderPadding : 2,
                    yAxisValueBorderRadius : 1,
                    yAxisValueBorderThickness : 3,
                    yAxisValueBorderDashed : 1,
                    yAxisValueBorderDashLen : 1,
                    yAxisValueBorderDashGap : 1,
                    yAxisValueLink : "http://www.google.com",
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
    "test_9": {
        "id": "test_9",
        "description": "legend, NumberFormating and Base font",
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
                    //"numberPrefix": "$",
                    "showborder":1,
                    showLegend : 1,
                    legendItemFontBold : 1,
                    legendItemFont : "Ariel",
                    legendItemFontSize : "15",
                    legendItemFontColor : "#fff000,#ff00ff",
                    legendCaption : "Legend",
                    legendItemHoverFontColor :"#678912",
                    legendCaptionAlignment : "right",
                    legendCaptionFontBold : 1,
                    legendCaptionFont : "Ariel",
                    legendCaptionFontSize : "6",
                    legendCaptionFontColor : "#0fff00",
                    legendIconScale : "2",
                    legendItemHiddenColor : "#dddddd",
                    legendPosition :"Right",
                    legendBgColor : "#0665ff",
                    legendBgAlpha : 0,
                    legendBorderColor : "#000000",
                    legendBorderThickness : 5,
                    legendBorderAlpha : 100,
                    legendShadow : 1,
                    legendAllowDrag : 0,
                    legendScrollBgColor : "#ff00ff",//not applicable here
                    reverseLegend : 1,
                    interactiveLegend : 1,
                    legendNumColumns : 3,
                    minimiseWrappingInLegend :0,
                    drawCustomLegendIcon : 1,
                    legendIconBorderColor : "00ff00",
                    legendIconBgColor : "#ff0000",
                    legendIconAlpha : 40,
                    legendIconBgAlpha : 0,
                    legendIconSides : 5,
                    legendIconBorderThickness : 2,
                    legendIconStartAngle : "30",
                    alignLegendWithCanvas : 1,


                    formatNumber : 1,
                    formatNumberScale : 0,
                    //defaultNumberScale : ,
                    //numberScaleUnit : ,
                    //numberScaleValue : "thousand",
                    forceNumberScale : 1,
                    scaleRecursively :1,
                    maxScaleRecursion : "2000",
                    scaleSeparator : "_",
                    numberPrefix : "$",
                    //numberSuffix : "Only",
                    decimalSeparator : "*",
                    thousandSeparator : "..",
                    thousandSeparatorPosition :"2,3",
                    //inDecimalSeparator : "/", not working
                    //inThousandSeparator : "*",
                    decimals : 2,
                    forceDecimals : 1,

                    baseFont : "Ariel",
                    baseFontSize :  "14",
                    baseFontColor : "#000000",
                    outCnvBaseFont : "Ariel",
                    outCnvBaseFontSize : 10,
                    outCnvBaseFontColor : "#37733f",


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
    "test_10": {
        "id": "test_10",
        "description": "Data Label, crossline, tooltip, toolbar",
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
                    //Data Label 
                    labelFont : "Ariel",
                    labelFontColor : "#645093",
                    labelFontSize : "15",
                    labelFontBold : 1,
                    labelFontItalic : 1,
                    labelBgColor : "#34400f",
                    labelBorderColor : "#34f34f",
                    labelAlpha : 50,
                    labelBgAlpha : 50,
                    labelBorderAlpha : 50,
                    labelBorderPadding : 5,
                    labelBorderRadius : "2",
                    labelBorderThickness : "5",
                    labelBorderDashed : 1,
                    labelBorderDashLen : "5",
                    labelBorderDashGap : "3",
                    labelLink : "https://youtube.com",
                    
                    // //cross line
                    drawCrossLine : 1,
                    crossLineColor:"#ff00ff",
                    crossLineAlpha : 50,
                    crossLineAnimation :1,
                    crossLineAnimationDuration : 0.25,
                    plotColorinTooltip : 1,
                    tooltipGrayoutColor : "#f34090",
                    drawCrossLineOnTop : 1,
                    
                    // //tooltip
                    showToolTip : 1,
                    toolTipBgColor : "#dddddd",
                    toolTipColor : "#370ff9",
                    toolTipBorderColor : "#000000",
                    tooltipBorderAlpha : 50,
                    toolTipSepChar :"test" ,//not clear
                    seriesNameInToolTip : 1,
                    showToolTipShadow : 1,
                    plottooltext : "$name,$value",


                    // //toolbar not working here
                    toolbarPosition : "TR",
                    //toolbarX : "",
                    //toolbarY : "",
                    //toolbarHAlign : "right",
                    //toolbarVAlign : "bottom",
                    toolbarButtonColor : "#033790",
                    showToolBarButtonTooltext : 1,
                    toolbarButtonScale : "",//not clear

                    // //Export
                    exportEnabled : 1,
                    exportAction : "download",
                    //exportHandler : "",some script not clear
                    exportFormats : "PNG=Export as High Quality Image&#124;JPG&#124;PDF=Export as PDF File",
                   // exportMode : "", not clear
                    exportShowMenuItem : "1",
                    exportTargetWindow : "_blank",//similar to css target in <a> tag 
                    exportFileName : "mychart",
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
    "test_11": {
        "id": "test_11",
        "description": "Properties of Catagory object and Vline",
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
                    // //cross line
                    drawCrossLine : 0,
                    // crossLineColor:"#ff00ff",
                    // crossLineAlpha : 50,
                    // crossLineAnimation :1,
                    // crossLineAnimationDuration : 0.25,
                    // plotColorinTooltip : 1,
                    // tooltipGrayoutColor : "#f34090",
                    // drawCrossLineOnTop : 1,
                    rotateVlineLabels:1,
                
                 },
                "categories": [
                    {
                        "category": [
                            {
                                // //in catagory object, in catagories vline
                                label : "Question1",
                                showLabel : 1,
                                toolText : "tooltext of Qustion1",
                                font : "Ariel",
                                fontColor : "#377ff0",
                                fontSize : "8",
                                fontBold : 1,
                                fontItalic : 1,
                                bgColor : "#dddddd",
                                borderColor : "#000000",
                                alpha : 60,
                                bgAlpha : 40,
                                borderAlpha : 100,
                                borderPadding : 3,
                                borderRadius : 1,
                                borderThickness : 5,
                                borderDashed : 1,
                                borderDashLen : 5,
                                borderDashGap : 5
                            },
                            {
                                vLine : "Questions Vline",
                                showLabelBorder:1,
                                color : "#ff3678",
                                thickness : 6,
                                alpha : 70,
                                dashed : 1,
                                dashLen : 3,
                                dashGap : 2,
                                label : "tough Questions",
                                showLabelBorder : 1,
                                linePosition : 0.5,
                                labelPosition : 0.4,
                                labelHAlign : "right",
                                labelVAlign : "bottom",
                            },
                            {
                                "label": "Question2"
                            },
                            {
                                "label": "Question3"
                            },
                            {
                                "label": "Question4"
                            },
                            

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
    "test_12": {
        "id": "test_12",
        "description": " chart's trend Line Cosmetic and data attributes",
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
                    trendlineColor : "#ff9836",
                    trendlineThickness : "10",
                    trendlineAlpha : "50",
                    trendLineToolText : "trend line",
                    showTrendlinesOnTop : 1,
                    trendValueFont : "Ariel",
                    trendValueFontSize : 10,
                    trendValueFontBold : 1,
                    trendValueFontItalic : 0,
                    trendValueBgColor : "#376980",
                    trendValueBorderColor : "#000000",
                    trendValueAlpha : "50",
                    trendValueBgAlpha :"30",
                    trendValueBorderAlpha : "40",
                    trendValueBorderPadding : "10",
                    trendValueBorderRadius : 5,
                    trendValueBorderThickness : 2,
                    trendValueBorderDashed : 1,
                    trendValueBorderDashLen : 5,
                    trendValueBorderDashGap : 5,
                
                 },
                "categories": [
                    {
                        "category": [
                            {
                                label:"Question1"
                            
                            },
                           
                            {
                                "label": "Question2"
                            },
                            {
                                "label": "Question3"
                            },
                            {
                                "label": "Question4"
                            },
                            

                        ]
                    }
                ],
                "dataset": [
                    {
                        "seriesname": "Previous Year",
                        "data": [
                            {
                                alpha : "50",
                                color : "#ff00ff",
                                dashed : "0",
                                displayValue : "data1",
                                link : "https://google.com",
                                showValue : 1,
                                valueFontColor : "#f34534",
                                valueBgColor : "#dddddd",
                                valueBorderColor : "#000000",
                                value : -20050,
                                toolText : "Data $value",
                                
                                hoverColor : "#ff00ff",
                                hoverAlpha : "50",
                                hoverGradientColor : "#349809,#ff3902,#0f0f0f",
                                hoverRatio : "30,60,10",
                                hoverAngle :"40",
                                borderHoverColor : "#377909",
                                borderHoverAlpha : "50",
                                borderHoverThickness : 10,
                                borderHoverDashed : 1,
                                borderHoverDashLen : 5,
                                borderHoverDashGap : 5,
                        
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
                            },
                            
                           
                        ],
                       
                    }
                ],
                "trendlines" : [
                {
                    "line" :[{        
                        startValue : 10000,
                        endValue : 5000,
                        displayValue : "line",
                        color : "#3ff099",
                        isTrendZone : 1,
                        showOnTop : 1,
                        thickness : "5",
                        alpha : 20,
                        dashed : 1,
                        dashLen : 3,
                        dashGap : 4,
                        valueOnRight : 1,
                        toolText : "trendLine"
                    
                    }]
                }
                ]

            }
            
        }
    },
    "test_13": {
        "id": "test_13",
        "description": "Dataset Object",
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
                
                 },
                "categories": [
                    {
                        "category": [
                            {
                                label:"Question1"
                            
                            },
                           
                            {
                                "label": "Question2"
                            },
                            {
                                "label": "Question3"
                            },
                            {
                                "label": "Question4"
                            },
                            

                        ]
                    }
                ],
                "dataset": [
                    {
                        // dataset 
                        alpha : "50",
                        color : "#ff00ff",
                        dashed : "1",
                        includeInLegend : 1,
                       // ratio : 
                        
                        showValues : 1,
                        valueFontColor : "#ff00ff",
                        valueBgColor : "#dddddd",
                        valueBorderColor : "#000000",
                        visible :1,
                        hoverColor : "#00ffff",
                        hoverAlpha : "50",
                       // hoverGradientColor : "#d63545",
                        //hoverRatio : 
                        //hoverAngle : Number [+]
                        borderHoverColor : "#d96363",
                        borderHoverAlpha : "30",
                        borderHoverThickness :10,
                        borderHoverDashed : 1,
                        borderHoverDashLen : 5,
                        borderHoverDashGap : 3,
                //     

                        "seriesname": "Previous Year",
                        "data": [
                            {
                                
                                value : -20050,
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
                            },
                           
                        ],
                      
                    }
                ],

            }
            
        }
    },

    
};