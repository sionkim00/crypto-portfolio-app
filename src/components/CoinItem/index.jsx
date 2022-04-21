import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function CoinItem({ marketCoin }) {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
    id,
  } = marketCoin;

  const percentageColor =
    price_change_percentage_24h <= 0 ? "#ea3943" : "#16c784";
  const navigation = useNavigation();

  const normalizeMcap = (market_cap) => {
    if (market_cap >= 1000000000000) {
      return `${Math.floor(market_cap / 1000000000000)}T`;
    } else if (market_cap > 1000000000) {
      return `${Math.floor(market_cap / 1000000000)}B`;
    } else if (market_cap > 1000000) {
      return `${Math.floor(market_cap / 1000000)}M`;
    } else if (market_cap > 1000) {
      return `${Math.floor(market_cap / 1000)}K`;
    } else {
      return `${market_cap}`;
    }
  };
  return (
    <Pressable
      style={styles.coinContainer}
      onPress={() => navigation.navigate("CoinDetailScreen", { coinId: id })}
    >
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
            name={price_change_percentage_24h >= 0 ? "arrowup" : "arrowdown"}
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
        <Text style={styles.title}>${current_price.toFixed(2)}</Text>
        <Text style={{ color: "white" }}>
          Market Cap ${normalizeMcap(market_cap)}
        </Text>
      </View>
    </Pressable>
  );
}
