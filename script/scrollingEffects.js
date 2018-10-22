$(document).ready(function(){
  
  // Section scrolling
  $('#portafolio-anchor').on('click', function(e){
    e.preventDefault();
    $('#portafolio').animatescroll();
  });
  $('#experiencias-anchor').on('click', function(e){
    e.preventDefault();
    $('#eventos').animatescroll();
  });
  $('#contacto-anchor').on('click', function(e){
    e.preventDefault();
    $('#contacto').animatescroll();
  });
})