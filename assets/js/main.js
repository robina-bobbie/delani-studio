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
  // hide all portfolio labels
  $(".hover").css("opacity", "0");
  $(".hover1").css("opacity", "0");
  $(".hover2").css("opacity", "0");
  $(".hover3").css("opacity", "0");
  $(".hover4").css("opacity", "0");
  $(".hover5").css("opacity", "0");
  $(".hover6").css("opacity", "0");
  $(".hover7").css("opacity", "0");

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


  $("#work4").hover(
    () => {
      $("#work4").css("opacity", "0.35");
      $(".hover").css("opacity", "1");
    },
    () => {
      $("#work4").css("opacity", "1");
      $(".hover").css("opacity", "0");
    }
  );

  $("#work3").hover(
    () => {
      $("#work3").css("opacity", "0.35");
      $(".hover1").css("opacity", "1");
    },
    () => {
      $("#work3").css("opacity", "1");
      $(".hover1").css("opacity", "0");
    }
  );

  $("#work2").hover(
    () => {
      $("#work2").css("opacity", "0.35");
      $(".hover2").css("opacity", "1");
    },
    () => {
      $("#work2").css("opacity", "1");
      $(".hover2").css("opacity", "0");
    }
  );

  $("#work1").hover(
    () => {
      $("#work1").css("opacity", "0.35");
      $(".hover3").css("opacity", "1");
    },
    () => {
      $("#work1").css("opacity", "1");
      $(".hover3").css("opacity", "0");
    }
  );

  $("#work5").hover(
    () => {
      $("#work5").css("opacity", "0.35");
      $(".hover4").css("opacity", "1");
    },
    () => {
      $("#work5").css("opacity", "1");
      $(".hover4").css("opacity", "0");
    }
  );

  $("#work6").hover(
    () => {
      $("#work6").css("opacity", "0.35");
      $(".hover5").css("opacity", "1");
    },
    () => {
      $("#work6").css("opacity", "1");
      $(".hover5").css("opacity", "0");
    }
  );

  $("#work7").hover(
    () => {
      $("#work7").css("opacity", "0.35");
      $(".hover6").css("opacity", "1");
    },
    () => {
      $("#work7").css("opacity", "1");
      $(".hover6").css("opacity", "0");
    }
  );

  $("#work8").hover(
    () => {
      $("#work8").css("opacity", "0.35");
      $(".hover7").css("opacity", "1");
    },
    () => {
      $("#work8").css("opacity", "1");
      $(".hover7").css("opacity", "0");
    }
  );

  // submit
  $("#contactForm").submit(function (event) {
    var nameValue = $("#name").val();
    var emailValue = $("#email").val();
    var messageValue = $("#message").val();

    if (nameValue == "" || emailValue == "" || messageValue == "") {
      alert("Please enter all the information");
    } else {
      // clear form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // alert
      alert(nameValue + ", we have received your message. Thank you for reaching out to us. We will get back to you within 2 business days.");
    }

    // prevent default action
    event.preventDefault();
  });

});