$(document).ready(function () {
  var calenderEl = $(".container");
  var currentDay = $("#currentDay");
  var today = moment().format("dddd, MMMM, Do");

  currentDay.text(today);
  //   var hours = [
  //     "9",
  //     "10",
  //     "11",
  //     "12",
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //     "5",
  //     "6",
  //     "7",
  //     "8",
  //     "9",
  //   ];
  //   var ul = $("<ul>");
  //   ul.addClass("list-group");
  //   calenderEl.append(ul);
  //   for (i = 0; i < hours.length; i++) {
  //     var li = $("li");
  //     li.addClass("list-group-item");
  //     li.text(hour[i]);
  //     ul.append(li);
  //   }
  //   console.log(moment().toString());
});
