
var switchContainer = $('.switch-container');

switchContainer.on('click', function() {
  var body      = $('body'),
      onSwitch  = $('.switch'),
      container = $('.container'),
      auteur = $('.auteur'),
      a = $('a');

  
  $(this).toggleClass('on-indicator');
  onSwitch.toggleClass('switched-on');
  body.toggleClass('night day');
  container.toggleClass('night-mode-text');
  auteur.toggleClass('.auteur-night');
  a.toggleClass('a.night');

});