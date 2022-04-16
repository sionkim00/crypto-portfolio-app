import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

export default function CoinItem({ marketCoin }) {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

  const normalizeMcap = (market_cap) => {
    if (market_cap >= 1_000_000_000_000) {
      return `${Math.floor(market_cap / 1_000_000_000_000)} T`;
    } else if (market_cap > 1_000_000_000) {
      return `${Math.floor(market_cap / 1_000_000_000)} B`;
    } else if (market_cap > 1_000_000) {
      return `${Math.floor(market_cap / 1_000_000)} M`;
    } else if (market_cap > 1_000) {
      return `${Math.floor(market_cap / 1_000)} K`;
    } else {
      return `${market_cap}`;
    }
  };
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
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
            <Text style={styles.rankText}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h > 0 ? "arrowup" : "arrowdown"}
            size={12}
            color={percentageColor}
            style={{ alignSelf: "center" }}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>

      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price.toFixed(2)}</Text>
        <Text style={{ color: "white" }}>MCap {normalizeMcap(market_cap)}</Text>
      </View>
    </View>
  );
}
