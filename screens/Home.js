import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home({ route }) {   // or we can use prop { navigation }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Home Screen
        </Text>
        <Text style={styles.text}>{route.params?.result}</Text>
        <Button title='Go to about' onPress={() => navigation.navigate("About")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        marginBottom: 16
    }
})

export default Home