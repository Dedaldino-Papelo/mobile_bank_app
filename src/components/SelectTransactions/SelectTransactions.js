import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import movements from "../../Movements";

const SelectTransactions = ({setFeatures}) => {


  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={styles.transactionTitle}>Transactions</Text>
        <View style={styles.contentItems}>
          <TouchableOpacity
            onPress={() => setFeatures("all")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFeatures("transfer")} style={styles.btn}>
            <Text style={styles.btnText}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFeatures("withdraw")} style={styles.btn}>
            <Text style={styles.btnText}>Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFeatures("topup")} style={styles.btn}>
            <Text>Top Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFeatures("more")} style={styles.btn}>
            <Text style={styles.btnText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectTransactions;
