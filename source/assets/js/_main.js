/**
 * Cribbed from css-tricks. Makes links to in document elements smoothscroll there
 * @see http://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
function _smoothScrollNav(customOffset) {
    var offset = (!!parseInt(customOffset, 10)) ? parseInt(customOffset, 10) : 0;
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top + offset)
        }, 1000);
        return false;
      }
    }
  });
}


$(function() {
    _smoothScrollNav(-59);
});
