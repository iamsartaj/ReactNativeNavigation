import { MEALS, CATEGORIES } from "../data/dummyData";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const MealsOverViewScreen = ({ route, navigation }) => {
    // const route = useRoute();
    // route.params
    const ctgrId = route.params.categoryId;
    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(ctgrId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((cat) => cat.id === ctgrId).title;
        navigation.setOptions({  // To set the title dynamically in the MealsOverViewScreen.js file using navigation.setOptions() method
            title: categoryTitle
        });
    }, [ctgrId, navigation]);
    

    function renderMealItem(idata) {
        const item = idata.item;
        const mealProps = {
            id: item.id,
            title: item.title,
            imgUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        };
        
        return <MealItem {...mealProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
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