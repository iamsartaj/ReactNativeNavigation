import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import About from './screens/About';
import { Pressable, StatusBar, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CategoriesScreen/>
    </>
  );
}