var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
var dates = [[1,2], [4,5]] // Tayla, Jules
var pros = ["tayla", "jules"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    var pro = $("input[name='pro']:checked").val();
    if (date.getDay() == 0)
        return [false];
    if (dates[pros.indexOf(pro)].includes(date.getDay()) == false) {
        return [false];
    }
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $("#cc").on("mouseenter", function(){
        $("#cc").addClass("showInput");
    });

    $("#cc").on("mouseout", function(){
        $("#cc").removeClass("showInput");
    });

    $("#dateTimeInput").on("mouseenter", function(){
        $("#dateTimeInput").addClass("showInput");
    });

    $("#dateTimeInput").on("mouseout", function(){
        $("#dateTimeInput").removeClass("showInput");
    });

    $("#name").on("mouseenter", function(){
        $("#name").addClass("showInput");
    });

    $("#name").on("mouseout", function(){
        $("#name").removeClass("showInput");
    });

    $("#email").on("mouseenter", function(){
        $("#email").addClass("showInput");
    });

    $("#email").on("mouseout", function(){
        $("#email").removeClass("showInput");
    });

    $("#telephone").on("mouseenter", function(){
        $("#telephone").addClass("showInput");
    });

    $("#telephone").on("mouseout", function(){
        $("#telephone").removeClass("showInput");
    });
    

    $("#telephone").on("change", function(){
        if (!validatePhone("telephone")){
            alert("Wrong format for telephone, enter digits within brackets");
            $("#telephone").val("(xxxxxxxxxx)");
            $("#telephone").addClass("error");
        }
        else {
            $("#telephone").removeClass("error");
        }
    });

    $("#cc").on("change", function(){
        if (!validateCC("cc")){
            alert("Wrong format for credit card, enter 4 groups of 4 digits");
            $("#cc").val("xxxx xxxx xxxx xxxx");
            $("#cc").addClass("error");
        }
        else {
            $("#cc").removeClass("error");
        }
    });

    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            minDate: new Date(),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );

});

function validatePhone(phone) {
    var p = document.getElementById(phone);
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(p.value)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCC(cc) {
    var c = document.getElementById(cc);
    var filter = /^[0-9]{4}\s{1}[0-9]{4}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    if (filter.test(c.value)) {
        return true;
    }
    else {
        return false;
    }
}
