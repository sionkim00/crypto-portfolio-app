import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

export default function PortfolioAssetItem() {
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={styles.coinImage}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <Text style={styles.ticker}>BTC</Text>
      </View>
      <View style={styles.currentPriceContainer}>
        <Text style={styles.title}>$4000</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name={"arrowup"}
            size={12}
            color={"#16c784"}
            style={{ alignSelf: "center" }}
          />
          <Text style={{ color: "#16c784", fontWeight: "600" }}>1.2%</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>$8000</Text>
        <Text style={styles.ticker}>2 BTC</Text>
      </View>
    </View>
  );
}
