import { MEALS } from "../data/dummyData";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route }) => {
    // const route = useRoute();
    // route.params
    const ctgrId = route.params.categoryId;
    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(ctgrId) >= 0;
    })

    function renderMealItem(idata) {
        return <MealItem title={idata.item.title}/>
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
            <Text>Meals overview screen : {ctgrId}</Text>
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