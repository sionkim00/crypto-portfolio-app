import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import PortfolioAssetItem from "../PortfolioAssetItem";
import styles from "./styles";

export default function PortfolioAssetsList() {
  return (
    <View>
      <FlatList
        data={[{ id: "bitcoin" }]}
        renderItem={({ item }) => <PortfolioAssetItem assetItem={item} />}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.balanceContainer}>
              <View>
                <Text style={styles.currentBalance}>Current Balance</Text>
                <Text style={styles.currentBalanceValue}>$20000</Text>
                <Text style={styles.valueChange}>$1000 (All Time)</Text>
              </View>
              <View style={styles.priceChangePercentageContainer}>
                <AntDesign
                  name={"arrowup"}
                  size={12}
                  color={"white"}
                  style={{ alignSelf: "center" }}
                />
                <Text style={styles.percentageChange}>1.2%</Text>
              </View>
            </View>
            <View style={styles.assetsLabelContainer}>
              <Text style={styles.assetsLabel}>Your Assets</Text>
            </View>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add New Asset</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}
