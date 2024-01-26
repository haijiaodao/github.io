$("button.run").on("click", function() {
  var el     = $('.x-menu');  
  var newone = el.clone(true);
  el.before(newone).remove();
});