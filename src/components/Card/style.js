import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

const statusBarHeigt = Constants.statusBarHeight;


const styles = StyleSheet.create({
    Card: {
        width: 396,
        height: 250,
        position: "absolute",
        left: 0,
        top: 0,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
        opacity: 0.2,
        left: -10,
        top: 35
    },
    headerInfo: {
        marginTop: 50,
        marginLeft: 41,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        width: 173,
        height: 42
    },
    cardInfo: {
        gap: 6
    },
    cardTitle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 17
    },
    accoutType: {
        fontSize: 12,
        fontWeight: "300",
        color: "#fff",
        opacity: 0.5
    },
    cardMoveTypes: {
        marginLeft: 41,
        marginTop: 24,
        height: 83,
        width: 335,
    }
    
})

export default styles