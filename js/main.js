$('#select-all').click(function () {
  const checkboxes = $('input[type="checkbox"]');
  $.map( checkboxes, function( check ) {
    check.checked = true;
  });

  $('#drop-options .dropdown-icon').removeClass('fas fa-check text-blue');
  $(this).children('.dropdown-icon').addClass('fas fa-check text-blue');
});

$('#unselect-all').click(function () {
  const checkboxes = $('input[type="checkbox"]');
  $.map(checkboxes, function (check) {
    check.checked = false;
  });

  $('#drop-options .dropdown-icon').removeClass('fas fa-check text-blue');
  $(this).children('.dropdown-icon').addClass('fas fa-check text-blue');

});

$('#step-1').click(function () {
  $('#email').removeClass('d-none').find('.form-control').focus();
  $(this).attr('disabled', true);
})

$('#step-2').click(function () {
   $('#url').removeClass('d-none').find('.form-control').focus();
   $(this).attr('disabled', true);
})

$('#step-3').click(function () {
  $('#message').removeClass('d-none').find('.form-control').focus();
  $(this).attr('disabled', true);
})

$('.openbtn').mouseenter(function () {
  $('#mySidebar').css("width", "250px");
  $('.black-screen').removeClass('d-none');
  $('.fa-bars').addClass('d-none');
  // $('#main').css("marginLeft", "250px");
})

$('#mySidebar').mouseleave(function () {
  $('#mySidebar').css("width", "48");
  $('.fa-bars').removeClass('d-none');
  // $('#main').css("marginLeft", "0");
  $('.black-screen').addClass('d-none');
})

// $('#dropdownMenuSkills').mouseenter(function() {
//   $('.dropdown-menu').addClass('show');
// })

// $('#dropdownMenuSkills').mouseleave(function() {
//   $('.dropdown-menu').removeClass('show');
// })


