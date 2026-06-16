import { MEALS } from "../data/dummyData";
import { View, Text, StyleSheet } from "react-native";

const MealsOverViewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Meals overview screen</Text>
        </View>
    )
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})