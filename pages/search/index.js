const App = getApp();
import goods from "../common/goodsList";

const indexObj = {
  data: {
    inputVal: ""
  },
  clearInput() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value
    });
    this.search();
  },
  search() {
    if (!this.data.inputVal) return;
    wx.request({
      url: "/search",
      data: {
        keyword: this.data.inputVal
      },
      header: {
        "content-type": "application/json"
      },
      success: function(res) {
        const data = res.data;
        console.log(data);
        if (data.meta.code == 0) {
          this.setData({
            goodsList: data.data
          });
        }
      }
    });
  }
  // redirectTo(e) {
  //   App.WxService.redirectTo("/pages/goods/list/index", {
  //     keyword: e.currentTarget.dataset.keyword
  //   });
  // }
};

indexObj["toGoodsDetail"] = goods.toGoodsDetail;
Page(indexObj);
