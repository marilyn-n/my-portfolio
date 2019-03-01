console.log('im here');

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


// const selectAll = document.getElementById('select-all');

// selectAll.addEventListener('click', function () {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   [...checkboxes].map(check => check.checked = true);
// })

// const unselectAll = document.getElementById('unselect-all');

// unselectAll.addEventListener('click', function() {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   [...checkboxes].map(check => check.checked = false);
// })


