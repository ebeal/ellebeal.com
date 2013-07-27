if (matchMedia('only screen and (min-width: 480px)').matches) {
  function goToByScroll(id){ $('html,body').animate({scrollTop: $(id).offset().top},'slow'); }
  $(document).ready(function(){ $('.banner a').click(function(){ goToByScroll($(this).attr('href')); return false; }); });
}
console.log("Hi there!");
