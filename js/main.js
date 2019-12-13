$(function () {
    //changer les tags
    var availableTags = [
        "Ballon de football",
        "Maillot",
        "Short",
        "Chaussette",
        "Chaussure de golf",
        "Club",
        "Ballon de basketball",
        "Ballons",
        "Maillot de football",
        "Maillot de basketball",
        "Bombe",
        "Drivers",
        "Balles de golf",
        "Maillot de bain",
        "Selle de cheval",
        "Etrivière mixte",
        "Lunnette de piscine",
        "Serviettes de bain",
        "Chaps de femmes",
        "Brosse"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });

    $(".menuresp").on("click", function () {
        if ($(".monul li a").css("display") == "none") {
            $(".monul li a").removeClass("togglemenu");
        } else {
            $(".monul li a").addClass("togglemenu");
        }

        if ($(".menuli").css("display") == "none") {
            $(".togglemenu").css("display") = "none";
        }
    })

    $(".menuli").on("click", function () {

        $(this).next().toggle();
    })
    if ($(window).width() < 992) {
        $(".menuli").removeAttr("href");
    }
    
    $(".logosearch").on("click", function () {
        $("#searchbar").slideToggle('slow')
    })
    if ($(".listli").css("display") == "none") {
        $(".mylist h4").on("click", function () {
            $("a").removeAttr("href");
            $(this).next().slideToggle("slow");
        })
        if ($(window).width() < 767) {
            $('.iconsocial i').addClass('fa-2x');
            $('.iconsocial i').removeClass('fa-3x');
        }
    }
});




