var chartsContainer = document.getElementById("charts-container");
let instances = [];

let testCaseIDs = Object.keys(chartSpec),
    testCount = testCaseIDs.length;

function render(currentIndex) {
    // console.log(currentIndex)
    let testID = testCaseIDs[currentIndex - 1];
    let chartType = chartSpec[testID]['options']['type'],
        width = chartSpec[testID]['options']['width'],
        height = chartSpec[testID]['options']['height'],
        dataSource = chartSpec[testID]['options']['dataSource'];
    var individualContainer = document.createElement("div");
    individualContainer.setAttribute("class", "individual_container");

    var chart_container = document.createElement("div");
    chart_container.setAttribute("id", "chart_container" + currentIndex);
    chart_container.setAttribute("class", "chart_containers");

    var chart_name = document.createElement("div");
    chart_name.innerHTML = (currentIndex) + '-' + chartType + '<br>' + 'test ID = ' + testID + '<br>' + 'Description = ' + chartSpec[testID]['description'];
    chart_name.setAttribute("class", "chart_name");

    individualContainer.appendChild(chart_name);
    individualContainer.appendChild(chart_container);
    chartsContainer.appendChild(individualContainer);
    (!dataSource.chart) && (dataSource.chart = {});
    dataSource.chart.animation = 0;
    instances[currentIndex] = new FusionCharts({
        type: chartType,
        renderAt: chart_container,
        width: width,
        height: height,
        dataSource: dataSource
    }).render();
}
for (currentIndex = testCount; currentIndex !== 0; currentIndex--) {
    render(currentIndex);
}