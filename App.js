import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverView';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './screens/Favorites';
// import FavoritesContextProvider from './store/context/favoritesContext';
import { store } from './store/redux/store';
import { Provider } from 'react-redux';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: "All Categories"}}/>
    <Drawer.Screen name="Favorites" component={Favorites}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} 
              // options={({ route, navigation }) => {
              //   return {
              //     title: route.params.categoryName
              //   }
              // }} we can also set the title dynamically in the MealsOverViewScreen.js file using navigation.setOptions() method
            />
            <Stack.Screen 
              name="MealDetails" 
              component={MealDetailsScreen} 
              // options={{ headerRight: () => 
              // {
              //   return <Button title="press me"/> We can set header here and in component itself using setOptions() method.
              // }
              // }}
              />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}