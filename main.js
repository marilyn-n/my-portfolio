console.log('im here');

$('#select-all').click(function () {
  const checkboxes = $('input[type="checkbox"]');
  $.map( checkboxes, function( check ) {
    check.checked = true;
  });

  $('#drop-options .dropdown-icon').removeClass('fas fa-check text-blue');
  $(this).children('.dropdown-icon').addClass('fas fa-check text-blue');

// const dropdownIcon = document.querySelector('#drop-options .dropdown-icon');
// dropdownIcon.classList.remove('fas', 'fa-check', 'text-blue');

// this.children.classList.add('fas', 'fa-check', 'text-blue');
// console.log(dropdownIcon);
});

$('#unselect-all').click(function () {
  const checkboxes = $('input[type="checkbox"]');
  $.map(checkboxes, function (check) {
    check.checked = false;
  });

  $('#drop-options .dropdown-icon').removeClass('fas fa-check text-blue');
  $(this).children('.dropdown-icon').addClass('fas fa-check text-blue');

});

$('.gallery-image').click(function () {
  $('.gallery--gallery-bg').removeClass('d-none');
})

$('.gallery--close').click(function () {
  $('.gallery--gallery-bg').addClass('d-none');
})



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


