$(document).ready(function () {
  var calenderEl = $(".container");
  var currentDay = $("#currentDay");
  //set header text to show current day
  var today = moment().format("dddd, MMMM, Do");
  currentDay.text(today);

  var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
  // set this variable equal to either the stored value or empty so that the calender blocks populate
  var wholeList = JSON.parse(localStorage.getItem("todoList")) || [];

  for (var i = 0; i < hours.length; i++) {
    var rows = $("<div>");
    rows.addClass("row");
    var day = $("<div>");
    day.addClass("col-2 time-block hour");
    var dayText = "";
    //assigning the AM or PM suffix
    if (hours[i] <= 11) {
      dayText = `${hours[i]}AM`;
    } else if (hours[i] == 12) {
      dayText = `${hours[i]}PM`;
    } else {
      dayText = `${hours[i] - 12}PM`;
    }
    day.text(dayText);
    //creating the text area of the todo list
    var todo = $("<textarea>");
    todo.addClass("col-9 row text-column");

    // tries to find if any values are stored at that time, if so it creates an array with the elements that match the time
    var filteredTasks = wholeList.filter((task) => task.time === dayText);
    if (filteredTasks.length > 0) {
      // console.log(filteredTasks);
      todo.val(filteredTasks[0].task);
    }
    //sets the class of the todo task based on the time decided by moment.js
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
    //had to have this event listener inside the loop in order for it to work
    btn.on("click", function () {
      var saveObject = {
        //finds the value of each of the sibling elements in the generated html-set them as values in object to push to array then push to localStorage
        time: $(this).siblings("div").text(),
        task: $(this).siblings("textarea").val(),
      };

      // for (var x =0; x <wholeList.length; x++){

      // }
      // found this function from a lot of googling here in this jsfiddle https://jsfiddle.net/rafaoliveira1337/nkcgwmex/ + playing around with results in console.log

      //this will push the saveObject to the array if and only if there is no object with that time value. the else function wish splice took forever to figure out
      if (
        wholeList.find((obj) => obj.time.includes(saveObject.time)) ===
        undefined
      ) {
        wholeList.push(saveObject);
      } else {
        //holy shit this worked.. found this function at https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property
        wholeList.splice(
          wholeList.findIndex((item) => item.time == saveObject.time),
          1
        );

        wholeList.push(saveObject);
      }

      localStorage.setItem("todoList", JSON.stringify(wholeList));
    });
    // console.log(wholeList);
    rows.append(day);
    rows.append(todo);
    rows.append(btn);
    calenderEl.append(rows);
  }
  // var result = wholeList.find((obj) => obj.time.includes("10AM"));
  // console.log(`${result}`);
});
