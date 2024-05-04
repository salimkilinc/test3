$(".menu a").on("mouseover", function () {
    $(this).css("color", "#116dff");
});

$(".menu a").on("mouseout", function () {
    $(this).css("color", "initial");
});

$("#current-page").on("mouseout", function () {
    $(this).css("color", "#116dff");
});





$(".dropdown").on("mouseover", function () {
    $(".dropdown-content").css("display", "block");
});

$(".dropdown").on("mouseout", function () {
    $(".dropdown-content").css("display", "none");
});

if ($(window).width() <= 800) {
    $(".dropdown").on("mouseover", function () {
        $(".dropdown-content").css("display", "none");
    });
    
    $(".dropdown").on("mouseout", function () {
        $(".dropdown-content").css("display", "none");
    });
};





$(".external-link").on("mouseover", function () {
    $(this).css("color", "black");
});

$(".external-link").on("mouseout", function () {
    $(this).css("color", "dimgrey");
});





$(".blue-button").on("mouseover", function () {
    $(this).css({
        "border-width": "0.3vh",
        "color": "black",
        "background-color": "transparent"
    });
});

$(".blue-button").on("mouseout", function () {
    $(this).css({
        "border-width": "0.2vh",
        "color": "white",
        "background-color": "#0050ff"
    });
});

$(".white-button").on("mouseover", function () {
    $(this).css({
        "border-color": "#0050ff",
        "color": "white",
        "background-color": "#0050ff"
    });
});

$(".white-button").on("mouseout", function () {
    $(this).css({
        "border-color": "black",
        "color": "black",
        "background-color": "white"
    });
});