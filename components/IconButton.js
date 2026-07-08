import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onTap, icon }){
    return <Pressable onPress={onTap} style={({ pressed }) => pressed && styles.pressed}>
        <Ionicons name={icon} size={24} color="white"/> 
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    }
})