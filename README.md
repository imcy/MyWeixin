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

**调用的API（都是支持https的）**</br>
>城市定位：自带+腾讯地图 </br>
>豆瓣电影：豆瓣API </br>
>天气：和风天气API </br>
>百度POI：百度API </br>
>新闻：聚合数据新闻API</br>

## 目录结构
### images</br>
存放项目要用到的图片，weather中存放天气界面用到的图片</br>

### utils</br>
为一些全局函数</br>
config.js中是腾讯地图的访问key设置</br>

### pages</br>
**index**</br>
主页内容</br>
![主页1](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-14_135703.png)</br>
![主页2](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-14_135733.png)</br>
**map**
百度地图POI</br>
![](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-16_153520.png)</br>
**news**</br>
调用聚合数据的新闻接口（上线版本无显示）</br>
**switchcity**</br>
城市切换</br>
![城市切换页面](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-16_153603.png)</br>
**weather**</br>
天气详情页面设置</br>
![天气详情](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-16_145023.png)</br>
**movies**</br>
豆瓣电影</br>
![电影界面](https://github.com/imcy/MyWeixin/blob/master/%E6%88%90%E6%9E%9C%E5%B1%95%E7%A4%BA/2017-11-16_153545.png)</br>
### 使用方法</br>
下载后直接添加到项目就可以运行。</br>
