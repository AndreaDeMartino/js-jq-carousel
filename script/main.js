$(document).ready(function () {
  // General Variables
  var scrollLeft = $('.left-icon');
  var scrollRight = $('.right-icon');
  var logo = $('.logo');
  var logoCont = 1;
  var active = $('.item-active');

  //  Creation items and img
  var selector = $('.selector');
  var imgLen = parseInt(prompt('Inserisci numero img')); 

  for (var y = 1; y <= imgLen; y++){
    if (y == 1){
      selector.html('<a href="#" class= "item-first item-active'+ ' ' + y + '"' + '> <i class="fas fa-circle"></i></a>');
    } else if (y == imgLen){
      selector.append('<a href="#" class="item-last'+ ' ' + y + '"' + '><i class="fas fa-circle"></i></a>')
    } else {
      selector.append('<a class="'+ y + '"' + 'href="#"><i class="fas fa-circle"></i></a>');
    }
  }

  var items = $('.selector a');

  items.click( function (){
    for (x = 1; x <= imgLen; x++){
      var itemClick = $(this);
      if (itemClick.hasClass(x)){
        console.log('cliccato pallino n.', x);
        items.removeClass('item-active');
        itemClick.addClass('item-active');
        changeImg(x);
        logoCont = x;
      }
    }
    
  })

  // Left scroll with click
  scrollLeft.click(function () {
    active = $('.item-active');

    if ( logoCont > 1 && !active.hasClass('item-first') ){
      console.log('entrato sinistra click');
      logoCont -- ;
      changeImg(logoCont);
      active.prev().addClass('item-active');
      active.last().removeClass('item-active');
      console.log('Img selezionata',logoCont);
    }
  })

  // Right scroll with click
  scrollRight.click(function () { 
    active = $('.item-active');

    if ( logoCont < imgLen && !active.hasClass('item-last') ){
      console.log('entrato destra click');
      logoCont ++ ;
      changeImg(logoCont);
      active.next().addClass('item-active');
      active.first().removeClass('item-active');
      console.log('Img selezionata',logoCont);
      
    }
  })

  // Scroll with Keyboard
  $(document).keydown( function(e){
    var key = (e.keyCode);
    
    // Right arrow
    if (key == 39) {
      active = $('.item-active');
      if ( logoCont < imgLen && !active.hasClass('item-last') ){
        console.log('entrato aumento tastiera');
        logoCont ++ ;
        changeImg(logoCont);
        active.next().addClass('item-active');
        active.first().removeClass('item-active');
        console.log('Img selezionata',logoCont);
        
        }
    }
      // Left arrow
      else if (key == 37) {
        active = $('.item-active');
        if ( logoCont > 1 && !active.hasClass('item-first') ){
          console.log('entrato decremento tastiera');
          
          logoCont -- ;  
          changeImg(logoCont);
          active.prev().addClass('item-active');
          active.last().removeClass('item-active');
          console.log('Img selezionata',logoCont);
        }
      }
  })

  // Function for change img
  function changeImg (cont){
    logo.fadeOut(500,function(){
      logo.attr('src','https://i.pravatar.cc/400?img=' + cont)
      logo.fadeIn(500)
    })
  }

});