import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function CoinDetailHeader({
  image,
  name,
  market_cap_rank,
  symbol,
}) {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={30} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 24, height: 24 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{market_cap_rank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
}
