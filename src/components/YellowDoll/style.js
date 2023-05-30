import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFAD08",
        height: 39.6,
        width: 39.6,
        borderRadius: 50,
        alignItems: "center",
    },

    eyes: {
        flexDirection: "row",
        gap: 5
    },
    eyeText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    Mouth: {
        fontSize: 18,
        position: "absolute",
        top: 12
    }
})

export default styles