import "react-native-reanimated";
import { StyleSheet, View, FlatList } from "react-native";
import CoinDetailedScreen from "./src/screens/CoinDetailedScreen";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation";
import WatchlistProvider from "./src/Contexts/WatchlistContext";

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
    >
      <WatchlistProvider>
        <View style={styles.container}>
          <Navigation />
        </View>
      </WatchlistProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
