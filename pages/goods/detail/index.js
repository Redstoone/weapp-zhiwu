const App = getApp();

Page({
  data: {
    imgUrls: [
      "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
      "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    ],
    indicatorDots: !0,
    vertical: !1,
    autoplay: !1,
    interval: 3000,
    duration: 1000,
    current: 0,
    goods: {
      item: {}
		},
		nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  },
  swiperchange(e) {
    this.setData({
      current: e.detail.current
    });
  },
  onLoad(option) {
    // this.goods = App.HttpResource("/goods/:id", { id: "@id" });
    // this.setData({
    //   id: option.id
    // });
  },
  onShow() {
    // this.getDetail(this.data.id);
  },
  addCart(e) {
    const goods = this.data.goods.item._id;
    App.HttpService.addCartByUser(goods).then(res => {
      const data = res.data;
      console.log(data);
      if (data.meta.code == 0) {
        this.showToast(data.meta.message);
      }
    });
  },
  previewImage(e) {
    const urls =
      this.data.goods && this.data.goods.item.images.map(n => n.path);
    const index = e.currentTarget.dataset.index;
    const current = urls[Number(index)];

    App.WxService.previewImage({
      current: current,
      urls: urls
    });
  },
  showToast(message) {
    App.WxService.showToast({
      title: message,
      icon: "success",
      duration: 1500
    });
  },
  getDetail(id) {
    // App.HttpService.getDetail(id)
    this.goods.getAsync({ id: id }).then(res => {
      const data = res.data;
      console.log(data);
      if (data.meta.code == 0) {
        data.data.images.forEach(n => (n.path = App.renderImage(n.path)));
        this.setData({
          "goods.item": data.data,
          total: data.data.images.length
        });
      }
    });
	},
	tap() {
    console.log('tap')
  }
});
