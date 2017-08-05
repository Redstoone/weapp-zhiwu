//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    composite: [
      {
        img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        name: "夏日显白清新白色恋人爆钻款",
        xz: "258",
        yl: "366"
      },
      {
        img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        name: "夏日显白清新白色恋人爆钻款夏日显白清新白色恋人爆钻款",
        xz: "258",
        yl: "366"
      },
      {
        img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        name: "夏日清凉！显白人鱼蓝亮片钻甲",
        xz: "258",
        yl: "366"
      }
    ],
    imgUrls: [
      "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    ],
  },
  onLoad: function() {
    console.log("onLoad");
    var that = this;
  },

  // 搜索
  toSearch: function() {
    wx.navigateTo({
      url: "/pages/search/index"
    });
  },

  // 查看更多
  toMore: function() {
    wx.navigateTo({
      url: "/pages/logs/logs"
    });
  },
  // 详情
  toGoods: function() {
    wx.navigateTo({
      url: "/pages/logs/logs"
    });
  }
});
