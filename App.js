import { StyleSheet, View, FlatList } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import CoinDetailedScreen from "./src/screens/CoinDetailedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailedScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
