var lightmode; //lightmode = default

$(document).ready(function() { //JQuery code goes here// Load Components --------------------------------------------------------------------
    $("#preloader").delay(1500).fadeOut("slow");
    
    $(function(){ $("#navcontent").load("components/nav.html"); });
    $(function(){ $("#navcontent_links").load("../components/nav-links.html"); });
    $(function(){ $("#footer_links").load("components/socials.html"); });
    $(function(){ $("#footer_project_links").load("../components/socials.html"); });
    
    getDarkMode();
    setDarkmode();

    $("#confetti").click(function() { confetti.start(1000, 100); });
    
    function setDarkmode() {
        $(".darkmode").click(function() { //Darkmode
            blink();
            $("body").toggleClass("dark")
            getDarkMode();
            projectScrolled();
            sessionStorage.setItem("darkmode", $("body").hasClass("dark"));
            lightmode = $("body").hasClass("dark");
        });
    }

    function getDarkMode() {
        if ($("body").hasClass("dark")) {
            $("#logo").attr("src", "resources/logo-white.png");
            $("#sublogo").attr("src", "../resources/logo-black.png");
        } else {
            $("#logo").attr("src", "resources/logo-black.png");
            $("#sublogo").attr("src", "../resources/logo-white.png");
        }
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
            "Designer", 
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
            "Environmental Innovation",
            "Zero-Waste Practices",
        ];
        var lightColors = [
            "#E8E5EF",
            "#F6F4F4",
        ];
        var darkColors = [
            "#310A31",
            "#55365D",
            "#674C73",
            "#786188",
            "#9B8CB4"
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
        "Psst! Some cool stuff in progress at lindaicing.com/playground"
    ];

    $("#aboutMe>span").mouseover(function() {
        var selectedpun = Math.random()*punlist.length;
        $("#aboutMe>span").attr('data-content',punlist[Math.floor(selectedpun)]);
    });

    $("#currentYear").text(new Date().getFullYear()); // updates copyright with current year
})
