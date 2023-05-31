import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Card from "../../components/Card/Card";
import SelectTransactions from "../../components/SelectTransactions/SelectTransactions";
import Transfer from "../../components/transfer/transfer";

const Home = () => {
  const [features, setFeatures] = useState("transfer");
  return (
    <View style={styles.container}>
      <Card />
      <SelectTransactions setFeatures={setFeatures} />
      {features === "all" ? (
        <Text>all</Text>
      ) : features === "transfer" ? (
        <Transfer />
      ) : features === "withdraw" ? (
        <Text>withdraw</Text>
      ) : features === "topup" ? (
        <Text>topup</Text>
      ) : (
        <Text>more</Text>
      )}
    </View>
  );
};

export default Home;
