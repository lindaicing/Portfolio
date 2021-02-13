var lightmode; //lightmode = default

$(document).ready(function() { //JQuery code goes here
    setDarkmode();
    $("#confetti").click(function() { confetti.start(1000, 100); });
    
    function setDarkmode() {
        lightmode = sessionStorage.getItem("darkmode");
        $(".darkmode").click(function() { //Darkmode
            lightmode = !lightmode;
            if (lightmode) {
                $("body").removeClass("dark")
                $("#logo").attr("src", "resources/logo-black.png");
                $("#sublogo").attr("src", "../resources/logo-black.png");
            } else {
                $("body").addClass("dark")
                $("#logo").attr("src", "resources/logo-white.png");
                $("#sublogo").attr("src", "../resources/logo-white.png");
            }
            projectScrolled();
            sessionStorage.setItem("darkmode", $("body").hasClass("dark"));
        });
    }

    $(window).scroll(function() { projectScrolled(); });

    function projectScrolled() {
        if ($(this).scrollTop() >= 300) {
            if (lightmode) $("#sublogo").attr("src", "../resources/logo-black.png");
            else $("#sublogo").attr("src", "../resources/logo-white.png");
        }
        if ($(this).scrollTop() < 300) $("#sublogo").attr("src", "../resources/logo-white.png");
    }

    // Title Switcher ----------------------------------------------------------------------

    var interval = setInterval(blink, 8000);
    function blink() {
        $("#personaltitle").delay(100).fadeOut("slow", function(){
            madlibSwitcheroo();        
            $(this).fadeIn("slow", function(){
                $(this).delay(100).fadeIn("slow", function(){});  
            });
        })
    }

    function madlibSwitcheroo() {
        var titleArray = [
            "Creative",
            "Experience Maker",
            "Frontend Designer", 
            "Visual Developer",
            "Website Coder",
            "Web Designer",
            "Coffee-Fueled Coder",
        ];
        var interestWords = [
            "advocating for",
            "interested in",
            "invested in",
            "fascinated by",
            "curious about",
            "who loves",
            "who supports",
        ];
        var interestsArray = [
            "Animal Welfare",
            "Biodesign and Biomimicry",
            "Combatting Climate Change",
            "Eco-Friendly Design",
            "Human-Centered Design",
            "Mental Health Awareness",
            "Sustainable Design",
            "Tech Innovation",
            "Zero-Waste Practices",
        ];
        var lightColors = [
            "rgb(99, 75, 102)",
            "rgb(121, 97, 127)",
            "rgb(142, 118, 152)",
            "rgb(164, 140, 177)",
            "rgb(185, 161, 202)",
            "rgb(203, 177, 222)",
        ];
        var darkColors = [
            "rgb(164, 140, 177)",
            "rgb(185, 161, 202)",
            "rgb(203, 177, 222)",
            "rgb(197, 178, 211)",
            "rgb(207, 191, 219)",
            "rgb(215, 202, 225)",
            "rgb(249, 206, 208)",
            "rgb(236, 115, 115)",
        ];
        var r1 = Math.random()*titleArray.length;
        var r2 = Math.random()*lightColors.length;
        var r3 = Math.random()*interestsArray.length;
        var r4 = Math.random()*lightColors.length;
        var r5 = Math.random()*interestWords.length;

        $("#mytitle").html(titleArray[Math.floor(r1)])
        if (lightmode) $("#mytitle").css({"color":lightColors[Math.floor(r2)]});
            else $("#mytitle").css({"color":darkColors[Math.floor(r2)]})
        $("#myinterests").html(interestsArray[Math.floor(r3)]);
        if (lightmode) $("#myinterests").css({"color":lightColors[Math.floor(r4)]})
            else $("#myinterests").css({"color":darkColors[Math.floor(r4)]})
        $("#interestword").html(interestWords[Math.floor(r5)]);
    }
    
    // Pun Switcher ----------------------------------------------------------------------
    var punlist = [
        "What's an alien's favorite drink? E-Tea",
        "Funny boxing jokes have good PUNCHlines",
        "Statisticians in love go on a DATA",
        "When coders hear a funny joke, they GIGA",
        "A well-cut pizza is pepperoNEAT 🍕",
        "It's very pumpKIND of you to drop by 🎃",
        "Drawing livestock requires good PIGments",
        "Programmers are good at swimming because they can FLOAT",
        "Psst! Some cool stuff in progress at lindaicing.com/playground.html"
    ];

    $("#aboutMe>span").mouseover(function() {
        var selectedpun = Math.random()*punlist.length;
        $("#aboutMe>span").attr('data-content',punlist[Math.floor(selectedpun)]);
    });

    // Load Components --------------------------------------------------------------------
    $(function(){ $("#navcontent").load("components/nav.html"); });
})
