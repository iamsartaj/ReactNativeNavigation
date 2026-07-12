import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ items }) => {

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
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})