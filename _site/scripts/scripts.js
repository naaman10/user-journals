$(document).ready(function() {
  window.scrollTo(0, 0);
  $("#content").load('/ajax/about.html');
  $("#about").addClass('active');
});
$(".nav-item").on('click', function() {
  event.preventDefault();
  $(".nav-item.active").removeClass('active');
  var pageID = $( this ).attr('data-pageID');
  console.log('item click: ' + pageID)
  $("#content").load('/ajax/' + pageID +'.html',   function() {
    $( "#" + pageID ).addClass('active');
  });
});

// $(".navRight").on('click', function() {
//   var nextSlide = $('.nextslideData').text();
//   $(".card-body").load('/ajax/' + nextSlide +'.html',   function() {
//     window.scrollTo(0, 0);
//     $(".animateHere").addClass('animated flipInY');
//     $(".navLeft").removeClass('disabled');
//     $(".navLeft").addClass('animated fadeIn')
//     $(".navLeft").removeAttr('disabled');
//     $(".card").css('paddingTop', '25px');
//     var d = new Date();
//     var h = d.getHours();
//     var m = d.getMinutes();
//     var newHour = h + 1;
//     var newMin = m + 15;
//     $('.hour').text(h);
//     $('.minutes').text(m);
//     $('.futurehour').text(newHour);
//     $('.futureminutes').text(newMin);
//   });
// });
// $(".navLeft").on('click', function() {
//   var prevSlide = $('.prevslideData').text();
//   $(".card-body").load('/ajax/' + prevSlide + '.html', function (){
//     window.scrollTo(0, 0);
//     $(".animateHere").addClass('animated flipInY');
//     if (prevSlide === "intro") {
//       $(".navLeft").addClass('disabled');
//       $(".navLeft").prop('disabled');
//       $(".card").css('paddingTop', '150px');
//     }
//   });
// });
  jQuery.ajaxSetup({
    beforeSend: function() {
      $(".animateHere").css('display', 'none');
      $('#spinner').show();
    },
    complete: function(){
      $(".animateHere").css('display', 'block');
      $('#spinner').hide();

    },
    success: function() {}
  });
