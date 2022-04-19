import { View, Text, TextInput, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-wagmi-charts";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import crypto from "../../../assets/data/crypto.json";
import CoinDetailHeader from "../../components/CoinDetailHeader";
import styles from "./styles";
import {
  getDetailedCoinData,
  getCoinMarketChart,
} from "../../services/requests";

export default function CoinDetailedScreen() {
  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const route = useRoute();
  const {
    params: { coinId },
  } = route;

  const [loading, setLoading] = useState(false);
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState("");

  const fetchCoinData = async () => {
    setLoading(true);
    const fetchedCoinData = await getDetailedCoinData(coinId);
    const fetchedCoinMarketData = await getCoinMarketChart(coinId);
    setCoin(fetchedCoinData);
    setCoinMarketData(fetchedCoinMarketData);
    setUsdValue(fetchedCoinData.market_data.current_price.usd.toString());
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading || !coin || !coinMarketData) {
    return <ActivityIndicator size="large" />;
  }

  const {
    id,
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coin;

  const { prices } = coinMarketData;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";

  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };

  return (
    <GestureHandlerRootView>
      <View style={{ paddingHorizontal: 10 }}>
        <CoinDetailHeader
          image={coin.image.small}
          name={coin.name}
          symbol={coin.symbol}
          market_cap_rank={coin.market_data.market_cap_rank}
        />
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.name}>{coin.name}</Text>
            <Text style={styles.currentPrice}>
              ${coin.market_data.current_price.usd}
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
                coin.market_data.price_change_percentage_24h > 0
                  ? "arrowup"
                  : "arrowdown"
              }
              size={12}
              color={"white"}
              style={{ alignSelf: "center" }}
            />
            <Text style={styles.priceChange}>
              {coin.market_data.price_change_percentage_24h.toFixed(2)}
            </Text>
          </View>
        </View>
        <View>
          <LineChart.Provider
            data={coinMarketData.prices.map((price) => {
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
              <Text style={{ color: "white" }}>
                {coin.symbol.toUpperCase()}
              </Text>
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
    </GestureHandlerRootView>
  );
}
