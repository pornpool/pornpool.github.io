function st(){}$("#download_video").on("click",function(a){$("#down_spisok").toggle()});
 $("#mobm").on("click",function(){$(".topp").toggle();
 $(".mainlinks").toggle();
 $(".sortmenu").toggle();
 $("#catsp").hide()});
 $("#showcategories").on("click",function(){$("#catsp").toggle()});
 $("#video_info").on("click",function(){$("#ivideo_screen").hide();
 $(".vidinfact").removeClass("vidinfact");
 $("#ivideo_info").show();
 $(this).addClass("vidinfact")});
 $("#video_screen").on("click",function(){$("#ivideo_screen").toggle();
$(this).toggleClass("vidinfact")});

$("#more").on("click",function(){$("#ivideo_info").show();
 $("#less").show();
 $("#more").hide()});
 $("#less").on("click",function(){$("#ivideo_info").hide();
 $("#less").hide();
 $("#more").show()});
 $("#showtags").on("click",function(a){a.preventDefault();
 $(".tagmore").show();
 $(this).hide()});
 $(".mobsearch").on("click",function(a){a.preventDefault();
 $(".topp").toggle()});
 $(".mobilemenu").on("click",function(a){a.preventDefault();
 $(".topmobile").show();
 $(".topexit").show();
 $("html,body").css("overflow","hidden")});
 $(".topexit").on("click",function(a){a.preventDefault();
 $(".topmobile").hide();
 $("#leftcategories").hide();
 $(this).hide();
 $(".upper").hide();
 $("html,body").css("overflow","auto")});
 $("#showcategories").on("click",function(a){a.preventDefault();
 $(".topmobile").hide();
 $("#leftcategories").show()});
 $("#video").on("click",function(a){a.preventDefault();
 $(".mainlinks span").toggle()});
 $(document).on("click",".back",function(a){a.preventDefault();
 $(".close").trigger("click");
 $(".topmobile").show();
 $(".sortmenu").hide();
 $("#leftcategories").hide()});
 jQuery(document).ready(function(){0<jQuery(document).scrollTop()?jQuery("#gototop").fadeIn("fast"):jQuery("#gototop").fadeOut("fast");jQuery("#gototop").mouseover(function(){jQuery(this).animate({opacity:1},100)}).mouseout(function(){jQuery(this).animate({opacity:.65},100)}).click(function(){window.scroll(0,0);return!1});jQuery(window).scroll(function(){0<jQuery(document).scrollTop()?jQuery("#gototop").fadeIn("fast"):jQuery("#gototop").fadeOut("fast")})});

$("#more").on('click',function(){$('#ivideo_info').show();
$('#less').show();
$('#more').hide();});$("#less").on('click',function(){$('#ivideo_info').hide();$('#less').hide();
$('#more').show();});$("#down_spisok div").on("click",function(a){a.preventDefault();$("#down_spisok").hide();a=this.getAttribute("data-c");a=a.split(";");var b=a[4];window.location.href="https"+":"+"//"+"pornohd.porn"+"/download"+"/"+a[3]+"/"+a[2]+"/"+a[0]+"/"+a[1]+".mp4"});
function st(){}

