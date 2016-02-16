console.log("hello world");
$(function(){
  // $('#secretBox').css({'background-color': 'white'});
  // $('#row1').find('div').removeClass().addClass('boxType3');
  // $('#row4 div:last').css({'display': "none"});
  //
  // $('#row2 div:nth-child(3)').css({'background': "white"})
  // $('#row4 div:first').css({'background': "white"})
  //
  // $('#row2 div:lt(2)').css({'background' : 'none'})

  //$('.box:not(#secretBox)').css({'width':'2px'});
});


$(document).ready(function(){
  $('#container').on('click', function(event){
    console.log('x: ' + event.clientX + "y: " + event.clientY)
  })

  $('.boxType1').append("<a href='https://galvanize.com'>Go to Galvanize</a>");
  $('a').on('click', function(event){
    event.preventDefault();
    console.log('test');
    alert("You can never leave this page");
  })

  $('.box').on('click', function(event){
    if($(this).find('img').length === 0){
      console.log($(this))
      $(this).append('<img src="http://images.all-free-download.com/images/graphiclarge/cute_puppy_photo_picture_9_168841.jpg"/>').css({'tetext-align':'center'})
      $(this).find('img').css({'width':'50%', 'height':'50%'});

    }else{
      var image = $(this).find('img');
      image.toggle();
    }
  });

  $('#container').on('click', function(event){
    if(this === event.toElement){
      return $(this).css({'background-color':'limegreen'});
    }
    $(this).css({'background-color': 'black'});
    $(event.toElement).css({'background-color': 'white'})
  })
})
