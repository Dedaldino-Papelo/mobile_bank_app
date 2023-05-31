import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 355,
        height: 85,
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
        padding: 15
    },
    leftSide: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    transferInfo: {
        flexDirection: "column",
        gap: 5
    },
    transferDate: {
        fontSize: 10,
        fontWeight: "300",
        color: "#151D3B"
    },
    transferAmount: {
        color: "#151D3B",
        fontSize: 14,
        fontWeight: "500"
    }
})

export default styles