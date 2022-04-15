import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

export default function CoinItem({ name }) {
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
        }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />

      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rankText}>1</Text>
          </View>
          <Text style={styles.text}>BTC</Text>
          <AntDesign
            name="caretdown"
            size={12}
            color="white"
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.text}>0.63%</Text>
        </View>
      </View>

      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>56265.09</Text>
        <Text style={styles.text}>MCap 1.076 T</Text>
      </View>
    </View>
  );
}
