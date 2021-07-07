$(document).ready(function () {

    let aboutOffsetTop = $("#about").offset().top;

    $(window).scroll(function () {

        let wScroll = $(window).scrollTop();
        if (wScroll > aboutOffsetTop - 150) {

            $("#main-nav").css("backgroundColor", "white");
            $("#main-nav").removeClass("container");
            $("#main-nav a ").css("color", "black");
            $("#btnUp").fadeIn(500)



        }

        else {
            $("#main-nav").addClass("container");
            $("#main-nav").css("backgroundColor", "transparent")
            $("#main-nav a ").css("color", "white")
            $("#btnUp").fadeOut(500)
        }



    })

    $("#btnUp").click(function () {

        $("html , body").animate({ scrollTop: 0 }, 2500)
    })


    $("#main-nav a[href^='#']").click(function () {

        let aHref = $(this).attr("href");
        let sectionOffset = $(aHref).offset().top;

        $("html , body").animate({ scrollTop: sectionOffset }, 2500)


    })

    
    $("#slideBarToggle").click(function () {
        $("#colorBox").show(1000)
    })


    $("#slideBarToggle").click(function () {



        let colorBoxWidth = $("#colorBox").innerWidth();

        if ($("#slideBar").css("left") == "0px") {
            $("#slideBar").animate({ left: `-${colorBoxWidth}` }, (1000))

        }
        else {
            $("#slideBar").animate({ left: `0px` })
        }


        // $("#colorBox").toggle(2000)


    })

    let colorItem = $(".color-item");

    for (let i = 0; i < colorItem.length; i++) {
        let color1 = Math.round(Math.random() * 255);
        let color2 = Math.round(Math.random() * 255);
        let color3 = Math.round(Math.random() * 255);
        $(colorItem).eq(i).css("backgroundColor", `rgb(${color1} ,${color2},${color3})`)
    }


    $(colorItem).click(function () {

        let bgColor = $(this).css("backgroundColor");
        $("h1 ,h2, h3 ,h4, h5, h6, p ,span, .progress-bar ,.btn1,.btn2,.nav-pills li a, #Clients .client p,.parent i,.btn-outline-dark").css("color", bgColor)


    })



    $("#loding").fadeOut(1000, function () {

        $("body").css("overflow", "auto")
    });

    new WOW().init();


    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,

    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
           
        ]
    });



})



document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 0, 850, 3000);
 counter("count2", 0, 230, 2500);
 counter("count3", 8500, 9450, 3000);
 counter("count4", 0, 780, 3000);
});