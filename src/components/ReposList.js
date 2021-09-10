import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReposList = (props) => {
    const navigate = useNavigation();
    return (
        <View >
            {props.data.length ? (
                <Text style={styles.repositoriesText}>Sources</Text>
            ) : null}
            <FlatList
                data={props.data}
                keyExtractor={({ id }, index) => id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => {
                            navigate.navigate("Item", { item });
                        }}>
                            <Text>   {item.name + ' *' + item.stargazers_count}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
export default ReposList;