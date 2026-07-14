import { MEALS, CATEGORIES } from "../data/dummyData";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

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

    return <MealsList items={displayMeals} />
    
}

export default MealsOverViewScreen;