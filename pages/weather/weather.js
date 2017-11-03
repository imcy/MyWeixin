//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    showday: ['今天', '明天', ''],
    city:'', //城市
    district:'', //区域
    now:'',
    forecast:'',//七日天气预报
    quality:'' //空气质量
  },
  onShow: function () {
    var that = this;
    var city = app.globalData.defaultCity.slice(0, 2);
    that.setData({
      city: app.globalData.defaultCity, //今天天气情况数组 
      district: app.globalData.defaultCounty //生活指数
    });
    that.getWeather(city);//获得天气
  },
  //当页面加载完成
  onLoad: function () {
    var that = this;
    var date = new Date();
    console.log(date.getDay());
    that.setData({
      'showday[2]': this.data.weekday[(date.getDay() + 2) % 7],
    });
    console.log(this.data.showday);
   
  },
  //获取天气
  getWeather: function (city) {
    var that = this;
    that.setData({
          now: app.globalData.weatherData.now, //今天天气情况数组 
          forecast: app.globalData.weatherData.daily_forecast,
          quality: app.globalData.air
    });
  },
});