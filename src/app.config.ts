export default {
  darkmode: true,
  themeLocation: "theme.json",
  pages: ["pages/index/index", "pages/setting/index"],
  window: {
    navigationBarTextStyle: "@navigationBarTextStyle",
    backgroundColor: "@backgroundColor",
    backgroundTextStyle: "@backgroundTextStyle",
    navigationBarTitleText: "",
    navigationStyle: "custom"
  },
  tabBar: {
    custom: true,
    color: "#ffffff",
    selectedColor: "#000000",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "Home",
        iconPath: "./resources/images/home.png"
      },
      {
        pagePath: "pages/setting/index",
        text: "Setting",
        iconPath: "./resources/images/category.png"
      }
    ]
  }
};
