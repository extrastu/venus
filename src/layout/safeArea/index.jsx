import { useEffect, useState } from "react";
import {
  getCurrentInstance,
  useDidShow,
  getSystemInfoSync,
  getMenuButtonBoundingClientRect
} from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavBar from "@/components/navBar";

import "./index.less";

const SafeArea = props => {
  const { title = "", showLogo = false, showBack = false } = props;
  const [sysmInfo, setSysmInfo] = useState(); // 头部安全具体
  const [capsule, setCapsule] = useState(); // 胶囊宽度
  useEffect(() => {
    setSysmInfo(getSystemInfoSync().safeArea);
    setCapsule(getMenuButtonBoundingClientRect());
  }, []);

  useDidShow(() => {
    if (typeof getCurrentInstance().page.getTabBar === "function") {
      const tabBar = getCurrentInstance().page.getTabBar();
      if (tabBar) {
        tabBar.setData({
          selected: 0
        });
      }
    }
  });

  return (
    <View className="wrapper">
      <NavBar title={title} showLogo={showLogo} showBack={showBack} />
      <View
        style={{
          paddingTop: sysmInfo?.top + capsule?.height + 10 + "px"
        }}
        className="wrapper-content"
      >
        {props.children}
      </View>
    </View>
  );
};

export default SafeArea;
