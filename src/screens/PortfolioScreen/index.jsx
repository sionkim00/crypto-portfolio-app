import { View, Text } from "react-native";
import React, { Suspense } from "react";
import PortfolioAssetsList from "../../components/PortfolioAssestList";

export default function PortfolioScreen() {
  return (
    <View>
      <Suspense fallback={<Text style={{ color: "white" }}>Loading...</Text>}>
        <PortfolioAssetsList />
      </Suspense>
    </View>
  );
}
