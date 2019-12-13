$(function () {
    var dialog, form,

        // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $("#name"),
        email = $("#email"),
        password = $("#password"),
        allFields = $([]).add(name).add(email).add(password),
        tips = $(".validateTips");

    function updateTips(t) {
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function () {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    }

    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            return true;
        }
    }



    function addUser() {
        var valid = true;
        allFields.removeClass("ui-state-error");

        valid = valid && checkLength(name, "username", 3, 16);
        valid = valid && checkLength(email, "email", 6, 80);
        valid = valid && checkLength(password, "password", 5, 16);



        if (valid) {
            $("#users tbody").append("<tr class='trmod trsup'>" +
                "<td class='namelist'>" + name.val() + "</td>" +
                "<td class='adresslist'>" + email.val() + "</td>" +
                "<td class='cplist'>" + password.val() + "</td>" +
                "</tr>");
            dialog.dialog("close");
            addolivbtnmod()
            addolivbtnsup()
            btnsupr()
            modifyolivfunc()

        }
        return valid;
    }

    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Create an account": addUser,
            Cancel: function () {
                dialog.dialog("close");
            }
        },
        close: function () {
            form[0].reset();
            allFields.removeClass("ui-state-error");
        }
    });

    form = dialog.find("form").on("submit", function (event) {
        event.preventDefault();
        addUser();
    });

    $("#create-user").button().on("click", function () {
        dialog.dialog("open");
    });

    function addolivbtnsup() {
        let trap = $('.trsup')
        trap.each(function (i) {

            if ($(trap[i]).children().last().children().hasClass('btnsup') == false) {

                $(this).append("<td><button class='btnsup red w-100'>Supprimer</button></td>")

            }
        })
    }




    //function modif
    function addolivbtnmod() {
        let trap = $('.trmod')
        trap.each(function (i) {
            if ($(trap[i]).children("td").last().hasClass('cplist') == true) {

                $(this).append("<td><button class='btnmodif black w-100'>Modifier</button></td>")

            }
        })
    }

    addolivbtnmod()

    addolivbtnsup()

    function modifyolivfunc() {
        $('.btnmodif').on('click', function () {
            $('.form-modif').show('slow');
            let outerthis = $(this);
            $(".form-modif").find('#namemod').val(outerthis.closest("tr").find(".namelist").text());
            $(".form-modif").find('#adressmod').val(outerthis.closest("tr").find(".adresslist").text());
            $(".form-modif").find('#cpmod').val(outerthis.closest("tr").find(".cplist").text());
            $(this).closest("tr").addClass("coucou")

        })

        $('.modifnew').on('click', function () {
            $(".pouette").find('.coucou>.namelist').text($(".form-modif").find('#namemod').val());
            $(".pouette").find('.coucou>.adresslist').text($(".form-modif").find('#adressmod').val());
            $(".pouette").find('.coucou>.cplist').text($(".form-modif").find('#cpmod').val());
            $('.form-modif').hide('slow');
            $(".pouette>tr").removeClass("coucou")
        })
    }
    modifyolivfunc()

    function btnsupr() {
        $(".btnsup").on("click", function () {

            $(this).closest(".trsup").remove();
        })
    }

    btnsupr()
});

//datepicker
$(function () {
    var dateFormat = "dd/mm/yy",
        from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
    $("#from").datepicker($.datepicker.regional["fr"])
});
