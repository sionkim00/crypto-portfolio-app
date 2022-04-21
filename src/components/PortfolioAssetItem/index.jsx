import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

export default function PortfolioAssetItem({ assetItem }) {
  const amount_value = (
    assetItem.quantityBought * assetItem.currentPrice
  ).toFixed(2);
  return (
    <View style={styles.coinContainer}>
      <Image source={{ uri: assetItem.image }} style={styles.coinImage} />
      <View>
        <Text style={styles.title}>{assetItem.name}</Text>
        <Text style={styles.ticker}>{assetItem.ticker}</Text>
      </View>
      <View style={styles.currentPriceContainer}>
        <Text style={styles.title}>${assetItem.currentPrice}</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name={
              assetItem.priceChangePercentage >= 0 ? "arrowup" : "arrowdown"
            }
            size={12}
            color={assetItem.priceChangePercentage >= 0 ? "#16c784" : "#e74c3c"}
            style={{ alignSelf: "center" }}
          />
          <Text
            style={{
              color:
                assetItem.priceChangePercentage >= 0 ? "#16c784" : "#e74c3c",
              fontWeight: "600",
            }}
          >
            {assetItem.priceChangePercentage.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.title}>${amount_value}</Text>
        <Text style={styles.ticker}>
          {assetItem.quantityBought} {assetItem.ticker}
        </Text>
      </View>
    </View>
  );
}
