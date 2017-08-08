var goods = {
  toGoodsDetail: function(e) {
    wx.navigateTo({
      url: "/pages/goods/detail/index?id=" + e.currentTarget.dataset.id
    });
  }
};
export default goods;
