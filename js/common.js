$(document).ready(function () {
  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function(e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });


  setInterval( function() {
    var endDate  = new Date(2018, 3, 1, 16, 00, 0, 0);
    var endDate  = endDate.getTime();
    var currentDate = Date.now();
    var sec      = (endDate - currentDate) / 1000;
    var min       = sec / 60;
    var hou    = min / 60;

    var days    = Math.floor(hou / 24);
    var hours   = Math.floor(hou % 24);
    var minutes = Math.floor(min % 60);
    var seconds = Math.floor(sec % 60);

    var realTime = days + ' | ' + ( hours < 10 ? '0' : '' ) + hours + ' | ' + ( minutes < 10 ? '0' : '' ) + minutes + ' | ' + ( seconds < 10 ? '0' : '' ) + seconds
    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);

  }, 1000);
});
