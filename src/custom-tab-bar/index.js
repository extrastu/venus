Component({
  data: {
    selected: 0,
    list: [
      {
        text: "Home",
        path: "/pages/index/index",
        icon: "../resources/images/home.png"
      },
      {
        text: "Setting",
        path: "/pages/setting/index",
        icon: "../resources/images/category.png"
      }
    ]
  },

  methods: {
    onTabClick(event) {
      const { path, index } = event.currentTarget.dataset;
      wx.vibrateShort({
        type: "type"
      });
      wx.switchTab({
        url: path
      });
      this.setData({
        selected: index
      });
    }
  }
});
