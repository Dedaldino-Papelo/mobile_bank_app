import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";

const ProfileCard = () => {
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
      <View style={styles.container}>
        <View style={styles.innerContent}>
          <View style={styles.title}>
            <Text style={styles.name}>Dedaldino Papelo</Text>
            <Text style={styles.bankname}>Java Bank</Text>
          </View>
          <Image style={styles.simCard} source={require("../../assets/simcard.png")} />
          <Text style={styles.account}>35-070-0003-3256-2022</Text>
          <View style={styles.colouredBall}>
            <View style={styles.wrapBall}>
                <View style={styles.red} />
                <View style={styles.yellow}  />
            </View>
            <Text style={styles.bottomText}>Mastercard</Text>
          </View>
          <Text style={styles.expDate}>Exp. 12/26</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProfileCard;
