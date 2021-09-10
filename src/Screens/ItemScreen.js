import React from "react";
import { View } from "react-native";
import Item from "../components/Item";

const UserScreen = (props) => {
  const { item } = props.route.params;
  return (
    <View>
      <Item item={item} />
    </View>
  );
};
export default UserScreen;