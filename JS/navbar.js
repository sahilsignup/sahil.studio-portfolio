const cursor = document.querySelector('.cursor');
	document.addEventListener('mousemove', e => {
		cursor.setAttribute("style", " top: "+(e.clientY -10)+"px; left: "+(e.clientX -10)+"px; ")
	});

	const cursor2 = document.querySelector('.cursor2');
	document.addEventListener('mousemove', e => {
		cursor2.setAttribute("style", " top: "+(e.clientY -10)+"px; left: "+(e.clientX -10)+"px; ")
	});

window.addEventListener('pageshow', function(event) {
  if (!event.persisted) {
  return;
  }
  var fader = document.getElementById('fader');
  fader.removeAttribute('class', 'fade-in');
  fader.setAttribute('class', 'fade-out');
  });

  const elts = {
    text1: document.getElementsByClassName("navbar"),
    text2: document.getElementsByClassName("navbar-icon"),
    text3: document.getElementsByClassName("navbar-heading")
};

$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    // if (scrollTop >= 40 && scrollTop <= 20) {
    if (scrollTop >= 40) {
        $('.navbar-icon').stop(scrollTop).animate({scale: "80%"}, 0).css({"margin-top": "0px"});
        $('.navbar-heading').stop(scrollTop).animate({opacity: "0%"}, 200).css({"pointer-events": "none"}, 200);
        $('.navbar').stop().animate({height: "80px"}, 0);
    } else {
        $('.navbar-icon').stop(scrollTop).animate({scale: "100%"}, 0).css({"margin-top": "15px"});
        $('.navbar-heading').stop(scrollTop).animate({opacity: "100%"}, 200).css({"pointer-events": "all"}, 200);
        $('.navbar').stop().animate({height: "80px"}, 0);
    }
});