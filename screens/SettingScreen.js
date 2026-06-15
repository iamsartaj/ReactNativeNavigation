import { View, Text, StyleSheet, Button } from 'react-native';

function SettingScreen() {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Setting Screen
        </Text>
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

export default SettingScreen