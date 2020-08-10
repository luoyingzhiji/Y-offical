import Vue from 'vue'
// 时间格式化
// 用法：<div>{{data | dataFormat('yyyy-MM-dd hh:mm:ss')}}</div>
Vue.filter('dateFormat', function (value, fmt) {
  let getDate = new Date(value.replace(/-/g,"/"));
  // console.log(getDate)
  // console.log(value)
  // console.log(value.replace(/-/g,"/"))
  let o = {
    "M+": getDate.getMonth() + 1,                 //月份
    "d+": getDate.getDate(),                    //日
    "H+": getDate.getHours(),                   //小时
    "m+": getDate.getMinutes(),                 //分
    "s+": getDate.getSeconds(),                 //秒
    "S": getDate.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
})
