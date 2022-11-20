//  SUDOCODE 

// 1. I want to create most assignments to start the code
// X2. I want to add time blocks to the containers
// 3. I want the calendar to be color coded to show past, present, and future
// X4. I want to user to be able to click on the time block and enter an event
// 5. I want the user to be able to save the event to local storage
// 6. I want the user to be able to refresh the page and the events will still be there
// 7. I want the user to be able to clear the events from local storage


//var currentDayElement = $('#currentDay');
var containerElement = $('.container');
var currentHour = moment().hour();
var timeDisplayEl = $('#currentDay');

function displayTime(){
  var reformatDate = dayjs().format('dddd, MMMM D, YYYY');
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
