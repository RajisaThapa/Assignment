google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Completed',     7],
    ['Incomplete',      2],
    ['Ongoing',  2],
    ['Bookmarked', 2],
  
  ]);

  var options = {
    title: 'My Courses Details',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}
