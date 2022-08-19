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
    text2: document.getElementsByClassName("navbar-icon")
};

$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    // if (scrollTop >= 40 && scrollTop <= 20) {
    if (scrollTop >= 40) {
        $('.navbar-icon').stop(scrollTop).animate({scale: "80%", margin: "0px"}, 0);
        $('.navbar').stop().animate({height: "80px"}, 0);
    } else {
        $('.navbar-icon').stop(scrollTop).animate({scale: "100%", margin: "15px"}, 0);
        $('.navbar').stop().animate({height: "80px"}, 0);
    }
});

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }