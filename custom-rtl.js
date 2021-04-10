/*************************************
 * 

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/
/* ==================================
      Start NProgress
===================================== */


NProgress.start(); // start    
NProgress.set(0.1); // To set a progress percentage, call .set(n), where n is a number between 0..1
NProgress.inc(); // To increment the progress bar, just use .inc(). This increments it with a random amount. This will never get to 100%: use it for every image load (or similar).If you want to increment by a specific value, you can pass that as a parameter
NProgress.configure({
    ease: 'ease',
    speed: 1000
}); // Adjust animation settings using easing (a CSS easing string) and speed (in ms). (default: ease and 200)
NProgress.configure({
    trickleSpeed: 1000
}); //Adjust how often to trickle/increment, in ms.
NProgress.configure({
    showSpinner: true
}); //Turn off loading spinner by setting it to false. (default: true)
NProgress.configure({
    parent: 'body'
}); //specify this to change the parent container. (default: body)
NProgress.done(); // end


/* ==================================
Start SideNav
===================================== */
// SideNav Default Options
$(document).ready(function() {
    // SideNav Default Options
    $('.button-collapse , .button-collapse0').sideNav({
        edge: 'right', // Choose the horizontal origin
        hide: true, // Display overflay
    });
});


$(document).ready(function () {


    /* ==================================
    start loading 
    ===================================== */

    $('.fixed-menu .show').on('click', function () {
        $(this).parent('.fixed-menu').toggleClass('is-visible');
        if ($(this).parent('.fixed-menu').hasClass('is-visible')) {
            $(this).parent('.fixed-menu').animate({
                right: 0
            }, 500);
            $('body').animate({
                paddingleft: '350px'
            }, 50);
        } else {
            $(this).parent('.fixed-menu').animate({
                right: '-350px'
            }, 700);
            $('body').animate({
                paddingleft: 0
            }, 500);
        }
    });

    /* ==================================
    start datepicker 
    ===================================== */
    //$('.datepicker').pickadate({
    //      weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    //      showMonthsShort: true,

    //})

    /* ==================================
    Search
    ===================================== */

    $('.show-search').click(function () {
        $('.full-search').fadeIn(300);
        $('.full-search input').focus();
    });
    $('.full-search input').blur(function () {
        $('.full-search').fadeOut(300);
    });


    /* ==================================
    DataTables
    ===================================== */

    //$(document).ready(function () {
    //    $('#dtBasicExample').DataTable();
    //    $('.dataTables_length').addClass('bs-select');

    //});




    $('.color-menu .show').on('click', function () {

        $(this).parent('.color-menu').toggleClass('is-visible');

        if ($(this).parent('.color-menu').hasClass('is-visible')) {

            $(this).parent('.color-menu').animate({

                left: 0

            }, 500);

            $('body').animate({

                paddingleft: '80px'

            }, 50);
        } else {

            $(this).parent('.color-menu').animate({

                left: '-80px'

            }, 700);

            $('body').animate({

                paddingleft: 0

            }, 500);

        }
    });

    /////// Change Colors
    $('.switch-colors li').on('click', function () {
        $(':root').css('--maincolor', $(this).data('color'));
        $(':root').css('--mainbackground', $(this).data('background'));
    });


    /////// toggle
    //$('.toggle').click(function () {
    //    $('.toggle').toggleClass('active')
    //    $('body').toggleClass('night')
    //})



}); // jquery

// popovers initialization - on hover
//$('[data-toggle="popover-hover"]').popover({
//    html: true,
//    trigger: 'hover',
//    placement: 'bottom',
//    content: function () { return '<img src="' + $(this).data('img') + '" />'; }
//});


//$(document).ready(function () {
//    $('body').css('zoom', '75%'); /* Webkit browsers */
//    $('body').css('zoom', '0.8'); /* Other non-webkit browsers */
//    $('body').css('-moz-transform', scale(0.75, 0.75)); /* Moz-browsers */
//});

// Dark Mode Setup

$(document).ready(function () {

    const darkSwitch = document.getElementById('darkSwitch');
    window.addEventListener('load', () => {
        if (darkSwitch) {
            initTheme();
            darkSwitch.addEventListener('change', () => {
                resetTheme();
            });
        }
    });

    function initTheme() {
        const darkThemeSelected =
          localStorage.getItem('darkSwitch') !== null &&
          localStorage.getItem('darkSwitch') === 'dark';
        darkSwitch.checked = darkThemeSelected;
        darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
          document.body.removeAttribute('data-theme');
    }

    function resetTheme() {
        if (darkSwitch.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkSwitch', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.removeItem('darkSwitch');
        }
    }

}); // jquery


function themeToggle(){document.addEventListener("DOMContentLoaded",function(event){(function(theme=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",theme);var b=document.querySelector("[data-toggle-theme='"+theme.toString()+"']");if(b){b.classList.add(b.getAttribute("data-act-class"))}}})();if(document.querySelector("[data-toggle-theme]")){document.querySelector("[data-toggle-theme]").addEventListener("click",function(){if(document.documentElement.getAttribute("data-theme")==this.getAttribute("data-toggle-theme")){document.documentElement.removeAttribute("data-theme");localStorage.removeItem("theme")}else{document.documentElement.setAttribute("data-theme",this.getAttribute("data-toggle-theme"));localStorage.setItem("theme",document.documentElement.getAttribute("data-theme"))}this.classList.toggle(this.getAttribute("data-act-class"))})}})}function themeBtn(){document.addEventListener("DOMContentLoaded",function(event){(function(theme=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",theme);var b=document.querySelector("[data-set-theme='"+theme.toString()+"']");if(b){[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.classList.remove(el.getAttribute("data-act-class"))});b.classList.add(b.getAttribute("data-act-class"))}}else{var b=document.querySelector("[data-set-theme='']");if(b){b.classList.add(b.getAttribute("data-act-class"))}}})();[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme"));localStorage.setItem("theme",document.documentElement.getAttribute("data-theme"));[...document.querySelectorAll("[data-set-theme]")].forEach(el=>{el.classList.remove(el.getAttribute("data-act-class"))});el.classList.add(el.getAttribute("data-act-class"))})})})}function themeSelect(){document.addEventListener("DOMContentLoaded",function(event){(function(theme=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",theme);var optionToggler=document.querySelector("select[data-choose-theme] [value='"+theme.toString()+"']");if(optionToggler){optionToggler.selected=true}}})();if(document.querySelector("select[data-choose-theme]")){document.querySelector("select[data-choose-theme]").addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value);localStorage.setItem("theme",document.documentElement.getAttribute("data-theme"))})}})}if(typeof exports!="undefined"){module.exports={themeToggle:themeToggle,themeBtn:themeBtn,themeSelect:themeSelect}}else{themeToggle();themeBtn();themeSelect()}
