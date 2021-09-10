import React from "react";
import { View, Text } from "react-native";
const Item = (props) => {
    const { oneItem } = props.item;
    return (
        <View>
            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{"Name: " + props.item.name}</Text>
            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{"Language: " + props.item.language}</Text>
            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{"Link: " + props.item.url}</Text>
        </View>
    );
};
export default Item;