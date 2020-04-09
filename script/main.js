$(document).ready(function () {

  var scrollLeft = $('.left-icon');
  var scrollRight = $('.right-icon');
  var logo = $('.logo');
  var logoLen = 1;
  var active = $('.item-active');

  console.log('Immagine attiva: ' + logoLen +'.jpg');

  // Scorrimento a sinistra
  scrollLeft.click(function () {
    active = $('.item-active');

    // Doppio controllo, su contatore immagini e su classe first
    if ( logoLen > 1 && !active.hasClass('item-first') ){
      logoLen -- ;
      console.log('Immagine attiva: ' + logoLen +'.jpg');    
      logo.fadeOut(500,function(){
        logo.attr('src','img/' + logoLen + '.jpg')
        logo.fadeIn(500)
      })
      active.prev().addClass('item-active');
      active.last().removeClass('item-active');
    }
  })

    // Scorrimento a destra
    scrollRight.click(function () { 
    active = $('.item-active');

    // Doppio controllo, su contatore e su classe last
    if ( logoLen < 4 && !active.hasClass('item-last') ){
      logoLen ++ ;
      console.log('Immagine attiva: ' + logoLen +'.jpg');
      logo.fadeOut(500,function(){
        logo.attr('src','img/' + logoLen + '.jpg')
        logo.fadeIn(500)
      })
      
      active.next().addClass('item-active');
      active.first().removeClass('item-active');
    }
  })


  






  

});