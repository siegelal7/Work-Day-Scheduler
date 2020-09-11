$(document).ready(function () {
  var calenderEl = $(".container");
  var currentDay = $("#currentDay");
  //set header text to show current day
  var today = moment().format("dddd, MMMM, Do");
  currentDay.text(today);

  var hours = ["9", "10", "11", "12", "13", "14", "16", "16", "17"];
  var wholeList = JSON.parse(localStorage.getItem("todoList")) || [];

  for (var i = 0; i < hours.length; i++) {
    var rows = $("<div>");
    rows.addClass("row");
    var day = $("<div>");
    day.addClass("col-2 time-block hour");
    var dayText = "";
    if (hours[i] <= 11) {
      dayText = `${hours[i]}AM`;
      // day.text(`${hours[i]}AM`);
    } else if (hours[i] == 12) {
      dayText = `${hours[i]}PM`;
      // day.text(`${hours[i]}PM`);
    } else {
      dayText = `${hours[i] - 12}PM`;
      // day.text(`${hours[i] - 12}PM`);
    }
    day.text(dayText);
    // day.text(hours[i]);
    var todo = $("<textarea>");
    todo.addClass("col-9 row text-column");
    todo.attr("value", `${i}Text`);
    // console.log(dayText);
    // console.log(wholeList);
    var filteredTasks = wholeList.filter((task) => task.time === dayText);
    if (filteredTasks.length > 0) {
      console.log(filteredTasks);
      todo.val(filteredTasks[0].task);
    }

    if (hours[i] == moment().hour()) {
      todo.addClass("present");
    } else if (hours[i] < moment().hour()) {
      todo.addClass("past");
    } else {
      todo.addClass("future");
    }

    var btn = $("<button>");
    btn.attr("type", "submit");
    btn.attr("value", `${i}Btn`);
    btn.addClass("saveBtn col-1");
    var icon = $("<i>");
    icon.addClass("fas fa-save");
    btn.append(icon);
    btn.on("click", function () {
      var saveObject = {
        time: $(this).siblings("div").text(),
        task: $(this).siblings("textarea").val(),
      };
      wholeList.push(saveObject);
      localStorage.setItem("todoList", JSON.stringify(wholeList));
    });
    rows.append(day);
    rows.append(todo);
    rows.append(btn);
    calenderEl.append(rows);
  }
});

// $(".saveBtn").on("click", function () {
//   var saveObject = {
//     time: $(this).siblings("div").text(),
//     task: $(this).siblings("textarea").val(),
//   };
//   wholeList.push(saveObject);
//   localStorage.setItem("todoList", JSON.stringify(wholeList));
// });
// var test = moment().hour();
// console.log(test);
