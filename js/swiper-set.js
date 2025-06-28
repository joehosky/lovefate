// 相簿輪播 JS
// 下層輪播控制
var swiper = new Swiper(".down_swiper", {
    loop: false,  //圖片循環，默認為不循環 false，如果要循環則為 true
    spaceBetween: 5, //圖片間距
    slidesPerView: 4, //圖片一次顯示4張
    freeMode: true, //自由卷動
    watchSlidesProgress: true, //觀看輪播進度
    //出現左右箭頭
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// 上層輪播控制
var swiper2 = new Swiper(".up_swiper", {
    loop: false,  //圖片循環，默認為不循環 false，如果要循環則為 true
    spaceBetween: 0, //圖片間距
    effect: 'fade', //圖片切換效果，默認為"slide"(一般)，还可设置为"fade"(淡入),"cube"方塊,"coverflow"(3D),"flip"(3D翻轉),"cards"(卡片)
    //出現左右箭頭
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});