<template>
    <div class="body">
      <!--    百度地图-->
      <baidu-map id="XSDFXPage" class="bm-view"  ak="cSgemRseMWVawD0kwAnjEraGPBwkuOvs" :center="center" :zoom="zoom" @ready="handler">



      </baidu-map>
    </div>
</template>



<script>
  import { mapState } from 'vuex'
  export default {
    name:"Address",
    async fetch ({ params, store }) {
    },
    props: {},
    components: {
    },
    computed: {
      ...mapState(['info'])
    },
    data() {
      return {
        title: '地址',
        center: {lng: 116.334916, lat: 40.064343},
        zoom: 20
      }
    },
    head(){
      return {
        title: this.title+"-"+this.info.title,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content:  this.info.keywords,
          },
          {
            hid: 'author',
            name: 'author',
            content: "HIKER教育",
          },
          {
            hid: 'description',
            name: 'description',
            content:  this.info.description
          }
        ]
      }
    },
    filters: {},
    methods: {
      handler ({BMap}) {
        // 百度地图API功能
        // 创建Map实例
        var map = new BMap.Map("XSDFXPage",{enableMapClick:true});
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(this.center.lng,this.center.lat), this.zoom);
        // 添加地图类型控件
        map.addControl(new BMap.MapTypeControl());
        // 设置地图显示的城市 此项是必须设置的
        map.setCurrentCity("北京");
        // 开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);



        var pointHK = new BMap.Point(this.center.lng,this.center.lat);

        /************************************************
         添加工具条、比例尺控件
         *************************************************/
        map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
        /************************************************
         添加自定义控件类，放大ZoomControl
         *************************************************/
        function ZoomControl() {
          //默认停靠位置和偏移量
          this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
          this.defaultOffset = new BMap.Size(50,23);
        }
        //通过JavaScript的prototype属性继承于BMap.Control
        ZoomControl.prototype = new BMap.Control();
        //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
        //在本方法中创建div容器，并将其添加到地图容器中
        ZoomControl.prototype.initialize = function(map) {
          //创建一个DOM元素
          var div = document.createElement('div');
          //添加文字说明
          div.appendChild(document.createTextNode('放大两级'));
          //添加样式
          div.style.color = 'white';
          div.style.cursor = 'pointer';
          div.style.border = 'none';
          div.style.backgroundColor = '#1890FF';
          div.style.padding = '10px';
          div.style.fontSize = '1.4rem';
          div.style.borderRadius = '10px';


          //绑定事件，点击触发
          div.onclick = function(e) {
            map.setZoom(map.getZoom() + 2);
            if(map.getZoom()  >18){
              alert("已经是放大到不能再放大了");
            }
          }
          //添加DOM元素到地图上
          map.getContainer().appendChild(div);
          //将DOM元素返回
          return div;
        }
        //创建控件
        var myZoomCtrl = new ZoomControl();
        map.addControl(myZoomCtrl)

        /************************************************
         添加自定义控件类，定位到hiker教育
         *************************************************/
        function moveToHiker() {
          //默认停靠位置和偏移量
          this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
          this.defaultOffset = new BMap.Size(50,73);
        }
        //通过JavaScript的prototype属性继承于BMap.Control
        moveToHiker.prototype = new BMap.Control();
        //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
        //在本方法中创建div容器，并将其添加到地图容器中
        moveToHiker.prototype.initialize = function(map) {
          //创建一个DOM元素
          var div = document.createElement('div');
          //添加文字说明
          div.appendChild(document.createTextNode('定位到HIKER教育'));
          //添加样式
          div.style.color = 'white';
          div.style.cursor = 'pointer';
          div.style.border = 'none';
          div.style.backgroundColor = '#1890FF';
          div.style.padding = '10px';
          div.style.fontSize = '1.4rem';
          div.style.borderRadius = '10px';


          //绑定事件，点击触发
          div.onclick = function(e) {
            map.setZoom(20);
            map.panTo(pointHK);
          }
          //添加DOM元素到地图上
          map.getContainer().appendChild(div);
          //将DOM元素返回
          return div;
        }
        //创建控件
        var myMoveToHiker = new moveToHiker();
        map.addControl(myMoveToHiker)


        /************************************************
         添加添加城市列表控件
         *************************************************/
        map.addControl(new BMap.CityListControl({
          anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
          offset:new BMap.Size(130,23)
          // 切换城市之间事件
          // onChangeBefore: function(){
          //    alert('before');
          // },
          // 切换城市之后事件
          // onChangeAfter:function(){
          //   alert('after');
          // }
        }));
        /************************************************
         添加新图标
         *************************************************/
          //定义新图标

          //创建标注
          // var marker = new BMap.Marker(pointHK,{icon:myIcon});
        var marker = new BMap.Marker(pointHK);

        //将标注放大地图上
        map.addOverlay(marker);

        //文字提示
        var label = new BMap.Label('HIKER教育',{offset:new BMap.Size(-23,-32)});
        label.setStyle({
          cursor:'pointer' ,
          backgroundColor: '#1890FF',
          border: 'none',
          color: 'white',
          padding: '5px',
          borderRadius: '7px',
          fontSize : '1.4rem',
        })

        marker.setLabel(label);
        //添加新图标的监听事件
        marker.addEventListener('click',function(){
          var p = marker.getPosition();//获取位置
          alert("HIKER教育的位置是：" + '北京市昌平区新龙大厦B1座718室，欢迎您');
        })



        /************************************************
         给地图添加右键菜单
         *************************************************/
        var menu = new BMap.ContextMenu();

        var txtMenuItem = [
          {
            text:'放大',
            callback:function(){map.zoomIn()}
          },
          {
            text:'缩小',
            callback:function(){map.zoomOut()}
          }
        ];
        for(var i=0; i < txtMenuItem.length; i++){
          menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
        }
        map.addContextMenu(menu);


      }
    },
    created: function () {
    },
    mounted() {
      $(function () {
        $('#XSDFXPage').css({
          'height': $(window).height()
        })
      })
    }

  }

</script>





<style scoped>
   .bm-view {width: 100%;height: 600px;overflow: hidden;margin:0;font-family:"微软雅黑";}
</style>
