 $(function() {
  $( document ).tooltip({
    items: "[data-tooltip]",
    content: function() {
      var element = $( this );  
      var text = element.text();
      var url = element.attr('data-tooltip');
      return "<img class='map' alt='" + text +
        "' src='" + url + "'>";
    }
  });
});