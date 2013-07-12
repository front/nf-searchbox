(function($) {
  $.fn.nfSearchBox = function() {
    var self = this,
      open = false,
      leaving = false,
      txt = this.children('input[type="text"]'),
      sub = this.children('input[type="submit"]');
    sub.click(function (ev) {
      ev.preventDefault();
      if(open){
        if(txt.val().length > 0){
          leaving = true;
          self.submit();
        }
      }
      else {
        self.addClass('nf-sbopen');
        txt.focus();
        open = true;
      }
    });
    txt.focusout(function () {
      setTimeout(function () {
        if(open && !leaving) {
          self.removeClass('nf-sbopen');
          setTimeout(function () { open = false; }, 300);
        }
      },100);
    });
    self.addClass('nf-sbform nf-sbclose');
  };
}(jQuery));
