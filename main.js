console.log('im here');

$('#select-all').click(function () {
  const checkboxes = $('input[type="checkbox"]');
  $.map( checkboxes, function( check ) {
    check.checked = true;
  });
})

$('#unselect-all').click(function () {
  const checkboxes = $('input[type="checkbox"]');
  $.map(checkboxes, function (check) {
    check.checked = false;
  })
})

$('.dropdown-item').click(function () {
  $(this).children().removeClass().addClass('fas fa-check text-primary');
  $(this).children().removeClass().addClass('fas fa-check text-primary');
  console.log($(this));
  
})



console.log();





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


