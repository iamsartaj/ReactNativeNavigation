import CatogoryGridTitle from '../components/CatogoryGridTitle';
import { CATEGORIES } from '../data/dummyData';
import { FlatList } from 'react-native';


const CategoriesScreen = ({ navigation}) => {

    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('MealsOverView')
        }

        return (
            <CatogoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color} 
                onPress={pressHandler}
            />
        )
    }

    

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;