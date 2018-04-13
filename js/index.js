AOS.init({
  disable: 'mobile'
});
const bannerPrincipal = $('.banner-principal__imagem');

$(document).scroll( e => {
  let scrollPos = $(window).scrollTop();
  $(bannerPrincipal).css('transform', `translateY(${scrollPos/4}px)`);
})