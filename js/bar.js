(function($) {
  function progress() {
	  $(".progress-bar .progress-bar-outer").each(function() {
      var t = $(this);
      if (!t.hasClass("already-animated")) {
        t.addClass("already-animated");
        t.animate({ width: t.attr("data-width") + "%" }, 2e3);
      }
    })
  }
  progress();
})(window.jQuery)