import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import transfer from "../../transfer";
import YellowDoll from "../YellowDoll/YelloDow";

const TransferList = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <YellowDoll />
        <View style={styles.transferInfo}>
          <Text>Transfer to {item.bank}</Text>
          <Text>{item.author}</Text>
          <Text style={styles.transferDate}>{item.date}</Text>
        </View>
      </View>
      <Text style={styles.transferAmount}>Kz {item.amount}</Text>
    </View>
  );
};

export default TransferList;
