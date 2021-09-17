import { View, Text, Image } from "@tarojs/components";

import "./index.less";

const Card = props => {
  const { title = "", image = "", content = "" } = props;
  return (
    <View className="card">
      <Image className="card-img" mode="aspectFill" src={image} />
      <View className="card-info">
        <View className="card-info-title">
          <Text className="card-info-title-text">{title}</Text>
        </View>
        <View className="card-info-content">
          <Text className="card-info-content-text">{content}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
