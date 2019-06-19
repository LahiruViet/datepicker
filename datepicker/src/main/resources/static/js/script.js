; (function () {
    'use strict';


$(document).ready(function () {

$.fn.datepicker.defaults.autoclose = "true";

            $.fn.datepicker.dates['en'] = {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear",
                format: "dd-mm-yyyy",
                titleFormat: "MM yyyy",
                weekStart: 0
            };

            $('.datepicker').datepicker({
                 autoclose: true,
                 endDate: new Date().toLocaleDateString(),
                 format: 'dd-mm-yyyy',
                 language: 'en'
             }).on('changeDate', function(e) {
                  $('.datepicker').datepicker('hide');
             });
        });



})();

/*
$('.datepicker').datepicker({
    autoclose: true
    })
    .on('click', function(e) {
        console.log('date changed');
        $('.datepicker').datepicker('hide');
    });*/
