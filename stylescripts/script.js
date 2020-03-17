var lightmode; //lightmode = default

$(document).ready(function() { //JQuery code goes here
    $(".noProject").css({
        "display": "none"
    })

    //Darkmode
    $(".darkmode").click(function() {
        if (lightmode) {
            $("#home, #about, #home header, #about header, .projectContent a, .projectContent, footer, footer a, ooter a i").css({
                "background": "#DCDCDC",
                "color": "#1c1b1a"
            })
            $(".project").css({ "color": "#1c1b1a" })
            $(".fa-moon").css({ "display": "inline" })
            $(".fa-sun").css({ "display": "none" })
            $(".projectModule, nav li, .important, #profile").removeClass("projectSecDark")
            $(".logo").attr("src", "about/logo-black.png");
            $(".sublogo").attr("src", "../about/logo-black.png");
            $(".credits").css({ "color": "#fff" });
        } else {
            $("#home, #about, #home header, #about header, .projectContent a, .projectContent, footer, footer a, footer a i").css({
                "background": "#1c1b1a",
                "color": "#DCDCDC"
            })
            $(".project").css({ "color": "#DCDCDC" })
            $(".fa-moon").css({ "display": "none" })
            $(".fa-sun").css({ "display": "inline" })
            $(".projectModule, nav li, .important, #profile").addClass("projectSecDark")
            $(".logo").attr("src", "about/logo-white.png");
            $(".sublogo").attr("src", "../about/logo-white.png");
            $(".credits").css({ "color": "#545454" });
        }
        $(".important a, footer a").css({ "background": "none" })
        lightmode = !lightmode;
    });

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 300) {
                $(".project nav li").removeClass("projectSecDark")
                $(".sublogo").attr("src", "../about/logo-black.png");
            }
            if ($(this).scrollTop() < 300) {
                $(".project nav li").addClass("projectSecDark")
                $(".sublogo").attr("src", "../about/logo-white.png");
            }
        });
    });
})

window.onload = function() {
    document.getElementById("qwertea1").onclick = function(evt) {
        window.open("qwertea/qwertea1/index.html", "QwerTEA Cafe", 'menubar=1,height=800,width=400');
        return false;
    }
    document.getElementById("qwertea2").onclick = function(evt) {
        window.open("qwertea/qwertea2/index.html", "QwerTEA Cafe", 'menubar=1,height=800,width=400');
        return false;
    }
};