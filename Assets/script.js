//  SUDOCODE 

// X1. I want to create most assignments to start the code
// X2. I want to add time blocks to the containers
// 3. I want the calendar to be color coded to show past, present, and future
// X4. I want to user to be able to click on the time block and enter an event
// X5. I want the user to be able to save the event to local storage
// X6. I want the user to be able to refresh the page and the events will still be there

//var currentDayElement = $('#currentDay');
var containerElement = $('.container');
var currentHour = moment().hour();
var timeDisplayEl = $('#currentDay');

function displayTime(){
  var reformatDate = moment().format('dddd, MMMM D, YYYY');
  timeDisplayEl.text(reformatDate);
  }
  setInterval(displayTime, 
    
    1000);
  

$(document).ready(function() {
  $('.saveBtn').on('click', function () {
  
  var textContent = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  
  localStorage.setItem(time, textContent);

})
})


$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

$(".time-block").each(function () {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);


  if (blockTime < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
  }
  else if (blockTime === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
  }
  else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

  }
})
