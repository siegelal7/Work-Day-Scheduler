$(document).ready(function () {
  var calenderEl = $(".container");
  var currentDay = $("#currentDay");
  var today = moment().format("dddd, MMMM, Do");
  currentDay.text(today);
  var hours = ["9", "10", "11", "12", "13", "14", "16", "16", "17"];
  var wholeList = [];

  // var table = $("<table>");
  // table.addClass("table");
  // calenderEl.append(table);
  // var tbody = $("<tbody>");
  // tbody.addClass("time-block");
  // table.append(tbody);

  for (var i = 0; i < hours.length; i++) {
    var rows = $("<div>");
    rows.addClass("row");
    var day = $("<div>");
    day.addClass("col-2 time-block hour");

    if (hours[i] <= 11) {
      day.text(`${hours[i]}AM`);
    } else if (hours[i] == 12) {
      day.text(`${hours[i]}PM`);
    } else {
      day.text(`${hours[i] - 12}PM`);
    }
    // day.text(hours[i]);
    var todo = $("<textarea>");
    todo.addClass("col-9 row text-column");

    if (hours[i] == moment().hour()) {
      // console.log(hours[i] - 12);
      todo.addClass("present");
    } else if (hours[i] < moment().hour()) {
      todo.addClass("past");
    } else {
      todo.addClass("future");
    }

    var btn = $("<button>");
    btn.attr("type", "submit");
    btn.addClass("saveBtn col-1");
    var icon = $("<i>");
    icon.addClass("fas fa-save");
    btn.append(icon);

    rows.append(day);
    rows.append(todo);
    rows.append(btn);
    calenderEl.append(rows);
  }
});

// var test = moment().hour();
// if (test > 12) {
//   console.log(test - 12);
// } else {
//   console.log(test);
// }
