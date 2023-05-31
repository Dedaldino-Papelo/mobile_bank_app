import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxItem: {
        width: 45,
        height: 45,
        backgroundColor: "#fff",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    boxWrapper: {
        flexGrow: 1,
        marginRight: 20,
        alignItems: "center" 
    },
    boxTitle: {
        color: "#fff",
        marginTop: 8,
        fontFamily: 'Inter_400Regular'
    }
})

export default styles