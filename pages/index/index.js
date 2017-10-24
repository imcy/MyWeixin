const appInstance = getApp();
const day = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: appInstance.globalData.defaultCity,
    county: appInstance.globalData.defaultCounty,
    sliderList: [
      { selected: true, imageSource: '../../images/1.jpg' },
      { selected: false, imageSource: '../../images/2.jpg' },
      { selected: false, imageSource: '../../images/3.jpg' },
    ],
    today:"",
    weather:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    appInstance.globalData.day = day.formatTime(new Date()).split(' ')[0];
    this.setData({
      today: appInstance.globalData.day  //更新当前日期
    });
    this.getWeather();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      location: appInstance.globalData.defaultCity,
      county: appInstance.globalData.defaultCounty
    });
    this.getWeather();
  },
  jump:function(){
    wx.switchTab({
      url: '../switchcity/switchcity'
    });
  },
  gotoWeather:function(){
    wx.switchTab({
      url: '../weather/weather'
    });
  },
  switchTab: function (e) {
    var sliederList = this.data.sliderList;
    var i, item;
    for (i = 0; item = sliederList[i]; ++i) {
      item.selected = e.detail.current == i;
    }
    this.setData({
      sliderList: sliederList
    });
  }, 
  //获取天气
  getWeather:function(e){
    wx.request({
      url: `http://wthrcdn.etouch.cn/weather_mini?city=${appInstance.globalData.defaultCity}`,
      success: res => {
        console.log(res);
        var weather;
        appInstance.globalData.defaultWeather = res.data.data;//获取天气数据
        weather =appInstance.globalData.defaultWeather;
        for (var i = 0; i < weather.forecast.length; i++) {
            var d = weather.forecast[i].date;
            //处理日期信息，添加空格
            weather.forecast[i].date = '　' + d.replace('星期', '　星期');
          }
          this.setData({
            weather: weather,    //更新天气信息
          })
        }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})