//= require_tree .

var js = js || {},
  body = document.getElementsByTagName('body')[0];

// Scripts
js.main = {
  init: function () {
    this.externalLinks();
    this.menu();
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
  menu: function() {
    var body = document.querySelector('body');
    var menuTrig = document.querySelector('#menuTrig');
    var menu = document.querySelector('#menu');
    var menuClose = document.querySelector('#menuClose');
    // var cd = document.querySelector('.content-calendar-current-date');

    menuTrig.onclick = function() {
      if (body.classList.contains('menu-active')){
        body.classList.add('menu-trans-out');
        body.classList.remove('menu-active');
        setTimeout(function(){
          body.classList.remove('menu-trans-out');
        }, 0);
      }
      else {
        body.classList.add('menu-trans');
        setTimeout(function(){
          body.classList.add('menu-active');
          body.classList.remove('menu-trans');
        }, 0);
        
      } 
    };
    menuClose.onclick = function() {
      body.classList.add('menu-trans-out');
      body.classList.remove('menu-active');
      setTimeout(function(){
        menu.classList.remove('active');
        body.classList.remove('menu-trans-out');
      }, 0);
    }
  }
};
document.addEventListener('DOMContentLoaded', function(){
  js.main.init();
});