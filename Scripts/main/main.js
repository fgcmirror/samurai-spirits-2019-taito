 /*FlexSlider*/
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		smoothHeight: "true",
		slideshowSpeed: 6000
	});
})



/*Navi Tabs*/
$(function(){
    
    $('.tabbox:first').show();
    
    $('#naviTabBox li:first').addClass('active');

    $('#naviTabBox li').click(function() {
        $('#naviTabBox li').removeClass('active');
        $(this).addClass('active');
        $('.tabbox').hide();
        $($(this).find('a').attr('href')).fadeIn();
        return false;
    });
});


/*アコーディオン*/
$(function(){
	$('.accordion > dd').hide();
	$('.accordion > dt').click(function() {
		$(this).next().slideToggle(500);
		$(this).toggleClass('active');
	});
});

/*tenpo Tabs*/
/*$(function(){
    
    //$('.tenpoTabGroup:first').show();
    
    $('#tenpoTabBox li:first').addClass('active');

    $('#tenpoTabBox li').click(function() {
        $('#tenpoTabBox li').removeClass('active');
        $(this).addClass('active');
        $('.tenpoTabGroup').hide();
        $($(this).find('a').attr('href')).fadeIn();
        return false;
    });
});*/


/*SmoothScroll*/
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 300;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

/*go top*/
$(function() {
	var topBtn = $('#pageTop');	
	topBtn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});


/*menu for mobile*/
/*main menu*/
$(function(){
  $("#toggle").click(function(){
    $("#mainMenu").slideToggle();
    return false;
  });

 $("#mainMenu li a").click(function(){
    if($(window).width() < 481){
		$("#mainMenu").slideToggle();
	}
    return false;
  });

  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $("#mainMenu").show();
    } else {
      $("#mainMenu").hide();
    }
  });
});

/*shop region*/
$(function(){
  $("#mobileRegionToggle").click(function(){
    $("#regionMenu").slideToggle();
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $("#regionMenu").show();
    } else {
      $("#regionMenu").hide();
    }
  });
});

/*shop other*/
$(function(){
  $("#mobileOtherToggle").click(function(){
    $("#otherShopList").slideToggle();
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $("#otherShopList").show();
    } else {
      $("#otherShopList").hide();
    }
  });
});




/*fixed main menu */
$(function() {
    var nav = $('#menu');
        if (!nav.length)  
            return;
    //navの位置  
	var navTop = nav.offset().top;
	//スクロールするたびに実行
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		//スクロール位置がnavの位置より下だったらクラスfixedを追加
		if (winTop >= navTop) {
			nav.addClass('fixed')
		} else if (winTop <= navTop) {
			nav.removeClass('fixed')
		}
	});
});


/*japna map*/
$(function(){

	//初期段階にてダミー画像は透明にしておく
	$("#japanMap").css({
		"opacity": "0"
	});

	//areaのマウスオーバーにて画像を置換
	$("area").hover(function(){
		$("#japanMap").stop();
		var areaId = $(this).attr("id");
		$("#japanMap").attr("src", "/Content/images/" + areaId + ".png").fadeTo(200, 1);
		//areaのマウスーバーでli aをハイライト
		var menuID = '#nav-' + $(this).attr("id");
		$(menuID).addClass('hilight');
		},
	function(){
		$("#japanMap").stop();
		$("#japanMap").attr("src", "../../Content/images/null.png").css({
			"opacity": "0"
		});
		$('#regionMenu li').removeClass('hilight');
	});

	//li aのマウスオーバーにて画像を置換
	$("#regionMenu li a").hover(function(){
		$("#japanMap").stop();
		var listId = $(this).parent("li").attr("id");
		var changeListId = listId.replace(/nav-(\w.)/, "$1");
		$("#japanMap").attr("src", "/Content/images/" + changeListId + ".png").fadeTo(300, 1);
	},
	function(){
		$("#japanMap").stop();
		$("#japanMap").attr("src", "../../Content/images/null.png").css({
			"opacity": "0"
		});
	});

});


/*modal window*/
$(function(){
	$('.modalBtn').click(function(){
		wn = '.' + $(this).attr('modal-tgt');
		var mW = $(wn).find('.modalBody').innerWidth() / 2;
		var mH = $(wn).find('.modalBody').innerHeight() / 2;
		$(wn).find('.modalBody').css({'margin-left':-mW,'margin-top':-mH});
		$(wn).fadeIn(500);
	});
	$('.modalClose,.modalBody,.modalBG').click(function(){
		$(wn).fadeOut(500);
	});
});


/*gallery*/
/*
jQuery(function($) {
	$(".swipebox").swipebox({
		hideBarsOnMobile : false,
		closeBySwipe: false
	});
});
*/

/*Facebook*/
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=181475378860860";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


/*Twitter*/
window.twttr=(function(d,s,id){var t,js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})}(document,"script","twitter-wjs"));

/*Google+1*/
  window.___gcfg = {lang: 'ja'};
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();




