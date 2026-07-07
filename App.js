import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverView';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: "All Categories" }}/>
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} 
            // options={({ route, navigation }) => {
            //   return {
            //     title: route.params.categoryName
            //   }
            // }} we can also set the title dynamically in the MealsOverViewScreen.js file using navigation.setOptions() method
          />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}