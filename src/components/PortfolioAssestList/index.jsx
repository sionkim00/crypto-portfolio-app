import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import PortfolioAssetItem from "../PortfolioAssetItem";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue, useRecoilState } from "recoil";
import { allPortfolioAssets } from "../../atoms/PortfolioAssets";

export default function PortfolioAssetsList() {
  const navigation = useNavigation();
  const assets = useRecoilValue(allPortfolioAssets);

  const getCurrentBalance = () =>
    assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.quantityBought * currentAsset.currentPrice,
      0
    );
  const getCurrentValue = () => {
    const currentBalance = getCurrentBalance();
    const boughtBalance = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.quantityBought * currentAsset.priceBought,
      0
    );
    return (currentBalance - boughtBalance).toFixed(2);
  };
  const getPercentageChange = () => {
    const currentBalance = getCurrentBalance();
    const boughtBalance = assets.reduce(
      (total, currentAsset) =>
        total + currentAsset.quantityBought * currentAsset.priceBought,
      0
    );
    return (
      ((currentBalance - boughtBalance) / boughtBalance) * 100 || 0
    ).toFixed(2);
  };
  return (
    <View>
      <FlatList
        data={assets}
        renderItem={({ item }) => <PortfolioAssetItem assetItem={item} />}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.balanceContainer}>
              <View>
                <Text style={styles.currentBalance}>Current Balance</Text>
                <Text style={styles.currentBalanceValue}>
                  ${getCurrentBalance()}
                </Text>
                <Text
                  style={{
                    ...styles.valueChange,
                    color: getPercentageChange() >= 0 ? "#16c784" : "#e74c3c",
                  }}
                >
                  ${getCurrentValue()} (All Time)
                </Text>
              </View>
              <View
                style={{
                  ...styles.priceChangePercentageContainer,
                  backgroundColor:
                    getPercentageChange() >= 0 ? "#16c784" : "#e74c3c",
                }}
              >
                <AntDesign
                  name={"arrowup"}
                  size={12}
                  color={"white"}
                  style={{ alignSelf: "center" }}
                />
                <Text style={styles.percentageChange}>
                  {getPercentageChange()}%
                </Text>
              </View>
            </View>
            <View style={styles.assetsLabelContainer}>
              <Text style={styles.assetsLabel}>Your Assets</Text>
            </View>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("AddNewAssetScreen")}
          >
            <Text style={styles.buttonText}>Add New Asset</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}
