// JAVASCRIPT EN JQUERY
//barnav
$(document).ready(function () {
  $(this).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 100) {
      $(".navbar").css("background", "#778899");
    } else {
      $(".navbar").css("background", "");
    }
  });
});
////////////////////////////////////////////////////////////
// burger
function toggleMenu() {
  //fonction
  $(".burger").on("click", function () {
    // au click ma fonction s'active
    $(".navbar").toggleClass("show-nav"); // et m'affiche le menu
  });
}
toggleMenu();
////////////////////////////////////////////////////////////
// form
$("#formContact").on("submit", valid_f);
function valid_f(e) {
  let myRegex = /^[a-zA-Z]+$/;
  let myRegexNumb = /^[.0-9 ]+$/;
  let myRegexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if ($("#nom").val() === "") {    
    $("#error_name").html("Votre nom");
    $("#error_name").css("color", "red");
    $("#nom").css("border", "1px solid red");
    e.preventDefault();
  } else if (!myRegex.test($("#nom").val())) {
    $("#error_name").html("vérifier les caractères");
    $("#error_name").css("color", "red");
    $("#nom").css("border", "1px solid red");
    e.preventDefault();
  } else {
    $("#nom").css("border", "1px solid green");
  }

  if ($("#prenom").val() === "") {
    $("#error_first_name").html("Votre Prénom");
    $("#error_first_name").css("color", "red");
    $("#prenom").css("border", "1px solid red");
    e.preventDefault();
  } else if (!myRegex.test(prenom.val())) {
    $("#error_first_name").html("vérifier les caractères");
    $("#error_first_name").css("color", "red");
    $("#first_name").css("border", "1px solid red");
    e.preventDefault();
  } else {
    $("#first_name").css("border", "1px solid green");
  }

  if ($("#tel").val() === "") {
    $("#error_tel").html("vérifier Votre tel");
    $("#error_tel").css("color", "red");
    $("#tel").css("border", "1px solid red");
    e.preventDefault();
  } else if (!myRegexNumb.test(telephone.val())) {
    $("#error_tel").html("vérifier les caractères");
    $("#error_tel").css("color", "red");
    $("#tel").css("border", "1px solid red");
    e.preventDefault();
  } else {
    $("#error_tel").css("color", "red");
    $("#tel").css("border", "1px solid green");
  }

  if ($("#email").val() === "") {
    $("#error_e_mail").html("vérifier Votre e-mail");
    $("#email").css("border", "1px solid red");
    $("#error_e_mail").css("color", "red");
    e.preventDefault();
  } else if (!myRegexMail.test(e_mail.val())) {
    $("#error_e_mail").html("e-mail non valide");
    $("#error_e_mail").css("color", "red");
    $("#e_mail").css("border", "1px solid red");
    e.preventDefault();
  } else {
    $("#error_e_mail").css("color", "green");
    $("#email").css("border", "1px solid green");
  }
}
