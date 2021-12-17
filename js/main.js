
$('.owl-carousel').owlCarousel({
    item:3,
    loop:true,
    dots:true,
    margin:10,
});


/*Start off canvas menu and off-canvas-menu-shade*/
$(".menu-trigger").on('click', function(){
    $(".off-canvas-menu").addClass("show-off-canvas-menu")
    $(".off-canvas-menu-shade").addClass("active")
  });
  $(".menu-close,.off-canvas-menu-shade").on('click', function(){
    $(".off-canvas-menu").removeClass("show-off-canvas-menu")
    $(".off-canvas-menu-shade").removeClass("active")
  });
  /*End off canvas menu */
