$(document).ready(function () {
        // search-input
    $(".search-input").keyup(function () {
        var Companyvalue = $(this).val().toLowerCase();
        $(".add-popup .popup-box .item-continer-box .item-box li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(Companyvalue) > -1);
        });
    });
    // datepicke
    $(".date_picker").datepicker();

    // select2
    $(".select2").select2();

    // blur form

    var table = $(".dataTable").DataTable({ searching: false });

    $(".pop-up-close").click(function () {
        $(".add-popup").fadeOut();
    });

    $(".opne-po-up").click(function () {
        $(".add-popup").fadeIn();
    });

    
    $(".dataTable thead .min_lable").each(function () {
        const tdLable = $(this).text(),
            datatable = $(this).data("table");

        if ($(this).hasClass("locked") == true) {
            var icone = " <i class='fa fa-lock' aria-hidden='true'></i> ",
                requred_input = "disabled";
        } else {
            var icone = " <i class='fa fa-times delet_icone_parrent ' aria-hidden='true'></i> ",
                requred_input = "";
        }

        if ($(this).hasClass("show_lable") == true) {
            var checked_Attr = "checked";

            $(".item-box ul.last-one").append('<li class="list-item-controled " data-list="' + datatable + '">' + "<h6 class='title-lable'>" + tdLable + "</h6>" + icone + "</li>");
        } else {
            var checked_Attr = "";
        }

        $(".item-box.sucond-box ul").append(
            " <li>" +
                '<div class="pretty p-default">' +
                '<input id="' +
                datatable +
                '" type="checkbox" class="input-checked" ' +
                checked_Attr +
                " " +
                requred_input +
                "/>" +
                ' <div class="state p-primary p-svg">' +
                " <label> " +
                tdLable +
                "</label>" +
                " </div>" +
                "    </div>" +
                " </li>"
        );
    });

    $(".closeandsave").click(function () {
        $(".add-popup").fadeOut();

        if ($(".input-checked").attr("checked") == false) {
            console.log($(".input-checked").text());
        }
    });

    $(".input-checked").click(function () {
        const id_attr = $(this).attr("id");

        $("." + id_attr).toggleClass("show_lable").toggle();


        $(".list-item-controled[data-list='" + id_attr + "']").toggle();
    
    });

    $(".delet_icone_parrent").click(function () {
        
        const name_attr = $(this).parent().attr("data-list");
        
        $("#" + name_attr).click();
        
        $("."+name_attr).removeClass("show_lable").hide();
        
        $(this).parent(".list-item-controled").hide();
    });


});
