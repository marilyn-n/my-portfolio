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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


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

const openNav = () => {
  $('#mySidebar').css("width", "250px");
  $('#main').css("marginLeft", "250px");
}

const closeNav = () => {
  $('#mySidebar').css("width", "0");
  $('#main').css("marginLeft", "0");
}

// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }


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


