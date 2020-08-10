import Vue from 'vue'

import axios from 'axios';
import qs from 'qs';


const mainPath=process.env.API_MAIN;
const wMainPath=process.env.API_W_MAIN;

Vue.prototype.$mainPath=mainPath;
Vue.prototype.$wMainPath=wMainPath;


//读取cookie，需要注意的是cookie是不能存中文的，如果需要存中文，解决方法是后端先进行编码encode()，前端取出来之后用decodeURI('string')解码。（安卓可以取中文cookie，IOS不行）
Vue.prototype.$getCookie=(name)=> {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)){
    return true;
    // return (arr[2]);
  }else{
    return false
  }
}

//设置cookie   name为cookie的名字，value是值，expiredays为过期时间（天数）
Vue.prototype.$setCookie= (name, value, expiredays)=> {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//删除cookie

Vue.prototype.$delCookie =(name)=> {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}



axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  // If config does not exist or the retry option is not set, reject
  if(!config || !config.retry) return Promise.reject(err);

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  // Check if we've maxed out the total number of retries
  if(config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err);
  }

  // Increase the retry count
  config.__retryCount += 1;

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, config.retryDelay || 1);
  });

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function() {
    return axios(config);
  });
});

//创建axios实例
let service = axios.create({
  timeout: 5000,
  headers:{'Content-Type':'application/x-www-form-urlencoded'}
})

export default ({ app }, inject) => {
  inject('httpPost', (url, params) => {
    if(process.server){
      if(url.indexOf("/mainPath")>-1){
        url=url.replace("/mainPath",process.env.API_MAIN);
      }
    }

      let paramsData = {};

      if (params != null && params != '') {

        let array = params.split("&");
        for (let i = 0; i < array.length; i++) {
          let key = array[i].split("=")[0];
          let value = array[i].split("=")[1];
          paramsData[key] = value;
        }
      }
      return new Promise((cback, reject) => {
        service({
          method: 'post',
          url,
          data: qs.stringify(paramsData),
        }).then(res => {
          let success = res.data.success;
          if (success) {
            //cback在promise执行器内部
          } else {
            console.log(res.data.message);
          }
          cback(res.data);
        }).catch(err => {
          if (!err.response) {
            console.log('请求错误' + url)

          } else {
            reject(err.response);
            console.log(err.response, '异常2')
          }
        })
      })
    }
  )

}





