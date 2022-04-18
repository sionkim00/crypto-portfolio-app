import { View, Text, Image, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-wagmi-charts";
import crypto from "../../../assets/data/crypto.json";
import CoinDetailHeader from "../../components/CoinDetailHeader/CoinDetailHeader";
import styles from "./styles";

export default function CoinDetailedScreen() {
  const { image, name, market_data, symbol, prices } = crypto;
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(
    market_data.current_price.usd.toString()
  );

  useEffect(() => {
    const newUsdValue =
      parseFloat(coinValue || 0) * market_data.current_price.usd;
    setUsdValue(newUsdValue.toString());
  }, [coinValue]);
  useEffect(() => {
    const newCoinValue =
      parseFloat(usdValue || 0) / market_data.current_price.usd;
    setCoinValue(newCoinValue.toString());
  }, [usdValue]);

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
      <View>
        <LineChart.Provider
          data={prices.map((price) => {
            return { timestamp: price[0], value: price[1] };
          })}
        >
          <LineChart height={200}>
            <LineChart.Path color={percentageColor}>
              <LineChart.Gradient />
            </LineChart.Path>
            <LineChart.CursorCrosshair color="white">
              <LineChart.Tooltip style={{ backgroundColor: "white" }} />
            </LineChart.CursorCrosshair>
          </LineChart>
        </LineChart.Provider>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.inputContainer}>
            <Text style={{ color: "white" }}>{symbol.toUpperCase()}</Text>
            <TextInput
              style={styles.textInput}
              value={coinValue.toString()}
              keyboardType="numeric"
              onChangeText={(text) => setCoinValue(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={{ color: "white" }}>USD</Text>
            <TextInput
              style={styles.textInput}
              value={usdValue.toString()}
              keyboardType="numeric"
              onChangeText={(text) => setUsdValue(text)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
