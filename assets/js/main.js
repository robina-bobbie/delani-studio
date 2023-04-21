/**
* Animation on scroll
*/
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});

$(document).ready(() => {

  // toggle design
  $("#designImage").click(() => {
    $("#designImage").toggle();
    $("#designDescription").toggle();
  });
  $("#designDescription").click(() => {
    $("#designDescription").toggle();
    $("#designImage").toggle();
  });

  // toggle development
  $("#developmentImage").click(() => {
    $("#developmentImage").toggle();
    $("#developmentDescription").toggle();
  });
  $("#developmentDescription").click(() => {
    $("#developmentDescription").toggle();
    $("#developmentImage").toggle();
  });

  // toggle product
  $("#productImage").click(() => {
    $("#productImage").toggle();
    $("#productDescription").toggle();
  });
  $("#productDescription").click(() => {
    $("#productDescription").toggle();
    $("#productImage").toggle();
  });


});