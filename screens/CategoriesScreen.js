import CatogoryGridTitle from '../components/CatogoryGridTitle';
import { CATEGORIES } from '../data/dummyData';
import { FlatList } from 'react-native';

function renderCategoryItem(itemData) {
    return (
        <CatogoryGridTitle title={itemData.item.title} color={itemData.item.color} />
    )
}


const CategoriesScreen = () => {
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