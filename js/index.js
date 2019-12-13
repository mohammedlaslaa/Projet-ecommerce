$(function () {
  $(".menuresp").on("click", function () {
    if ($(".monul li a").css("display") == "none") {
      $(".monul li a").removeClass("togglemenu");
    } else {
      $(".monul li a").addClass("togglemenu");
    }
  })

  $(".menuli").on("click", function () {

    $(this).next().toggle();
  })
  if ($(window).width() < 992) {
    $(".menuli").removeAttr("href");
  }
  if ($(".menuli").css("display") == "none") {
    $(".togglemenu").css("display") = "none";
  }


  $(".imagedetail").on("click", function () {
    $(".imgzoom").toggle()

  })
  $(".imgzoom").on("click", function () {
    $(".imgzoom").css("display", "none")
  })

  // si click sur couleur, alors afficher article ayant la meme id que couleur
  $(".bloc_gauche .cat").on("click", function () {
    let genre = $(this).attr("class");
    $(".bloc_centre figure").each(function () {
      if ($(this).hasClass(genre)) {
        $(this).show()
      } else {
        $(this).toggle()
      }
    })
  })


  $(".bloc_gauche .cat2").on("click", function () {
    let genre = $(this).attr("class");
    $(".bloc_centre figure").each(function () {
      if ($(this).hasClass(genre)) {
        $(this).show()
      } else {
        $(this).toggle()
      }
    })
  })

  $(".bloc_gauche .cat3").on("click", function () {
    let genre = $(this).attr("class");
    $(".bloc_centre figure").each(function () {
      if ($(this).hasClass(genre)) {
        $(this).show()
      } else {
        $(this).toggle()
      }
    })
  })



  // si click sur "hommes" montrer article avec id ou classe pareil que "hommes"
  $(".bloc_gauche img").on("click", function () {
    let color = $(this).attr("id");
    $(".bloc_centre figure").each(function () {
      if ($(this).hasClass(color)) {
        $(this).show()
      } else {
        $(this).toggle()
      }
    })
  })


  //Quand quantité = 0 alors l'article n'est plus disponible SINON il est disponible 

  // SI l'article est disponible alors afficher "OK" SINON afficher "Désolé, cet article a été victime de son succés."
//Affichage de ma div au hover
  $(".figure").on("mouseover", function () {
    $(this).children(".madiv").show()
  })

  $(".figure").on("mouseout", function () {
    $(this).children(".madiv").hide()
  })

})
