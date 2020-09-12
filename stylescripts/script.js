var lightmode = true; //lightmode = default

$(document).ready(function() { //JQuery code goes here
    setDarkmode();

    function setDarkmode() {
        $(".darkmode").click(function() { //Darkmode
            $("body").toggleClass("dark")
            lightmode = !lightmode;
            if (lightmode) {
                $("#logo").attr("src", "resources/logo-black.png");
                $("#sublogo").attr("src", "../resources/logo-black.png");
            } else {
                $("#logo").attr("src", "resources/logo-white.png");
                $("#sublogo").attr("src", "../resources/logo-white.png");
            }
            if ($(this).scrollTop() < 300) {
                $("#sublogo").attr("src", "../resources/logo-white.png");
            }
        });
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
            if (lightmode) {
                $("#sublogo").attr("src", "../resources/logo-black.png");
            } else {
                $("#sublogo").attr("src", "../resources/logo-white.png");
            }
        }
        if ($(this).scrollTop() < 300) {
            $("#sublogo").attr("src", "../resources/logo-white.png");
        }
    });
})