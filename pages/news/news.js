// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topNews: [],
    newsType:'topNews'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 访问聚合数据的网络接口-头条新闻
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      data: {
        type: 'topNews',
        key: 'a9f703a0200d68926f707f3f13629078'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.error_code == 0) {
          that.setData({
            topNews: res.data.result.data
          })
        } else {
          console.log('获取失败');
        }
      }
    })
  },
  //事件处理函数
  bindViewTap: function (event) {
    wx.navigateTo({
      url: '../detail/detail?title=' + event.currentTarget.dataset.title + '&url=' + event.currentTarget.dataset.url
    })
  },
  clickNation:function(){
    this.setData({
      newsType: 'guoji'
    })
   this.getNews();
  }, 
  clickSport: function () {
    this.setData({
      newsType: 'tiyu'
    })
    this.getNews();
  },
  clickScience:function(){
    this.setData({
      newsType: 'keji'
    })
    this.getNews();
  },
  clickScience: function () {
    this.setData({
      newsType: 'keji'
    })
    this.getNews();
  },
  clickHappy:function(){
    this.setData({
      newsType: 'yule'
    })
    this.getNews();
  },
  clickFinance:function(){
    this.setData({
      newsType: 'caijing'
    })
    this.getNews();
  },
  getNews:function(){
    var that = this
    // 访问聚合数据的网络接口-头条新闻
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      data: {
        type: this.data.newsType,
        key: 'a9f703a0200d68926f707f3f13629078'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.error_code == 0) {
          that.setData({
            topNews: res.data.result.data
          })
        } else {
          console.log('获取失败');
        }
      }
    })
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