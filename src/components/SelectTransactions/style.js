import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 395,
        height: 100,
        backgroundColor: "#fff",
        marginVertical: 16
    },
    transactionTitle: {
      fontSize: 14,
      fontWeight: 500,
      color: "#151D3B",
      marginTop: 16,
      fontFamily: 'Inter_400Regular',
    },
    contents: {
        flexDirection: "column",
        alignItems: "flex-start",
        width: 334,
        height: 56,
        padding: 0,
        marginLeft: 30,
        marginRight: 11
    },

    contentItems: {
        marginTop: 20,
        flexDirection: "row",
        gap: 6
        
    },
    btn:{
        borderWidth: 0.3,
        borderColor: "#151D3B",
        paddingVertical: 4,
        paddingHorizontal: 8,
        flexGrow: 1
    },
    btnText: {
        color: "#151D3B"
    }
})

export default styles