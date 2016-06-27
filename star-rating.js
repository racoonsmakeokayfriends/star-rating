$(document).ready(function() {
  
  var NUM_ICONS = 5;
  $('body').on('click','.rating_type_btn', function() {
    $('#rating').removeClass();
    $('#rating').addClass($(this).attr('value'));    
  });
  
  
  $('body').on('click','#rating i', function() {
    var val = parseInt($(this).attr('val'));
    // should make all icons beffore this one and this one checked=true
    // and make make all future icons checked=false
    for (var i=0; i<=val; i++) {
      $('#rating i[val="' + i.toString() + '"]').attr('full','yes');
    }
    
    for (var i=val+1; i<NUM_ICONS; i++) {
      $('#rating i[val="' + i.toString() + '"]').attr('full','no');
    }
  });
  // $('.rating_type_btn').click(function() {
  //   $('#rating').removeClass();
  //   console.log($('this'))
  //   $('#rating').addClass($('this').prop('val'));
  // });
  /*
  var full_class='fa-star';
  var empty_class='fa-star-o';
  var curr_rating = 0;
  $('.rating i').hover(function() {
    var index = $(this).index();
    var $par = $(this).parent();
    for (var i=0; i<=index+1; i++) {
      $par.children('i:nth-child('+i.toString()+')').removeClass(empty_class);
      $par.children('i:nth-child('+i.toString()+')').addClass(full_class);      
    }
    for (var i=index+2; i<=$par.children('i').length; i++) {
      $par.children('i:nth-child('+i.toString()+')').addClass(empty_class);
      $par.children('i:nth-child('+i.toString()+')').removeClass(full_class);      
    }
  });
  
  $(document).on('mouseleave','.rating',function() {
    for (var i=1; i<curr_rating; i++) {
      $(this).children('i:nth-child('+i.toString()+')').addClass(full_class);
      $(this).children('i:nth-child('+i.toString()+')').removeClass(empty_class);      
    }
   for (var i=curr_rating+1; i<=$(this).children('i').length; i++) {
      $(this).children('i:nth-child('+i.toString()+')').addClass(empty_class);
      $(this).children('i:nth-child('+i.toString()+')').removeClass(full_class);      
    }
  })
  
  $(document).on('click','.rating i',function() {
    curr_rating = $(this).index() + 1;
  })


  $('button.rating_type_btn').click(function() {
    $('.rating i').removeClass(empty_class);
    $('.rating i').removeClass(full_class);
    empty_class = $(this).attr('empty');
    full_class = $(this).attr('full');
    $('.rating i').addClass(empty_class);
  });
  */
})


/*
  $('button.rating_type_btn').mouseenter(function() {
    $(this).children('i').toggleClass($(this).attr('empty'));
    $(this).children('i').toggleClass($(this).attr('full'));
  });
  $('button.rating_type_btn').mouseleave(function() {
    $(this).children('i').toggleClass($(this).attr('empty'));
    $(this).children('i').toggleClass($(this).attr('full'));
  });
*/