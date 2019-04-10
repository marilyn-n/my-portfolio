const liNodes = [3, 5 ,90, 20, 5, 8];
const hoverNumber = 5;
const answer = liNodes.filter(num => num === hoverNumber );

// console.log(answer);

$('#items li').mouseover(function () {
  
  const hoverText = $(this).text();
  // console.log('***************');

  $('#li-container li').map(function() {
    
    if ($(this).text().indexOf(hoverText) != -1) {
        // console.log(hoverText+ ':' ,$(this).text() +' COLOR: Green');
        $(this).css('background-color', 'green');
    }  else {
      $(this).css('background-color', 'none');
      $(this).css('background-color', 'red');
      // console.log(hoverText+ ':' ,$(this).text() +' COLOR: Red');
    }
  });

});

