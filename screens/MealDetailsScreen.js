import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummyData";
import MealsDetails from "../components/MealsDetails";
import { useContext, useLayoutEffect } from "react";
// import { FavoritesContext } from "../store/context/favoritesContext";
import IconButton from "../components/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ route, navigation }) => {
    // const favMealsContext = useContext(FavoritesContext);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    // const mealIsFavorite = favMealsContext.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    const changeFavHandler = () => {
        if (mealIsFavorite) {
            // favMealsContext.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
        } else {
            // favMealsContext.addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    onTap={changeFavHandler}
                    icon={mealIsFavorite ? "star" : "star-outline"}
                />
            }
        });
    }, [navigation, changeFavHandler]);


    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealsDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Ingredients</Text>
                    </View>
                    {selectedMeal.ingredients.map((ingredient) => (
                        <View key={ingredient} style={styles.listItem}>
                            <Text style={styles.listItemText}>{ingredient}</Text>
                        </View>
                    ))}
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Steps</Text>
                    </View>
                    {selectedMeal.steps.map((step) => (
                        <View key={step} style={styles.listItem}>
                            <Text style={styles.listItemText}>{step}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )

}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'black'
    },
    detailText: {
        color: 'black'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    },
    subtitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    listItemText: {
        color: '#351401',
        textAlign: 'center'
    }
})
