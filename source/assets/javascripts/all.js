//= require_tree .

var js = js || {},
  body = document.getElementsByTagName('body')[0];

// Scripts
js.main = {
  init: function () {
    this.externalLinks();
    this.menu();
    this.smallHeightCSS();
    this.isotopeGigs();
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
  isotopeGigs: function() {
    $grid = $('.feature-resources-gigs');
    $grid.each(function(index, el) {
      $(this).isotope({
        itemSelector : '.gig-card',
        transitionDuration: 0,
        // stamp: '.sticky',
        // layoutMode : 'masonry',
        // masonry: {
        //     gutter: 20,
        //     isFitWidth: true
        // },
        getSortData: {
          date: '[data-date]'
        },
        sortBy : 'date',
        sortAscending: false
      });
    });
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
  },
  smallHeightCSS: function() {
    var header = document.querySelector('.site-header');

    // Define our viewportWidth variable
    var viewportHeight;

    // Set/update the viewportWidth value
    var setViewportHeight = function () {
      viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    }

    // Log the viewport width into the console
    var logHeight = function () {
      if (viewportHeight < 350) {
        header.classList.add('short-viewport');
      } else if (viewportHeight < 650){
        header.classList.remove('short-viewport');
        header.classList.add('medium-viewport');
      } else {
        header.classList.remove('short-viewport');
        header.classList.remove('medium-viewport');
      }
    }

    // Set our initial width and log it
    setViewportHeight();
    logHeight();

    // On resize events, recalculate and log
    window.addEventListener('resize', function () {
      setViewportHeight();
      logHeight();
    }, false);
  }
};
document.addEventListener('DOMContentLoaded', function(){
  js.main.init();
});