var date =  moment().format("MM/DD/YYYY")
var time = moment().format("h:mm")
// var stamp = moment().format("h")
var stamp = 12
var hit = false

function addClick() {
    $(".save").on("click", function() {
        id = $(this).parent("div").attr("id")
        text = $(this).siblings(".col-sm-9").val()
        localStorage.setItem(id, text)
    }
)};

function addExisting () {
    times = [ "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"]
    $.each(times, function(i, list) {
        times[i] = localStorage.getItem(list)
        $("#" + list).children(".col-sm-9").val(times[i])
    })
addClick()
}

function addDraw() {
    times = [ "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"]
    for (var i = 0; i < times.length; i++) {
        var timesList = $("<div>");
        timesList.addClass("row");
        timesList.attr("id", times[i]);
        hour0 = times[i]
        hour1 = hour0.replace("a", "")
        hour2 = hour1.replace("p", "")
        timesList.addClass("past") 
        if (hit) { 
            timesList.addClass("future") 
            timesList.removeClass("past") 
        }
        if (hour2 == stamp) {  
            timesList.addClass("current") 
            timesList.removeClass("past")
            hit = true  
        }
        timesList.attr("hour", hour2);
            var timesStamp = $("<div>")
            timesStamp.addClass("col-sm-2")
            timesStamp.text(times[i])
            timesList.append(timesStamp)
            var timesText = $("<textarea>")
            timesText.addClass("col-sm-9")
            timesList.append(timesText)
            var timesBtn = $("<button>")
            timesBtn.addClass("col-sm-1 save")
            timesBtn.html("<img src='ico.png'>")
            timesList.append(timesBtn)
        $("#container").append(timesList);
    }
addExisting()
}

$(document).ready(function() { 
    addDraw()
    $("#time").text(date +" - "+ time)
})