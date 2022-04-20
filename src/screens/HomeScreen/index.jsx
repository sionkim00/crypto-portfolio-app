import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import CoinItem from "../../components/CoinItem";
import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";
import { getMarketData } from "../../services/requests";

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (page) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(page);
    setCoins([...coins, ...coinsData]);
    setLoading(false);
  };
  const refreshCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
      onEndReached={() => fetchCoins(coins.length / 50 + 1)}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="white"
          onRefresh={refreshCoins}
        />
      }
    />
  );
}
