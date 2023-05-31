import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Card: {
        width: 355,
        height: 210,
        marginTop: 12,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
        opacity: 0.2,
        left: 15,
        top: 0
    },
    container: {
        width: 285,
        height: 161,
        marginHorizontal: 15,
        marginBottom: 19
    },
    innerContent: {
        width: 285,
        height: 161,
        marginHorizontal: 15,
        marginTop: 24,
        marginBottom: 6
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    name: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 17,
        fontFamily: 'Inter_400Regular'
        
    },
    bankname: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "300",
        lineHeight: 17,
        fontStyle: "italic",
        fontFamily: 'Inter_400Regular'
    },
    simCard: {
        width: 38,
        height: 28,
        marginVertical: 21
    },
    account: {
        color: "#fff",
        fontSize: 12,
        lineHeight: 12,
        fontWeight: 500,
        fontFamily: 'Inter_400Regular'
    },
    colouredBall: {
        flexDirection: "column",
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: 50
    },
    wrapBall: {
        flexDirection: "row",
    },
    red: {      
        backgroundColor: "#EE1111",
        width: 25,
        height: 25,
        borderRadius: 50,
        opacity: 0.8,
    },
    yellow: {
        backgroundColor: "#FFAD08",
        width: 25,
        height: 25,
        borderRadius: 50,
        opacity: 0.8,


    },
    bottomText: {
        color: "#fff",
        fontFamily: 'Inter_400Regular'
    },

    expDate: {
        color: "#fff",
        opacity: 0.4,
        fontSize: 14,
        fontFamily: 'Inter_400Regular'
    }
})

export default styles