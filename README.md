# MyWeixin
微信小程序生活服务：蜗牛懒生活
自己拼凑了一个微信小程序，并且把它上线审核了。
![转换的很不清晰](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/show.gif)</br>

**感谢以下作品作者**</br>
主要用到了几个网上的demo: 
>城市切换器：http://www.wxapp-union.com/forum.php?mod=viewthread&tid=10983 </br>
豆瓣电影：https://github.com/songhaoreact/weixin </br>
天气：http://blog.csdn.net/Inite/article/details/74906945 </br>
百度POI：http://lbsyun.baidu.com/index.php?title=wxjsapi/guide/getpoi</br>

**调用的API（都是支持https的）**
>城市定位：自带+腾讯地图 
>豆瓣电影：豆瓣API 
>天气：和风天气API 
>百度POI：百度API 
>新闻：聚合数据新闻API

## 目录结构
### images
存放项目要用到的图片，weather中存放天气界面用到的图片

### utils
为一些全局函数
config.js中是腾讯地图的访问key设置

### pages
**index**
主页内容
![主页1](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-14_135703.png)
![主页2](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-14_135733.png)
**movies**
电影界面内容
**map**
百度地图POI
![](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-16_153520.png)
**news**
调用聚合数据的新闻接口（上线版本无显示）
**switchcity**
城市切换
![城市切换页面](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-16_153603.png)
**weather**
天气详情页面设置
![天气详情](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-16_145023.png)
**movies**
豆瓣电影
![电影界面](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-16_153545.png)
### 使用方法
下载后直接添加到项目就可以运行。
