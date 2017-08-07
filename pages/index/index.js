const app = getApp();

Page({
  data: {
    goodsList: [
      {
        img:
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        name: "夏日显白清新白色恋人爆钻款",
        xz: "258",
        yl: "366"
      },
      {
        img:
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        name: "夏日显白清新白色恋人爆钻款夏日显白清新白色恋人爆钻款",

        xz: "258",
        yl: "366"
      },
      {
        img:
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
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
    coupons: [
      {
        amount: 10,
        condition: 100,
        expiration: '2017.10.11'
      },
      {
        amount: 40,
        condition: 300,
        expiration: '2017.10.11'
      },
      {
        amount: 80,
        condition: 800,
        expiration: '2017.10.11'
      }
    ],
    reTwo: [
      "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
    ],
    topList: [
      {
        img:
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        brand: '玛丽安宝莱',
        name: "深层洗护套装XXXXXXXX",
        price: 240
      },
      {
        img:
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        brand: '玛丽安宝莱',
        name: "深层洗护套装XXXXXXXX",
        price: 240
      },
      {
        img:
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        brand: '玛丽安宝莱',
        name: "深层洗护套装XXXXXXXX",
        price: 240
      },
      {
        img:
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        brand: '玛丽安宝莱',
        name: "深层洗护套装XXXXXXXX",
        price: 240
      },
      {
        img:
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        brand: '玛丽安宝莱',
        name: "深层洗护套装XXXXXXXX",
        price: 240
      }
    ]
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
