/**
 * Created by jeremiebergel on 01/06/2017.
 */

/* CALENDAR*/

var btnCalendar = document.querySelector('button.open-calendar');
var calendar = document.querySelector('div.calendar');
console.log(btnCalendar);
btnCalendar.addEventListener('click', function () {
    calendar.classList.toggle('activate');
});