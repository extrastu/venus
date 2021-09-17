import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import logo from "@/resources/logo.png";
import back from "@/resources/images/back.png";

import "./index.less";

const NavBar = props => {
  const { title, showLogo = false, showBack = false } = props;
  const [sysmInfo, setSysmInfo] = useState(); // 头部安全具体
  const [capsule, setCapsule] = useState(); // 胶囊宽度

  useEffect(() => {
    setSysmInfo(Taro.getSystemInfoSync().safeArea);
    setCapsule(Taro.getMenuButtonBoundingClientRect());
  }, []);

  const handleBack = () => {
    Taro.navigateBack({
      popToRoot: true,
      animated: true
    });
  };

  return (
    <View className="header">
      <View
        className="header-title"
        style={{
          height: capsule?.height + "px",
          paddingTop: sysmInfo?.top + 10 + "px"
        }}
      >
        {showLogo && (
          <Image src={logo} mode="widthFix" className="header-logo"></Image>
        )}
        {showBack && (
          <Image
            src={back}
            className="header-logo"
            mode="widthFix"
            onClick={handleBack}
          ></Image>
        )}
        <Text style={{ marginLeft: showBack || showLogo ? "100rpx" : "24rpx" }}>
          {title}
        </Text>
      </View>
    </View>
  );
};
export default NavBar;