function like(id,type){
$.post('/js/like.php', {id:id, type:type}, function(data){
if(isNaN(parseFloat(data))){
alert(data);
}else{
$('#'+id+'_'+type+'s').text(data);
}
});
}


 function resizePlayer(){var width=player_width;var height=player_height;if(width==854){if(jwplayer().getWidth()<900){jwplayer().resize(988,555);$(".col1_854").width(988);}else{console.log(width);jwplayer().resize(width,height);$(".col1_854").width(854);}}
 else{if(jwplayer().getWidth()<900){jwplayer().resize(988,555);$(".col1").width(988);}else{console.log(width);jwplayer().resize(width,height);$(".col1").width(735);}}};$(document).ready(function(){var url=window.location.href;var windowHeight=$(window).height();var windowWidth=$(window).width();console.log(windowWidth);console.log(windowHeight);if(windowWidth<620){$("img").each(function(){var img=$(this);img.removeAttr('onmouseover');img.removeAttr('onmouseout');});}
 if(windowWidth>999&&windowWidth<1050){}
if(windowWidth>100){$('<div id="back-top"></div>').appendTo("#footer");$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>1000){$('#back-top').fadeIn();}else{$('#back-top').fadeOut();}});$('#back-top').click(function(){$('body,html').animate({scrollTop:0},800);});});}


 $("div.gotop").click(function(){$("html, body").animate({scrollTop:0},"slow");});$(".post-ratings").delay(800).fadeIn(1000);$(".categoriesHref").hover(function(){$(this).css("padding-bottom","30px");if($('.cat_popup').length)
 {$('.cat_popup').fadeIn(150);$('.arrow_popup').fadeIn(150);}
 else{$.ajax({url:'/dropdowncats.php',success:function(data){$('.categoriesHref').append('<div class="arrow_popup"></div><div class="cat_popup">'+data+'</div>');}})}},function(){$('.cat_popup').hide();$('.arrow_popup').hide();$(this).css("padding-bottom","2px");});});rotationStartup(0.2,0.5);function rotationStartup(tp,wp){rotationStartup._THUMBS={};if(window['KT_rotationEngineWaitPeriod']){rotationStartup._ROTATION_PERIOD_MS=window['KT_rotationEngineWaitPeriod']*1000;}else{rotationStartup._ROTATION_PERIOD_MS=wp*1000;}
 rotationStartup._ROTATION_ID=null;rotationStartup._ROTATION_UID=null;rotationStartup._DUMMY=tp;}
 function rotationStop(image){if(rotationStartup._ROTATION_ID){var thumbData=rotationStartup._THUMBS[rotationStartup._ROTATION_ID];if(thumbData&&thumbData['thumb']&&thumbData['thumbInitial']){thumbData['thumb'].src=thumbData['thumbInitial'];}}
 $('.splash_thumb').remove();rotationStartup._ROTATION_ID=null;rotationStartup._ROTATION_UID=null;rotationStartup._DUMMY=image;}





function rotationStart(image,urlPrefix,thumbCount,thumbExt){rotationStop(null);if(image){var currentThumbUrl=image.src;$(image).parent().append('<div class="splash_thumb"></div>');var thumbId=image.id;if(!thumbId){thumbId='rotationStartup_'+new Date().getTime();image.id=thumbId}
var initialIdx=2;if(image.src.indexOf(urlPrefix+initialIdx+(thumbExt?thumbExt:'.jpg'))>=0)
{initialIdx=2;}
rotationStartup._THUMBS[thumbId]={thumb:image,thumbInitial:currentThumbUrl,prefix:urlPrefix,count:thumbCount,ext:thumbExt,idx:initialIdx-1};if(rotationStartup._THUMBS[thumbId]['thumb']){rotationStartup._ROTATION_UID=new Date().getTime();rotationStartup._ROTATION_ID=thumbId;rotationInvoke(thumbId,rotationStartup._ROTATION_UID);}}}
function rotationInvoke(thumbId,uid){var thumbData=rotationStartup._THUMBS[thumbId];if(thumbData){var thumb=thumbData['thumb'];var prefix=thumbData['prefix'];var count=thumbData['count'];var ext=thumbData['ext'];var idx=thumbData['idx'];idx=(idx==count?2:idx+1);thumbData['idx']=idx;var idx_sp=idx-1;var count_sp=count-1;var splash_proc=(idx_sp/count_sp)*100;var url=prefix+idx+(ext?ext:'.jpg');var img=new Image();img.onload=function(){if((thumbId==rotationStartup._ROTATION_ID)&&(uid==rotationStartup._ROTATION_UID)){if(img.width==0){rotationInvoke(thumbId,uid);}
$('.splash_thumb').width(splash_proc+'%');thumb.src=url;setTimeout('rotationInvoke(\''+thumbId+'\', '+uid+')',rotationStartup._ROTATION_PERIOD_MS);}};img.onerror=function(){if((thumbId==rotationStartup._ROTATION_ID)&&(uid==rotationStartup._ROTATION_UID)){rotationInvoke(thumbId,uid);}};img.src=url;rotationStartup._THUMBS[thumbId]=thumbData;}}
