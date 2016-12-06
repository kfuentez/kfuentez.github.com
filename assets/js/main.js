// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Highlight the top and side nav as scrolling occurs
$('body').scrollspy({
    target: ''
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Show/Hide Element
$(document).ready(function() {
    $('.scenario-answer').on('click', function() {
      var scenario = $(this).data('id').substring(0, 2);
      $('#' + scenario + 'a').hide();
      $('#' + scenario + 'b').hide();
      $('#' + scenario + 'c').hide();
      $('#' + $(this).data('id')).toggle();
    });

    $('.pregnancy-interact').on('click', function() {
      $('#' + $(this).data('id')).toggle();
    });
});
