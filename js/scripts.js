// //get window height minus 50 pixels for the headers height
// var height = $(window).height() - 80%;

// $(".main").height(height);

// window.onresize = function(event) {
// var height = $(window).height() - 80%;

// $(".main").height(height);
// };

//Click event handler for nav-items
$('.nav-item').on('click',function(){

  //Remove any previous active classes
  $('.nav-item').removeClass('active');

  //Add active class to the clicked item
  $(this).addClass('active');
});