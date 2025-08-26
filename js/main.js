
$('#fullpage').fullpage({
    //options here
    responsiveWidth: 1024,
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true, //좌우에 영역지정 메뉴
    navigationPosition: 'right',
    navigationTooltips: ['o’neul', 'Value', 'Menu', 'Room',],
    showActiveTooltip: true,
});
//mgnb
$(".mgnb_menu").click(function () {
    $(".mgnb_wrap").animate({ "right": "0" }, 500)
});
$(".mgnb_close").click(function () {
    $(".mgnb_wrap").animate({ "right": "-100%" }, 500)
});
//menu_list
const menu_list = new Swiper(".menu_list", {
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        574: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
        },

    }
});

const room_list = new Swiper(".room_list", {
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        574: {
            slidesPerView: 1,
        },
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

});
