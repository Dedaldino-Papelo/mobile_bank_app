import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";
import YelloDow from "../YellowDoll/YelloDow";
import Ballance from "../Ballance/Ballance";
import movements from "../../Movements";
import MovementTypes from "../MovementTypes/MovementTypes";
import { useNavigation } from '@react-navigation/native';

const Card = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.Card}
      colors={["#00014F", "#3A6073"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Image
        style={styles.image}
        source={require("../../assets/mapa-mundi.png")}
      />
      <View style={styles.headerInfo}>
        <YelloDow />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle} onPress={() => navigation.navigate("Profile")}>Dedaldino</Text>
          <Text style={styles.accoutType}>Personal account</Text>
        </View>
      </View>
      <Ballance />
      <ScrollView contentContainerStyle={{flexGrow: 1}} horizontal style={styles.cardMoveTypes}>
        <View style={{flex: 1, flexDirection: "row"}}>
        {movements.map((item) => (
          <MovementTypes key={item.id} items={item} />
        ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Card;
