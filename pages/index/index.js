var app = getApp();
var bmap = require('../../libs/bmap-wx.js'); 
var util = require('../../utils/util.js')
const config = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: '',
    county: '',
    sliderList: [
      { selected: true, imageSource: '../../images/1.jpg' },
      { selected: false, imageSource: '../../images/2.jpg' },
      { selected: false, imageSource: '../../images/3.jpg' },
    ],
    today:"",
    inTheaters: {},
    containerShow: true,
    weatherData: '' ,
    air:'',
    dress:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.day = util.formatTime(new Date()).split(' ')[0];
    this.setData({
      today: app.globalData.day  //更新当前日期
    });
    this.getLocation();
    var inTheatersUrl = app.globalData.doubanBase +
      "/v2/movie/in_theaters" + "?start=0&count=6";
    this.getMovieListData(inTheatersUrl, "inTheaters", "正在热映");
  },
  getMovieListData: function (url, settedKey, categoryTitle) {
    wx.showNavigationBarLoading()
    var that = this;
    wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        that.processDoubanData(res.data, settedKey, categoryTitle)
      },
      fail: function (error) {
        // fail
        console.log(error)
      }
    })
  }, 
  //定位当前城市的函数
  getLocation: function () {
    console.log("正在定位城市");
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //当前的经度和纬度
        let latitude = res.latitude
        let longitude = res.longitude
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${config.key}`,
          success: res => {
            console.log(res);
            app.globalData.defaultCity = res.data.result.ad_info.city;
            app.globalData.defaultCounty=res.data.result.ad_info.district;
            that.setData({
              location: app.globalData.defaultCity,
              county: app.globalData.defaultCounty
            });
            console.log(app.globalData.defaultCity);
            console.log(app.globalData.defaultCounty);
            //that.getWeather();
            //that.getAir();
          }
        })
      }
    })
  },
  processDoubanData: function (moviesDouban, settedKey, categoryTitle) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      // [1,1,1,1,1] [1,1,1,0,0]
      var temp = {
        stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp)
    }
    var readyData = {};
    readyData[settedKey] = {
      categoryTitle: categoryTitle,
      movies: movies
    }
    this.setData(readyData);
    console.log(readyData)
    wx.hideNavigationBarLoading();
  },
  onMoreTap: function (event) {
    wx.switchTab({
      url: '../movies/movies'
    });
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
      location: app.globalData.defaultCity,
      county: app.globalData.defaultCounty
    });
    this.getWeather();
    this.getAir();
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
    /*
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: '7DpBGkgdHrPKtS0wTT5nvsfLGgQjGfLY'
    });
    var fail = function (data) {
      console.log(data)
    }; 
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      var life=data.originalData.results[0].index[0];
      console.log(life)
      that.setData({
        weatherData: weatherData,
        life:life
      });
    } 
    BMap.weather({
      fail: fail,
      success: success
    });*/
    var city = this.data.location.slice(0, 2); //分割字符串
    var that = this;
    var url = "https://free-api.heweather.com/s6/weather";
    var param = {
      key: "c5bfaf6bf312400891a8bd572b751dec",
      location: city
    };
    //发出请求
    wx.request({
      url: url,
      data: param,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        app.globalData.weatherData = res.data.HeWeather6[0];
        that.setData({
          weatherData: app.globalData.weatherData.now, //今天天气情况数组 
          dress: res.data.HeWeather6[0].lifestyle[1] //生活指数
        });
      }
    })
  },
  getAir: function (e){
    var city = this.data.location.slice(0, 2); //分割字符串
    var that = this;
    var url = "https://free-api.heweather.com/s6/air/now";
    var param = {
      key: "c5bfaf6bf312400891a8bd572b751dec",
      location: city
    };
    //发出请求
    wx.request({
      url: url,
      data: param,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        app.globalData.air = res.data.HeWeather6[0].air_now_city;
        that.setData({
          air: app.globalData.air
        });
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