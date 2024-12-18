//Menamppilkan navbar
const mobile = document.querySelector('.menu-toggle');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
})

//tutup navbar
mobilelink.addEventListener("click", function(){
    const menuBar = document.querySelector(".is-active");
    if (window.innerWidth<=768 && menuBar){
        mobile.classList.toggle("is-active");
        mobilelink.classList.toggle("active");
    }
})

//geser geser menu
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper") .animate({
        scrollLeft: "+=" + step + "px"
    });
});

//ketika di geser geser kategori
$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    })
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper") .animate({
        scrollLeft: "+=" + stepFilter + "px"
    })
});

