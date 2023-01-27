$("body").on("change keyup paste", ".up_2", function (e) {
    if (0.001 > $(this).val() != "") {
        $(this).val(0.001);
    }
    if (1000 < $(this).val() != "") {
        $(this).val(1000);
    }
    if ($(this).val().length > 0) {
        document.getElementById("up_2").style.borderColor = "#30aa82";
    } else if ($(this).val().length == 0) {
        document.getElementById("up_2").style.borderColor = "#ff0000";
    }
});