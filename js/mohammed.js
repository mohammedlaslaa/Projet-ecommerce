$(function () {
    $(".buttonprom").on("click", function () {
        $(".list-productprom").css("display", "flex");
        $(".buttonprom").addClass("selectedbutton");
        $(".buttonbest").removeClass("selectedbutton");
        $(".buttonnews").removeClass("selectedbutton");
        $(".list-productbest").css("display", "none");
        $(".list-productnews").css("display", "none");
    });
    $(".buttonnews").on("click", function () {
        $(".list-productprom").css("display", "none");
        $(".buttonnews").addClass("selectedbutton");
        $(".buttonbest").removeClass("selectedbutton");
        $(".buttonprom").removeClass("selectedbutton");
        $(".list-productbest").css("display", "none");
        $(".list-productnews").css("display", "flex");
    });
    $(".buttonbest").on("click", function () {
        $(".buttonbest").addClass("selectedbutton");
        $(".buttonnews").removeClass("selectedbutton");
        $(".buttonprom").removeClass("selectedbutton");
        $(".list-productprom").css("display", "none");
        $(".list-productbest").css("display", "flex");
        $(".list-productnews").css("display", "none");
    })

    let value;

    $(".more").on("click", function () {
        let priceProd = parseFloat($(this).closest("td").next().children().text());
        $(this).prev(".numqty").val(parseInt($(this).prev(".numqty").val()) + 1);
        value = parseInt($(this).prev(".numqty").val());
        $(this).closest("td").next().next().children().text((value * (Math.floor(priceProd * 100) / 100)).toFixed(2))
        calculht()
        calculttc()
    })

    $(".more2").on("click", function () {
        let priceProd = parseFloat($(this).closest("td").next().children().text());
        $(this).next(".numqty").val(parseInt($(this).next(".numqty").val()) + 1);
        value = parseInt($(this).next(".numqty").val());
        $(this).closest("td").next().next().children().text((value * (Math.floor(priceProd * 100) / 100)).toFixed(2))
        calculht()
        calculttc()
    })



    $(".less").on("click", function () {
        let priceProd = parseFloat($(this).closest("td").next().children().text());
        $(this).next().next(".numqty").val(parseInt($(this).next().next(".numqty").val()) - 1);
        value = parseInt($(this).next().next(".numqty").val());
        console.log($(this).next().next(".numqty").val())
        $(this).closest("td").next().next().children().text((value * (Math.floor(priceProd * 100) / 100)).toFixed(2))
        if (parseInt($(this).next().next(".numqty").val()) == 0) {
            alert("Attention l'article sera supprimé")
            $(this).parents(".myrowproduct").fadeOut(1000);
        }
        calculht()
        calculttc()
    })

    $(".less2").on("click", function () {
        let priceProd = parseFloat($(this).closest("td").next().children().text());
        $(this).prev().prev(".numqty").val(parseInt($(this).prev().prev(".numqty").val()) - 1);
        value = parseInt($(this).prev().prev(".numqty").val());
        $(this).closest("td").next().next().children().text((value * (Math.floor(priceProd * 100) / 100)).toFixed(2))
        if (parseInt($(this).prev().prev(".numqty").val()) == 0) {
            alert("Attention l'article sera supprimé définitivement de votre panier")
            $(this).parents(".myrowproduct").fadeOut();
        }
        calculht()
        calculttc()
    })


    function calculttc() {
        let calc = $(".pricetotal");
        let totalPriceTtc = 0;
        for (let i = 0; i < calc.length; i++) {
            totalPriceTtc = totalPriceTtc + parseFloat(calc[i].textContent)
        }
        $(".pricetotalttc").text(totalPriceTtc.toFixed(2))
    }

    calculttc()

    function calculht() {
        let calc = $(".pricetotal");
        let totalPriceHt = 0;
        for (let i = 0; i < calc.length; i++) {
            totalPriceHt = totalPriceHt + ((parseFloat(calc[i].textContent) / 1.2))
        }
        $(".pricetotalht").text(totalPriceHt.toFixed(2))
    }

    calculht()

    $(".fa-arrow-circle-down").on("click", function () {
        $(this).closest("tr").next(".paymentlist").toggle(1300);
    })

    $(".numqty").on("change", function () {
        let priceProd = parseFloat($(this).closest("td").next().children().text());
        value = parseInt($(this).val());
        $(this).closest("td").next().next().children().text((value * priceProd).toFixed(2))
        if (parseInt($(this).val()) == 0) {
            alert("Attention l'article sera supprimé définitivement de votre panier")
            $(this).parents(".myrowproduct").fadeOut();
        }
        calculht()
        calculttc()
    })
})