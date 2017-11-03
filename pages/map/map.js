// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    placeData: {},
    searchMethod:'酒店',
    bitmap:'',
    fail:'',
    success:''
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  onShow:function(){
    // 发起POI检索请求 
    this.data.bitmap.search({
      "query": this.data.searchMethod,
      fail: this.data.fail,
      success: this.data.success,
      // 此处需要在相应路径放置图片文件 
      iconPath: '../../images/marker_red.png',
      // 此处需要在相应路径放置图片文件 
      iconTapPath: '../../images/marker_red.png'
    });
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: '7DpBGkgdHrPKtS0wTT5nvsfLGgQjGfLY'
    });
    that.setData({
      bitmap: BMap
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      console.log(data);
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData,
        fail:fail,
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    that.setData({
      success: success
    });
  },
  changeMarkerColor: function (data, id) {
    var that = this;
    var markersTemp = [];
    for (var i = 0; i < data.length; i++) {
      if (i === id) {
        data[i].iconPath = "../../images/marker_yellow.png";
      } else {
        data[i].iconPath = "../../images/marker_red.png";
      }
      markersTemp[i] = data[i];
    }
    that.setData({
      markers: markersTemp
    });
  },
clickHotel:function(){
  this.setData({
    searchMethod: '酒店'
  });
  this.onShow();
},
clickFood:function(){
  this.setData({
    searchMethod: '美食'
  });
  this.onShow();
},
clickService:function(){
  this.setData({
    searchMethod: '生活服务'
  });
  this.onShow();
}

})