$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1500, 'swing');
  });
});

$("#portfolio-flters li").click ( function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');
    
    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);
    
    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');
    
    setTimeout(function() {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });