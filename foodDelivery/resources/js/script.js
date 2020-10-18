
// IIFE -- Immediately Invoked Function Expression
$(document).ready(function() {

    let waypoints = $('.js--section-features').waypoint(function(direction) {
        // if user scroll down, the sticky nav will appear
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

});