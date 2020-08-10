
/**
 * 文本框错误提示
 * @param id
 * @param content
 */
function errorShow(type,content){
    $("."+type+"Error").show();
    $("."+type+"ErrorCont").html(content);
}
/**
 * 文本框隐藏错误
 * @param id
 * @param content
 */
function errorHide(type){
    $("."+type+"Error").hide();
    $("."+type+"ErrorCont").html("");
}





/**
 * 判断Cookies中是否有用户信息
 * 	仅页面操作用，实际操作中要判断用户是否登录成功
 * @param baseLocation
 * @returns {Boolean}
 */

function isLogin() {
	if (isNotEmpty(getCookie(userCookie))) {
		return true;
	}
	return false;
}



//滚动获取ajax分页方法获取数据
function ajaxWebRollPage(url,parameters){
    $.ajax({
        type : "POST",
        dataType : "text",
        url: url,
        data : parameters,
        cache : true,
        success : function(result){
            $("#pageCaption").append(result);
        }
    });
}


function isWeiXin(){
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    let ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

/*点赞jsonp回调*/
function doPraiseCallBack(result){
    if(result.success){
        $("#num"+result.entity).addClass("current");
        $("#num"+result.entity).html('<i class="am-icon-thumbs-up"></i><span>('+ (result.message)+')</span>');
        dialog(3, '点赞成功','');
    }else{
        dialog(3, result.message,'');
    }
}



/**
 * 显示 微信 or 手机 登录
 */
function showLoginType(type){
    if (type=="mobile"){
        $(".RichScan").hide();
        $(".RichScanText").hide();
        $(".wxLogin").show();

        $(".sjLogin").hide();
        $(".mobileLogin").show();
    }else {
        $(".RichScan").show();
        $(".RichScanText").show();
        $(".wxLogin").hide();

        $(".sjLogin").show();
        $(".mobileLogin").hide();
    }
}



// 对Date的扩展，将 Date 转化为指定格式的String
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1,                 //月份
    "d+": this.getDate(),                    //日
    "H+": this.getHours(),                   //小时
    "m+": this.getMinutes(),                 //分
    "s+": this.getSeconds(),                 //秒
    "S": this.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}










