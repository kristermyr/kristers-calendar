//  SUDOCODE 

// 1. I want to create most assignments to start the code
// 2. I want to add time blocks to the containers using jquery
// 3. I want the calendar to be color coded to show past, present, and future
// 4. I want to user to be able to click on the time block and enter an event
// 5. I want the user to be able to save the event to local storage
// 6. I want the user to be able to refresh the page and the events will still be there
// 7. I want the user to be able to clear the events from local storage


var currentDayElement = $('#currentDay');
var containerElement = $('.container');
var currentHour = moment().hour();
