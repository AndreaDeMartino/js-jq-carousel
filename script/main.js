$(document).ready(function () {
  // General Variables
  var scrollLeft = $('.left-icon');
  var scrollRight = $('.right-icon');
  var logo = $('.logo');
  var logoCont = 1;
  var active = $('.item-active');

  // Variables for Items
  var items = $('.selector a');
  var itemOne = $('.item-first');
  var itemTwo = itemOne.next();
  var itemThree = itemTwo.next();
  var itemFour = $('.item-last');

  // Case for items click
  switch (items) {
    case itemOne.click(function () {
      logoCont = 1;
      items.removeClass('item-active');
      itemOne.addClass('item-active');
      changeImg(logoCont);
    }):
      break;
  
    case itemTwo.click(function () {
      logoCont = 2;
      items.removeClass('item-active');
      itemTwo.addClass('item-active');
      changeImg(logoCont);
    }):
      break;

    case itemThree.click(function () {
      logoCont = 3;
      items.removeClass('item-active');
      itemThree.addClass('item-active');
      changeImg(logoCont);
    }):
      break;

    case itemFour.click(function () {
      logoCont = 4;
      items.removeClass('item-active');
      itemFour.addClass('item-active');
      changeImg(logoCont);
    }):
      break;
  }

  // Left scroll with click
  scrollLeft.click(function () {
    active = $('.item-active');

    if ( logoCont > 1 && !active.hasClass('item-first') ){
      logoCont -- ;
      changeImg(logoCont);
      active.prev().addClass('item-active');
      active.last().removeClass('item-active');
    }
  })

  // Right scroll with click
  scrollRight.click(function () { 
    active = $('.item-active');

    if ( logoCont < 4 && !active.hasClass('item-last') ){
      logoCont ++ ;
      changeImg(logoCont);
      active.next().addClass('item-active');
      active.first().removeClass('item-active');
    }
  })

  // Scroll with Keyboard
  $(document).keydown( function(e){
    var key = (e.keyCode);
    
    // Right arrow
    if (key == 39) {
      active = $('.item-active');
      if ( logoCont < 4 && !active.hasClass('item-last') ){
        logoCont ++ ;
        changeImg(logoCont);
        active.next().addClass('item-active');
        active.first().removeClass('item-active');
        }
    }
      // Left arrow
      else if (key == 37) {
        active = $('.item-active');
        if ( logoCont > 1 && !active.hasClass('item-first') ){
          logoCont -- ;  
          changeImg(logoCont);
          active.prev().addClass('item-active');
          active.last().removeClass('item-active');
        }
      }
  })

  // Function for change img
  function changeImg (cont){
    logo.fadeOut(500,function(){
      logo.attr('src','img/' + cont + '.jpg')
      logo.fadeIn(500)
    })
  }

});