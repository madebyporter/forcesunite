//= require_tree .
var js = js || {},
  body = document.getElementsByTagName('body')[0];

// Scripts
js.main = {
  init: function () {
    this.externalLinks();
    this.sal();
  },
  externalLinks: function() {
    function externalLinks() {
      var anchors = document.querySelectorAll( 'a' );
      for( var i = 0; i < anchors.length; i++ ) {
        if ( anchors[i].hostname !== window.location.hostname ) {
            anchors[i].setAttribute( 'target', '_blank' );
        }
      }
    }
    externalLinks();
  },
  sal: function(){
    sal();
  },
};
document.addEventListener('DOMContentLoaded', function(){
  js.main.init();
});