import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import crypto from "../../../assets/data/crypto.json";
import CoinDetailHeader from "../../components/CoinDetailHeader/CoinDetailHeader";

export default function CoinDetailedScreen() {
  const { image, name, market_data, symbol } = crypto;
  return (
    <View>
      <CoinDetailHeader
        image={image.small}
        name={name}
        symbol={symbol}
        market_cap_rank={market_data.market_cap_rank}
      />
    </View>
  );
}
