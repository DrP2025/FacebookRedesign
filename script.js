$('.search').on('click', function(){
    if ($('.search-input').hasClass('hidden')){
        $('.search-input').removeClass('hidden');
        $('.search-input').addClass('visible');
        $('.search-input').focus();
    } else {
        $('.search-input').removeClass('visible');
        $('.search-input').addClass('hidden');
    }
});

$('.search-input').on('blur', function(){
  if ($('.search-input').val() == ""){
    $('.search-input').removeClass('visible');
    $('.search-input').addClass('hidden');
  }
})

$('.activities-list > li > a > i').on('click', function(){
  if ($(this).hasClass('selected')){
      return;
  } else {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
      $('.show').addClass('hidden-icon');
      $('.show').removeClass('show');
      $(this).parent().next().removeClass('hidden-icon');
      $(this).parent().next().addClass('show');
  }
})

$('.status-div a').on('click', function(){
  if ($(this).hasClass('status-selected')){
      return;
  } else {
      $('.status-selected').removeClass('status-selected');
      $(this).addClass('status-selected');
  }
})

// $('.status-box').on('click', function(){
//     $('.status-box').placeholder('')
// })
