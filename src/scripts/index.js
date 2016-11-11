var Swiper=require("./components/swiper/swiper-3.3.1.min");

var SwiperAnimate=require("./components/swiper/swiper.animate1.0.2.min");

var MySwiper1=new Swiper ('.swiper-1', {
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

  var MySwiper2=new Swiper ('.swiper-2', {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
});

  $.post("/api/skill", {}, function(response){
    // console.log(response);
  });

  var myScroll;

  myScroll = new IScroll('#wrapper', { mouseWheel: true });
  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
})




























var wx=require("./components/weixin/jweixin");

$("#scan").tap(function(){
  //向服务器申请数据
  $.post('http://1360688246.applinzi.com/php/getsign.php',{
    url:window.location.href
  },function(data){
    //将得到的数据字符串转进行截取并转换为json对象方便使用
    pos=data.indexOf('}');
    dataStr=data.substring(0,pos+1);

    objData=JSON.parse(dataStr);
    console.log(dataStr);

    // 调用微信中的js插件，由于本项目运用gulp框架进行项目的管理，
    //但因为微信原生的js不符合commonjs规范，所以在网上找的了符合commonjs规范的jweixin.js进行加载
    wx.config({
      debug: true,
      appId: objData.appId,
      timestamp: objData.timestamp,
      nonceStr: objData.nonceStr,
      signature: objData.signature,
      jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      "scanQRCode"
      ]
    });
  })


  wx.ready(function () {
       // 微信扫一扫的接口
       wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        }
      });
     });
})


