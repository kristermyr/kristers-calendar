//  SUDOCODE 

// X1. I want to create most assignments to start the code
// X2. I want to add time blocks to the containers
// X3. I want the calendar to be color coded to show past, present, and future
// X4. I want to user to be able to click on the time block and enter an event
// X5. I want the user to be able to save the event to local storage
// X6. I want the user to be able to refresh the page and the events will still be there


var containerElement = $('.container');
var currentHour = moment().hour();
var timeDisplayEl = $('#currentDay');

function displayTime(){                                             //Calendar Time function, displays todays date on the top of the page
  var reformatDate = moment().format('dddd, MMMM D, YYYY');
  timeDisplayEl.text(reformatDate);
  }
  setInterval(displayTime, 
    
    1000);
  

$(document).ready(function() {          //Function to take the near values of the discription class and save it to local storage. 
  $('.saveBtn').on('click', function () {
  
  var textContent = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  
  localStorage.setItem(time, textContent);

})
})


$('#hour9 .description').val(localStorage.getItem('hour9'));              //takes information out of local storage 
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

$(".time-block").each(function () {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);    //Time that goes over each of the time blocks


  if (blockTime < currentHour) {       //Removes and adds the appropriate classes depending on what time it is. If currentHour is more than blockTime remove future, present. Add Past
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
  }
  else if (blockTime === currentHour) { //if blockTime is equal to currentHour, add present class, remove past and future
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
  }
  else {
      $(this).removeClass("present"); // if anything else add future class remove present and past
      $(this).removeClass("past");
      $(this).addClass("future");

  }
})
