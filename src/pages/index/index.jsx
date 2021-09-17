import { getCurrentInstance, useDidShow } from "@tarojs/taro";
import { View, Text, Image, ScrollView } from "@tarojs/components";
import SafeArea from "@/layout/safeArea";
import Card from "@/components/card";

import "./index.less";

const Index = () => {
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
      <SafeArea title="VENUS">
        <ScrollView className="scrollview" scrollY scrollWithAnimation>
          <Card
            title="venus"
            image="https://www.dpm.org.cn/download/lights_image/id/256332/img_size/7.html"
            content="A mobile UI framework based on React."
          />
          <Card
            title="venus"
            image="https://www.dpm.org.cn/download/lights_image/id/256332/img_size/7.html"
            content="A mobile UI framework based on React."
          />
          <Card
            title="venus"
            image="https://www.dpm.org.cn/download/lights_image/id/256332/img_size/7.html"
            content="A mobile UI framework based on React."
          />
          <Card
            title="venus"
            image="https://www.dpm.org.cn/download/lights_image/id/256332/img_size/7.html"
            content="A mobile UI framework based on React."
          />
          <Card
            title="venus"
            image="https://www.dpm.org.cn/download/lights_image/id/256332/img_size/7.html"
            content="A mobile UI framework based on React."
          />
        </ScrollView>
      </SafeArea>
    </View>
  );
};

export default Index;
