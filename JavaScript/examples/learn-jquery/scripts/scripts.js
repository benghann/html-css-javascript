// // Pure JavaScript
// document.getElementById('id');
// document.getElementsByClassName('className');

// // jQuery
// $("#id");
// $(".className");

$(document).ready(function(){

    // jQuery methods go here...
    $("p").mousedown(function(event) {
        console.log(event)
        // alert("You have clicked a paragraph");
    })

    $("button").click(function () {
        $("p").toggleClass("show");
    });

    // $("p").mouseenter(function(){
    //     alert("You entered p!");
    // });

    $("a").click(function() {
        alert("You have clicked a hyperlink");
    })

    function setBackgroundGrey() {
        $(this).css("background-color", "#cccccc");
    }

    function setBackgroundBlack() {
        $(this).css("background-color", "#000");
    }

    // $("p").hover(setBackgroundGrey, setBackgroundBlack);

    // var paragraphEvents = {
    //     mouseenter: function(){
    //         $(this).css("background-color", "lightgray");
    //     },
    //     mouseleave: function(){
    //         $(this).css("background-color", "lightblue");
    //     },
    //     click: function(){
    //         $(this).css("background-color", "yellow");
    //     }
    // };

    // $("p").on(paragraphEvents);

    // $("p").on(["click", "hover"], function(){
    //     $(this).css("background-color", "#cccccc");
    // });

    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });

    $("input").blur(function(){
        $(this).css("background-color", "#000");
    });
    
});