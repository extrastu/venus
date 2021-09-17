import { getCurrentInstance, useDidShow } from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import NavBar from "@/components/navBar";

import "./index.less";

const Index = () => {
  useDidShow(() => {
    if (typeof getCurrentInstance().page.getTabBar === "function") {
      const tabBar = getCurrentInstance().page.getTabBar();
      if (tabBar) {
        tabBar.setData({
          selected: 1
        });
      }
    }
  });

  return (
    <View className="wrapper">
      <NavBar showLogo title="VENUS" />
      <View className="wrapper-container"></View>
    </View>
  );
};

export default Index;
