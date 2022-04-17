import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-wagmi-charts";
import crypto from "../../../assets/data/crypto.json";
import CoinDetailHeader from "../../components/CoinDetailHeader/CoinDetailHeader";
import styles from "./styles";

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];

export default function CoinDetailedScreen() {
  const { image, name, market_data, symbol, prices } = crypto;
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
      <LineChart.Provider
        data={prices.map((price) => {
          return { timestamp: price[0], value: price[1] };
        })}
      >
        <LineChart>
          <LineChart.Path color="red" />
        </LineChart>
      </LineChart.Provider>
    </View>
  );
}
