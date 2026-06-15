import 'react-native-gesture-handler'  // it should be first line (at top)
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardScreen from './screens/DashboardScreen'
import SettingScreen from './screens/SettingScreen'

const Drawer = createDrawerNavigator()

export default function AppDrawer(){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                    name='Dashboard' 
                    component={<DashboardScreen/>}
                    options={{
                        title: "My dashboard",
                        drawerLabel: "Dashboard label",  // styling
                        drawerActiveTintColor: '#333',
                        drawerActiveBackgroundColor: 'lightblue',
                        drawerContentStyle: {
                            backgroundColor: "#c6cbef"
                        }
                    }} />
                <Drawer.Screen name='Setting' component={<SettingScreen/>}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}