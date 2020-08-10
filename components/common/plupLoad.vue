<template>

</template>
<script>
 let accessid = '';
 let accesskey = '';
 let host = '';
 let policyBase64 = '';
 let signature = '';
 let callbackbody = '';
 let filename = '';
 let key = '';
 let expire = 0;
 let g_object_name = '';
 let timestamp;
 let now = timestamp =Date.parse(new Date()) / 1000;
 let uploadFileType = '';


  function random_string(len) {
    len = len || 32;
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let maxPos = chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }

  function get_suffix(filename) {
   let pos = filename.lastIndexOf('.')
   let suffix = ''
    if (pos != -1) {
      suffix = filename.substring(pos)
    }
    return suffix;
  }

  function calculate_object_name(folder,filename)
  {

   let suffix = get_suffix(filename)
    g_object_name = key +"/"+folder+"/"+ random_string(20) + suffix

    return g_object_name;
  }

  function get_uploaded_object_name(filename)
  {
    return g_object_name

  }

 async function set_upload_param(that,up,folder, filename, ret,ossFile)
  {
    if (ret == false){
      //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
      now = timestamp = Date.parse(new Date()) / 1000;
      if ((ossFile!=uploadFileType)||(expire < now + 3)){
        await that.GLOBAL.httpPost('/mainPath/web/upload/policy','ossFile='+ossFile).then((result) => {
          if (result.success) {
            host = result.entity.host;
            policyBase64 = result.entity.policy;
            accessid = result.entity.accessid;
            signature = result.entity.signature;
            expire = parseInt(result.entity.expire);
            callbackbody = result.entity.callback;
            key = result.entity.dir;

          }
        })
      }
    }
    g_object_name = key;
    if (filename != '') {
      let  suffix = get_suffix(filename);
      calculate_object_name(folder,filename);
    }
    let new_multipart_params = {
      'key' : g_object_name,
      'policy': policyBase64,
      'OSSAccessKeyId': accessid,
      'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
      'callback' : callbackbody,
      'signature': signature,
      'Content-Disposition':'attachment;'
    };
    up.setOption({
      'url': host,
      'multipart_params': new_multipart_params
    });

    up.start();

  }
  function uploadPicLoad(fileModel,ids,showId,childFolder) {
    let uploader = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: fileModel+'Select',
      multi_selection: false,
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',

      filters: {
        mime_types: [ //只允许上传图片和zip文件
          {title: "Image files", extensions: "jpg,jpeg,gif,png,bmp"}
        ],
        max_file_size: '600kb',
        prevent_duplicates:  false //不限制选取重复文件
      },

      init: {
        PostInit: function () {
          document.getElementById(fileModel+'Info').innerHTML = '';
        },

        FilesAdded: function (up, files) {
          if(document.getElementById(fileModel+'Console')!=null) {
            $('#'+fileModel + 'Console').html("");
          }
          plupload.each(files, function (file) {
            document.getElementById(fileModel+'Info').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
              + '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
              + '</div>';
          });
          set_upload_param(uploader,childFolder, '', false,'image');
        },

        BeforeUpload: function (up, file) {
          set_upload_param(up, childFolder,file.name, true,'image');
        },

        UploadProgress: function (up, file) {
          let d = document.getElementById(file.id);
          d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
          let prog = d.getElementsByTagName('div')[0];
          let progBar = prog.getElementsByTagName('div')[0]
          progBar.style.width = 2 * file.percent + 'px';
          progBar.setAttribute('aria-valuenow', file.percent);
        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            $("#"+ids).val("/"+g_object_name);
            $("#"+showId).attr('src',imagePath+"/"+g_object_name);
            $("#"+showId).show();
            $("#"+showId).css("max-width","100%");
            $("#"+showId).removeAttr("width");
            $("#"+showId).removeAttr("height");
            setTimeout(function(){
              $("#"+fileModel+'Info').html("");
            },1000);
          }
          else if (info.status == 203) {

          }
          else {
            document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
          }
        },

        Error: function (up, err) {

          if (err.code == -600) {
            cueDialog("选择的文件太大了,不能超过600KB");
          }
          else if (err.code == -601) {
            cueDialog("选择的文件后缀不对,请上传jpg或png后缀的文件");
          }
          else if (err.code == -602) {

          }
          else {
            cueDialog("Error xml:" + err.response);
          }

        }
      }
    });
    uploader.init();
  }

  function uploadFaceLoad(that,fileModel,showId,childFolder) {
    let uploader = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: fileModel+'Select',
      multi_selection: false,
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',

      filters: {
        mime_types: [ //只允许上传图片和zip文件
          {title: "Image files", extensions: "jpg,jpeg,gif,png,bmp"}
        ],
        max_file_size: '600kb',
        prevent_duplicates:  false //不限制选取重复文件
      },

      init: {
        PostInit: function () {

        },

        FilesAdded: function (up, files) {
          $(".user-photo-loading").show();
          set_upload_param(that,uploader,childFolder, '', false,'image');
        },

        BeforeUpload: function (up, file) {
          set_upload_param(that,up, childFolder,file.name, true,'image');
        },

        UploadProgress: function (up, file) {

        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            $(".user-photo-loading").hide();
            that.$store.state.user.avatar=that.GLOBAL.imagePath + "/"+g_object_name+"?x-oss-process=image/resize,m_fill,h_140,w_140";
          }
          else if (info.status == 203) {
            dialog(3,"上传失败",'');
          }
          else {
            dialog(3,"上传失败",'');
          }
        },
        Error: function (up, err) {
          if (err.code == -600) {
            dialog(3,"\n选择的文件太大了,不能超过600KB",'');
          }
          else if (err.code == -601) {
            dialog(3,"\n选择的文件后缀不对,请上传jpg或png后缀的文件",'');
          }
          else if (err.code == -602) {
            dialog(3,"上传失败",'');
          }
          else {
            dialog(3,"上传失败",'');
          }

        }
      }
    });
    uploader.init();
  }

  function uploadBackgroundLoad(that,fileModel,showId,childFolder) {
    let uploader = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: fileModel+'Select',
      multi_selection: false,
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',

      filters: {
        mime_types: [ //只允许上传图片和zip文件
          {title: "Image files", extensions: "jpg,gif,png,bmp"}
        ],
        max_file_size: '600kb',
        prevent_duplicates: false //不限制选取重复文件
      },

      init: {
        PostInit: function () {
        },

        FilesAdded: function (up, files) {
          $(".user-background-loading").show();
          set_upload_param(that,uploader,childFolder, '', false,'image');
        },

        BeforeUpload: function (up, file) {
          set_upload_param(that,up, childFolder,file.name, true,'image');
        },

        UploadProgress: function (up, file) {
        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            $(".user-background-loading").hide();
            that.$store.state.user.avatar=that.GLOBAL.imagePath + g_object_name+"?x-oss-process=image/resize,m_fill,h_140,w_140";
          }
          else if (info.status == 203) {
            dialog(3,"上传失败",'');
          }
          else {
            dialog(3,"上传失败",'');
          }
        },

        Error: function (up, err) {
          if (err.code == -600) {
            dialog(3,"\n选择的文件太大了,不能超过600KB",'');
          }
          else if (err.code == -601) {
            dialog(3,"\n选择的文件后缀不对,请上传jpg或png后缀的文件",'');
          }
          else if (err.code == -602) {
            dialog(3,"上传失败",'');
          }
          else {
            dialog(3,"上传失败",'');
          }
        }
      }
    });
    uploader.init();
  }

  function uploadTopicPicLoad(fileModel,showId,childFolder) {
    let uploader = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: fileModel+'Select',
      multi_selection: true,
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',

      filters: {
        mime_types: [ //只允许上传图片和zip文件
          {title: "Image files", extensions: "jpg,gif,png,bmp"}
        ],
        max_file_size: '600kb',
        prevent_duplicates: true //不允许选取重复文件
      },

      init: {
        PostInit: function () {
        },

        FilesAdded: function (up, files) {
          if(files.length>9) { // 最多上传9张图
            $(".topicErrorMsg").html("最多上传9张图片");
            return;
          }
          set_upload_param(uploader,childFolder, '', false,'image');

        },

        BeforeUpload: function (up, file) {
          set_upload_param(up, childFolder,file.name, true,'image');
        },

        UploadProgress: function (up, file) {
        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            $("."+showId).append('<span style="position: relative"><img class="chooseTopicImg" src="/src/main/webapp?x-oss-process=image/resize,m_fill,h_100,w_100" lang="'+imagePath+'/'+g_object_name+''+g_object_name+'"><q class="closeTopicImg" onclick="$(this).parent().remove();">&nbsp;</q></span>');
          }
          else if (info.status == 203) {
            $(".topicErrorMsg").html("上传失败");
          }
          else {
            $(".topicErrorMsg").html("上传失败");
          }
        },

        Error: function (up, err) {
          if (err.code == -600) {
            $(".topicErrorMsg").html("选择的文件太大了,不能超过600KB");
          }
          else if (err.code == -601) {
            $(".topicErrorMsg").html("选择的文件后缀不对,请上传jpg或png后缀的文件");
          }
          else if (err.code == -602) {
            $(".topicErrorMsg").html("上传失败");
          }
          else {
            $(".topicErrorMsg").html("上传失败");
          }
        }
      }
    });
    uploader.init();
  }

  function uploadFileLoad(fileModel,ids,childFolder) {
    let uploader = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: fileModel+'Select',
      multi_selection: false,
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',

      filters: {
        mime_types: [
          {title: "Zip files", extensions: "zip,pdf,pptx,docx,xlsx"}
        ],
        max_file_size: '100mb', //最大只能上传20mb的文件
        prevent_duplicates:  false //不限制选取重复文件
      },

      init: {
        PostInit: function () {
          document.getElementById(fileModel+'Info').innerHTML = '';
        },

        FilesAdded: function (up, files) {
          plupload.each(files, function (file) {
            document.getElementById(fileModel+'Info').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
              + '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
              + '</div>';
          });
          set_upload_param(up, childFolder,'', false,'file');
        },

        BeforeUpload: function (up, file) {
          set_upload_param(up, childFolder,file.name, true,'file');
        },

        UploadProgress: function (up, file) {
          let d = document.getElementById(file.id);
          d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
          let prog = d.getElementsByTagName('div')[0];
          let progBar = prog.getElementsByTagName('div')[0]
          progBar.style.width = 2 * file.percent + 'px';
          progBar.setAttribute('aria-valuenow', file.percent);
        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            $("#"+ids).val("/"+g_object_name);
            $("#"+fileModel+"-p").remove();
          }
          else if (info.status == 203) {

          }
          else {
            document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
          }
        },

        Error: function (up, err) {

          if (err.code == -600) {
            cueDialog("选择的文件太大了,不能超过20M");
          }
          else if (err.code == -601) {
            cueDialog("选择的文件后缀不对,请上传'*.pdf;*.doc;*.xlsx;*.zip;*.rar'后缀的文件");
          }
          else if (err.code == -602) {

          }
          else {
            cueDialog("Error xml:" + err.response);
          }

        }
      }
    });
    uploader.init();
  }
  function uploadDBLoad(fileModel,ids,childFolder) {
    let uploader = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: fileModel+'Select',
      multi_selection: false,
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',

      filters: {
        mime_types: [
          {title: "Zip files", extensions: "db"}
        ],
        max_file_size: '20mb', //最大只能上传20mb的文件
        prevent_duplicates:  false //不限制选取重复文件
      },

      init: {
        PostInit: function () {
          document.getElementById(fileModel+'Info').innerHTML = '';
        },

        FilesAdded: function (up, files) {
          plupload.each(files, function (file) {
            document.getElementById(fileModel+'Info').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
              + '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
              + '</div>';
          });
          set_upload_param(up, childFolder,'', false,'db');
        },

        BeforeUpload: function (up, file) {
          set_upload_param(up, childFolder,file.name, true,'db');
        },

        UploadProgress: function (up, file) {
          let d = document.getElementById(file.id);
          d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
          let prog = d.getElementsByTagName('div')[0];
          let progBar = prog.getElementsByTagName('div')[0]
          progBar.style.width = 2 * file.percent + 'px';
          progBar.setAttribute('aria-valuenow', file.percent);
        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            $("#"+ids).val("/"+g_object_name);
            $("#"+fileModel+"-p").remove();
          }
          else if (info.status == 203) {

          }
          else {
            document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
          }
        },

        Error: function (up, err) {

          if (err.code == -600) {
            cueDialog("选择的文件太大了,不能超过20M");
          }
          else if (err.code == -601) {
            cueDialog("选择的文件后缀不对,请上传'*.db'后缀的文件");
          }
          else if (err.code == -602) {

          }
          else {
            cueDialog("Error xml:" + err.response);
          }

        }
      }
    });
    uploader.init();
  }
  function uploadVideoLoad(fileModel,ids,childFolder) {
    let uploader = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: fileModel+'Select',
      multi_selection: false,
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',

      filters: {
        mime_types: [
          {title: "Zip files", extensions: "mp3"}
        ],
        max_file_size: '20mb', //最大只能上传20mb的文件
        prevent_duplicates:  false //不限制选取重复文件
      },

      init: {
        PostInit: function () {
          document.getElementById(fileModel+'Info').innerHTML = '';
        },

        FilesAdded: function (up, files) {
          plupload.each(files, function (file) {
            document.getElementById(fileModel+'Info').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
              + '<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
              + '</div>';
          });
          set_upload_param(up, childFolder,'', false,'video');
        },

        BeforeUpload: function (up, file) {
          set_upload_param(up, childFolder,file.name, true,'video');
        },

        UploadProgress: function (up, file) {
          let d = document.getElementById(file.id);
          d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
          let prog = d.getElementsByTagName('div')[0];
          let progBar = prog.getElementsByTagName('div')[0]
          progBar.style.width = 2 * file.percent + 'px';
          progBar.setAttribute('aria-valuenow', file.percent);
        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            $("#"+ids).val("/"+g_object_name);
            $("#"+fileModel+"-p").remove();
            $("#"+fileModel+"-audio").remove();
          }
          else if (info.status == 203) {

          }
          else {
            document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
          }
        },

        Error: function (up, err) {

          if (err.code == -600) {
            cueDialog("选择的文件太大了,不能超过20M");
          }
          else if (err.code == -601) {
            cueDialog("选择的文件后缀不对,请上传'*.mp3'后缀的文件");
          }
          else if (err.code == -602) {

          }
          else {
            cueDialog("Error xml:" + err.response);
          }

        }
      }
    });
    uploader.init();
  }



  function wHtmlModify(controlId){
    let editor = new wangEditor($("#"+controlId));
    editor.config.menus =  [
      'source',
      'bold',
      'underline',
      'italic',
      'strikethrough',
      'eraser',
      'forecolor',
      'bgcolor',
      'quote',
      'fontfamily',
      'fontsize',
      'head',
      'unorderlist',
      'orderlist',
      'alignleft',
      'aligncenter',
      'alignright',
      'link',
      'unlink',
      'table',
      'img',
      'undo',
      'redo',
      'fullscreen'
    ];
    editor.config.customUpload = true;  // 配置自定义上传的开关
    editor.config.customUploadInit = wHtmlUploadPicLoad;  // 配置上传事件，uploadInit方法已经在上面定义了
    // 上传图片（举例）
    /*editor.config.uploadImgUrl = mainPath+"/img";
     editor.config.uploadImgFileName = 'imgFile';
     // 配置自定义参数（举例）
     editor.config.uploadParams = {
     base: 'img',
     param: ''+childFolder
     };
     // 设置 headers（举例）
     editor.config.uploadHeaders = {
     'Accept' : 'text/x-json'
     };*/
    editor.create();
    $(".addContBxWrap").animate({scrollTop:0},500);
  }
  function wHtmlModify_small(controlId){
    let editor = new wangEditor($("#"+controlId));
    editor.config.menus =  [
      'bold',
      'eraser',
      'forecolor',
      'img',
      'undo',
      'fullscreen'
    ];
    editor.config.customUpload = true;  // 配置自定义上传的开关
    editor.config.customUploadInit = wHtmlUploadPicLoad;  // 配置上传事件，uploadInit方法已经在上面定义了
    // 上传图片（举例）
    /*editor.config.uploadImgUrl = mainPath+"/img";
     editor.config.uploadImgFileName = 'imgFile';
     // 配置自定义参数（举例）
     editor.config.uploadParams = {
     base: 'img',
     param: ''+childFolder
     };
     // 设置 headers（举例）
     editor.config.uploadHeaders = {
     'Accept' : 'text/x-json'
     };*/
    editor.create();
    $(".addContBxWrap").animate({scrollTop:0},500);
  }
  function wHtmlUploadPicLoad() {
    // this 即 editor 对象
    let editor = this;
    // 编辑器中，触发选择图片的按钮的id
    let btnId = editor.customUploadBtnId;
    // 编辑器中，触发选择图片的按钮的父元素的id
    let containerId = editor.customUploadContainerId;

    //实例化一个上传对象
    let uploader = new plupload.Uploader({
      browse_button: btnId,  // 选择文件的按钮的id
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',
      filters: {
        mime_types: [
          //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
          { title: "图片文件", extensions: "jpg,gif,png,bmp" }
        ],
        max_file_size: '1mb'
      },
      init: {
        FilesAdded: function (up, files) {
          //显示添加进来的文件信息
          plupload.each(files, function (file) {
            console.log('文件名:' + file.name + '文件大小:' + plupload.formatSize(file.size));
          });
          // 文件添加之后，开始执行上传
          //uploader.start();
          set_upload_param(uploader,'wHtml', '', false,'image');
        },

        BeforeUpload: function (up, file) {
          set_upload_param(up,'wHtml', file.name, true);
        },

        UploadProgress: function (up, file) {
          // 显示进度条
          editor.showUploadProgress(file.percent);
        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            let url = imagePath+"/"+g_object_name;
            console.log('上传成功 ', url);
            // 插入到编辑器中
            editor.command(null, 'insertHtml', '<img src="' + url + '" style="max-width:100%;"/>');
          }
          else {
            console.log('上传失败', info.response);
          }
        },

        Error: function (up, err) {
          if (err.code == -600) {
            alert("\n选择的文件太大了,不能超过1M");
          }
          else if (err.code == -601) {
            alert("\n选择的文件后缀不对,请上传'jpg,gif,png,bmp'后缀的文件");
          }
          else if (err.code == -602) {
            alert('上传失败', err.response);
          }
          else {
            alert('上传失败', err.response);
          }

        },
        UploadComplete: function () {
          //队列文件处理完毕后,处理相关的事情
          console.log('on UploadComplete');
          // 隐藏进度条
          editor.hideUploadProgress();
        }
      }
    });
    uploader.init();
  }

  function wHtmlModify_web(controlId,editorId){

    let E = window.wangEditor;
    let editor = new E('#'+editorId);
    let $text = $('#'+controlId);
    editor.customConfig.onchange = function (html) {
      // 监控变化，同步更新到 textarea
      $text.val(html);
    }

    editor.customConfig.menus =  [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'image',  // 插入图片
      'undo',  // 撤销
      'redo'  // 重复
    ];
    editor.customConfig.qiniu = true
    //editor.customConfig.uploadImgServer = ;  // 配置上传事件，uploadInit方法已经在上面定义了
    // 上传图片（举例）
    /*editor.config.uploadImgUrl = mainPath+"/img";
     editor.config.uploadImgFileName = 'imgFile';
     // 配置自定义参数（举例）
     editor.config.uploadParams = {
     base: 'img',
     param: ''+childFolder
     };
     // 设置 headers（举例）
     editor.config.uploadHeaders = {
     'Accept' : 'text/x-json'
     };*/
    editor.create();
    editor.txt.html($text.val());
    wHtmlUploadPicLoad_web(editor);
    $(".addContBxWrap").animate({scrollTop:0},500);
    return editor;
  }
  function wHtmlUploadPicLoad_web(editor) {
    // this 即 editor 对象
    // 编辑器中，触发选择图片的按钮的id
    let btnId = editor.imgMenuId;
    // 编辑器中，触发选择图片的按钮的父元素的id
    let containerId = editor.toolbarElemId;
    let textElemId = editor.textElemId;

    //实例化一个上传对象
    let uploader = new plupload.Uploader({
      browse_button: btnId,  // 选择文件的按钮的id
      flash_swf_url: '/plupload-2.1.2/js/Moxie.swf',
      silverlight_xap_url: '/plupload-2.1.2/js/Moxie.xap',
      url: 'https://oss.aliyuncs.com',
      container: containerId,
      drop_element: textElemId,
      filters: {
        mime_types: [
          //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
          { title: "图片文件", extensions: "jpg,jpeg,gif,png,bmp" }
        ],
        max_file_size: '1mb'
      },
      init: {
        FilesAdded: function (up, files) {
          //显示添加进来的文件信息
          plupload.each(files, function (file) {
            console.log('文件名:' + file.name + '文件大小:' + plupload.formatSize(file.size));
          });
          // 文件添加之后，开始执行上传
          //uploader.start();
          set_upload_param(uploader,'wHtml', '', false,'image');
        },

        BeforeUpload: function (up, file) {
          set_upload_param(up,'wHtml', file.name, true);
        },

        UploadProgress: function (up, file) {
          // 显示进度条
          //editor.showUploadProgress(file.percent);
        },

        FileUploaded: function (up, file, info) {
          if (info.status == 200) {
            let url = imagePath+"/"+g_object_name;
            console.log('上传成功 ', url);
            // 插入到编辑器中
            editor.cmd.do('insertHtml', '<img src="' + url + '" style="max-width:100%;"/>')
          }
          else {
            console.log('上传失败', info.response);
          }
        },

        Error: function (up, err) {
          if (err.code == -600) {
            alert("\n选择的文件太大了,不能超过1M");
          }
          else if (err.code == -601) {
            alert("\n选择的文件后缀不对,请上传'jpg,gif,png,bmp'后缀的文件");
          }
          else if (err.code == -602) {
            alert('上传失败', err.response);
          }
          else {
            alert('上传失败', err.response);
          }

        },
        UploadComplete: function () {
          //队列文件处理完毕后,处理相关的事情
          console.log('on UploadComplete');
          // 隐藏进度条
          // editor.hideUploadProgress();
        }
      }
    });
    uploader.init();
  }
  export default {
    uploadFaceLoad,
  }


</script>

