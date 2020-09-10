$(document).ready(function () {
  var calenderEl = $(".container");
  var currentDay = $("#currentDay");
  var today = moment().format("dddd, MMMM, Do");

  currentDay.text(today);
  var table = $("<table>");
  table.addClass("table time-block");
  calenderEl.append(table);
  var hours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ];
  var tbody = $("<tbody>");
  table.append(tbody);
  for (var i = 0; i < hours.length; i++) {
    var tr = $("<tr>");
    var th = $("<th>");
    th.attr("scope", "row");
    th.addClass("row");
    th.text(hours[i]);
    tbody.append(tr);
    tr.append(th);
  }
});
