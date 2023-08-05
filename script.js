$(document).ready(function () {

    // Single
    InitializeRoundSlider({
        "id": "round-slider-single",
        "radius": 100,
        "borderWidth": 3,
        "borderColor": "#000000",
        "handleSize": 30,
        "handleColor": "#337ab7"
    });

    updateRoundSliderValue("#round-slider-single", 0.25);

    // Double
    InitializeRoundSlider({
        "id": "round-slider-double-1",
        "radius": 80,
        "borderWidth": 1,
        "borderColor": "#000000",
        "handleSize": 30,
        "handleColor": "#5cb85c"
    });
    updateRoundSliderValue("#round-slider-double-1", 0);

    InitializeRoundSlider({
        "id": "round-slider-double-2",
        "radius": 80,
        "borderWidth": 1,
        "borderColor": "#000000",
        "handleSize": 30,
        "handleColor": "#f0ad4e"
    });
    updateRoundSliderValue("#round-slider-double-2", 0.5);

    // Parent-child parent
    InitializeRoundSlider({
        "id": "round-slider-parent",
        "radius": 100,
        "borderWidth": 2,
        "borderColor": "#000000",
        "handleSize": 30,
        "handleColor": "#5bc0de"
    });
    

    // Adding child
    $("#round-slider-parent > #result-handle").append('<div id="round-slider-child"></div>');
    $("#round-slider-parent > #result-handle").css("overflow", "visible");

    // Parent-child child
    InitializeRoundSlider({
        "id": "round-slider-child",
        "radius": 50,
        "borderWidth": 1,
        "borderColor": "#000000",
        "handleSize": 15,
        "handleColor": "#d9534f",
    });

    $("#round-slider-child").css("position", "absolute");
    $("#round-slider-child").css({
        "transform" : "translate(-50%,-50%)",
        "-ms-transform" : "translate(-50%,-50%)",
        "-webkit-transform" : "translate(-50%,-50%)",
        "-moz-transform" : "translate(-50%,-50%)",
        "-o-transform" : "translate(-50%,-50%)"
    });
    $("#round-slider-child").css("top", "50%");
    $("#round-slider-child").css("left", "50%");

    updateRoundSliderValue("#round-slider-parent", 0);
    updateRoundSliderValue("#round-slider-child", 0.75);


});

// Event after value changing 
function roundSliderOnValueChanged(target, value) {

    if (target.attr("id") === "round-slider-single") {
        $("#text-slider-value-single").text(value);
    }

    if (target.attr("id") === "round-slider-double-1") {
        $("#text-slider-value-double-1").text(value);
    }

    if (target.attr("id") === "round-slider-double-2") {
        $("#text-slider-value-double-2").text(value);
    }

    if (target.attr("id") === "round-slider-parent") {
        $("#text-slider-value-parent").text(value);
    }

    if (target.attr("id") === "round-slider-child") {
        $("#text-slider-value-child").text(value);
    }
}
