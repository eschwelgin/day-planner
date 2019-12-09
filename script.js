function addClick() {
    $(".save").on("click", function() {
        id = $(this).parent("div").attr("id")
        text = $(this).siblings(".col-sm-10").val()
        localStorage.setItem(id, text)
    }
)};

function addExisting () {
    times = [ "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"]
    $.each(times, function(i, list) {
        times[i] = localStorage.getItem(list)
        $("#" + list).children(".col-sm-10").val(times[i])
    })
addClick()
}

function addDraw() {
    times = [ "9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"]
    for (var i = 0; i < times.length; i++) {
        var timesList = $("<div>");
        timesList.addClass("row");
        timesList.attr("id", times[i]);
            var timesStamp = $("<div>")
            timesStamp.addClass("col-sm-1")
            timesStamp.text(times[i])
            timesList.append(timesStamp)
            var timesText = $("<textarea>")
            timesText.addClass("col-sm-10")
            timesList.append(timesText)
            var timesBtn = $("<button>")
            timesBtn.addClass("col-sm-1 save")
            timesBtn.text("Save")
            timesList.append(timesBtn)
        $("#container").append(timesList);
    }
addExisting()
}

$(document).ready(function() { 
    addDraw()
})