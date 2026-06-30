import { Platform, Pressable, Text, View, StyleSheet } from "react-native";

function CatogoryGridTitle({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem]}>
            <Pressable 
                android_ripple={{ color: 'lightgray' }} 
                style={({ pressed }) => [styles.pressStyle, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
                >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CatogoryGridTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    pressStyle: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,  // Had to add it because parent view had this only
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonPressed: {
        opacity: 0.5
    }
})