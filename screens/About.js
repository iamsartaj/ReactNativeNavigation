import { View, Text, StyleSheet, Button } from 'react-native';
// import { useLayoutEffect } from 'react';

function About( {route, navigation} ) {
  const { name } = route.params

//   useLayoutEffect(() => {
//     navigation.setOptions({
//         title: name,
//     })
//   }, [navigation, name]) using this for title name

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            About {name}
        </Text>
        <Button title="Update the name" onPress={() => navigation.setParams({
            name: "Codevolution",
        })}/>
        <Button title="Go back with data"
        onPress={() => navigation.navigate("Home", { result: "data from about"})}/>
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

export default About