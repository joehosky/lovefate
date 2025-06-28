// 回到頂端 JS
if ($('.go_top').length) {
    // 點下按鈕後，會以動態效果讓捲軸捲到網頁最頂端，500為速度
    $(document).ready(function() {
        $(".go_top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
        });
    });
    // 目前的位置距離網頁頂端，大於350px就顯示按鈕，小於就隱藏
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 350){
            $(".go_top").fadeIn("fast");
        } else {
            $(".go_top").stop().fadeOut("fast");
        }
    });
}


// 導覽列沾黏置頂 jQuery
if ($('.navbarbox').length) {
    var hdHeight = $(".navbarbox").height(); // 先抓取表頭高度

    $(window).scroll(function() { //當螢幕捲動超過表頭高度，則在.navbarbox後面新增class名稱sticky，反之則否
        if ($(this).scrollTop() > hdHeight) {
            $(".navbarbox").addClass("sticky")
        } else {
            $(".navbarbox").removeClass("sticky")
        }
    });
}

//導覽列第一層 JQ
if ($('.navlist').length) {
    $('.navlist li').hover(function() {
        $('ul:eq(0)', this).stop(true, true).animate({
            height: 'show',
            opacity: 'show'
        }, 150);
    }, function() {
        $('ul:eq(0)', this).animate({
            height: 'hide',
            opacity: 'hide'
        }, 150);
    })
}

// 點擊漢堡圖，下滑出選單 JS
function hamburg(x) {
    x.classList.toggle('change');
    event.preventDefault();
    var list=document.getElementById('navbar_list');
    list.style.display = list.style.display == 'block' ? 'none' : 'block';
}

//購物車下拉說明 JQ
$(function() {
    //點擊主選單(.tb_item_box)，則子選單(.tb_item_subs)向上滑動隱藏
    $(".tb_item_box").click(function() {
        $(".tb_item_subs").slideUp();
        //移除在(.tb_item_box)的class屬性(open)
        $(".tb_item_box").removeClass("open");
        //如果點擊的子選單(.tb_item_subs)同層的ul(同層用 > 大於符號)是隱藏狀態，則向下滑出顯示
        if ($(">ul", this).css("display") == "none") {
            $(">ul", this).slideDown();
            //被點擊的元素新增一組class(open)
            $(this).addClass("open");
        }
    })
});

// 此段必加，判斷元素是否存在才會執行此程式
document.addEventListener('DOMContentLoaded', function(){
    // 首頁(最上方輪播大圖)
    var xx = document.getElementById('slider_cm');
    if (xx!=null) {
        new Splide('#slider_cm',{
            type: 'loop', //輪播循環
            autoplay: true,   //自動播放
            interval: 3000    //播放速度
        }).mount();
    }
});

// 密碼-眼睛開關 JS
var checkEye = document.getElementById('checkEye');
var inputPassword = document.getElementById('inputPW');
// 此段必加，判斷元素是否存在才會執行此程式
if (checkEye) {
    checkEye.addEventListener('click', function(e) {
        if (e.target.classList.contains('fa-eye-slash')) {
            //移除掉'閉眼fa-eye-slash'的class，換成'開眼fa-eye'的class
            e.target.classList.remove('fa-eye-slash');
            e.target.classList.add('fa-eye');
            //把input狀態改成 text 文字輸入(這樣就是看的到輸入內容)
            inputPassword.setAttribute('type', 'text');
        } else {
            //反之，把input狀態改成 password 密碼輸入(這樣就看不到輸入內容)
            inputPassword.setAttribute('type', 'password');
            //移除掉'開眼fa-eye'的class，換成'閉眼fa-eye-slash'的class
            e.target.classList.remove('fa-eye');
            e.target.classList.add('fa-eye-slash');
        }
    });
}

// 密碼2-眼睛開關 JS
var checkEye2 = document.getElementById('checkEye2');
var inputPassword2 = document.getElementById('inputPW2');
// 此段必加，判斷元素是否存在才會執行此程式
if (checkEye2) {
    checkEye2.addEventListener('click', function(e) {
         if (e.target.classList.contains('fa-eye-slash')) {
            //移除掉'閉眼fa-eye-slash'的class，換成'開眼fa-eye'的class
            e.target.classList.remove('fa-eye-slash');
            e.target.classList.add('fa-eye');
            //把input狀態改成 text 文字輸入(這樣就是看的到輸入內容)
            inputPassword2.setAttribute('type', 'text');
        } else {
            //反之，把input狀態改成 password 密碼輸入(這樣就看不到輸入內容)
            inputPassword2.setAttribute('type', 'password');
            //移除掉'開眼fa-eye'的class，換成'閉眼fa-eye-slash'的class
            e.target.classList.remove('fa-eye');
            e.target.classList.add('fa-eye-slash');
        }
    });
}

// 密碼3-眼睛開關 JS
var checkEye3 = document.getElementById('checkEye3');
var inputPassword3 = document.getElementById('inputPW3');
// 此段必加，判斷元素是否存在才會執行此程式
if (checkEye3) {
    checkEye3.addEventListener('click', function(e) {
         if (e.target.classList.contains('fa-eye-slash')) {
            //移除掉'閉眼fa-eye-slash'的class，換成'開眼fa-eye'的class
            e.target.classList.remove('fa-eye-slash');
            e.target.classList.add('fa-eye');
            //把input狀態改成 text 文字輸入(這樣就是看的到輸入內容)
            inputPassword3.setAttribute('type', 'text');
        } else {
            //反之，把input狀態改成 password 密碼輸入(這樣就看不到輸入內容)
            inputPassword3.setAttribute('type', 'password');
            //移除掉'開眼fa-eye'的class，換成'閉眼fa-eye-slash'的class
            e.target.classList.remove('fa-eye');
            e.target.classList.add('fa-eye-slash');
        }
    });
}

// 密碼4-眼睛開關 JS
var checkEye4 = document.getElementById('checkEye4');
var inputPassword4 = document.getElementById('inputPW4');
// 此段必加，判斷元素是否存在才會執行此程式
if (checkEye4) {
    checkEye4.addEventListener('click', function(e) {
         if (e.target.classList.contains('fa-eye-slash')) {
            //移除掉'閉眼fa-eye-slash'的class，換成'開眼fa-eye'的class
            e.target.classList.remove('fa-eye-slash');
            e.target.classList.add('fa-eye');
            //把input狀態改成 text 文字輸入(這樣就是看的到輸入內容)
            inputPassword4.setAttribute('type', 'text');
        } else {
            //反之，把input狀態改成 password 密碼輸入(這樣就看不到輸入內容)
            inputPassword4.setAttribute('type', 'password');
            //移除掉'開眼fa-eye'的class，換成'閉眼fa-eye-slash'的class
            e.target.classList.remove('fa-eye');
            e.target.classList.add('fa-eye-slash');
        }
    });
}