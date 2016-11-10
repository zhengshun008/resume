var Swiper=require("./components/swiper/swiper-3.3.1.min");

var SwiperAnimate=require("./components/swiper/swiper.animate1.0.2.min");

var MySwiper=new Swiper ('.swiper-container', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
});

//加载符合commonjs规范的zeptojs文件
var $ = require('zepto-modules/zepto');

require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');

module.exports = $;
//请求iscroll.js文件
var IScroll=require("./components/iscroll/iscroll");

//开始是显示swiper,隐藏iscroll
$("#MyIsCroll").hide();
$("#Swiper").show();

//点击体验按钮后，显示iscroll,隐藏swiper;
$("#btn").tap(function(){
	$("#MyIsCroll").show();
	$("#Swiper").hide();

	$.post("/api/skill", {}, function(response){
  		console.log(response);
   });

	var myScroll;
	
	myScroll = new IScroll('#wrapper', { mouseWheel: true });
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
})

