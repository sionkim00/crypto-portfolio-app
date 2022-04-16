import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import crypto from "../../../assets/data/crypto.json";
import CoinDetailHeader from "../../components/CoinDetailHeader/CoinDetailHeader";
import styles from "./styles";

export default function CoinDetailedScreen() {
  const { image, name, market_data, symbol } = crypto;
  const percentageColor =
    market_data.price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailHeader
        image={image.small}
        name={name}
        symbol={symbol}
        market_cap_rank={market_data.market_cap_rank}
      />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>
            ${market_data.current_price.usd}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: percentageColor,
            padding: 8,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name={
              market_data.price_change_percentage_24h > 0
                ? "arrowup"
                : "arrowdown"
            }
            size={12}
            color={"white"}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.priceChange}>
            {market_data.price_change_percentage_24h.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}
