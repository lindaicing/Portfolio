var lightmode; //lightmode = default

$(document).ready(function() { //JQuery code goes here
    $(".noProject").css({
        "display": "none"
    })

    $(".darkmode").click(function() { //Darkmode
        if (lightmode) {
            $("#home, #about, #home header, #about header, .projectContent a, .projectContent, footer, footer a, footer a i").css({
                "background": "#DCDCDC",
                "color": "#1c1b1a"
            })
            $(".project").css({ "color": "#1c1b1a" })
            $(".fa-moon").css({ "display": "inline" })
            $(".fa-sun").css({ "display": "none" })
            $(".projectModule, nav li, .important, #profile, #profile2").removeClass("projectSecDark")
            $(".logo").attr("src", "resources/logo-black.png");
            $(".sublogo").attr("src", "../resources/logo-black.png");
            $(".graphics .sublogo").attr("src", "../../../resources/logo-black.png");
            $(".credits").css({ "color": "#fff" });
        } else {
            $("#home, #about, #home header, #about header, .projectContent a, .projectContent, footer, footer a, footer a i").css({
                "background": "#1c1b1a",
                "color": "#DCDCDC"
            })
            $(".project").css({ "color": "#DCDCDC" })
            $(".fa-moon").css({ "display": "none" })
            $(".fa-sun").css({ "display": "inline" })
            $(".projectModule, nav li, .important, #profile, #profile2").addClass("projectSecDark")
            $(".logo").attr("src", "resources/logo-white.png");
            $(".sublogo").attr("src", "../resources/logo-white.png");
            $(".graphics .sublogo").attr("src", "../../../resources/logo-white.png");
            $(".credits").css({ "color": "#545454" });
        }
        $(".important a, footer a, footer a i").css({ "background": "none" })
        lightmode = !lightmode;
        if ($(this).scrollTop() < 300) {
            $(".project nav li").addClass("projectSecDark")
            $(".sublogo").attr("src", "../resources/logo-white.png");
            $(".graphics .sublogo").attr("src", "../../../resources/logo-white.png");
        }
    });

    $(function() { //Nav color change
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 300) {
                $(".project nav li").removeClass("projectSecDark")
                $(".sublogo").attr("src", "../resources/logo-black.png");
                $(".graphics .sublogo").attr("src", "../../../resources/logo-black.png");
            }
            if ($(this).scrollTop() < 300) {
                $(".project nav li").addClass("projectSecDark")
                $(".sublogo").attr("src", "../resources/logo-white.png");
                $(".graphics .sublogo").attr("src", "../../../resources/logo-white.png");
            }
        });
    });
})