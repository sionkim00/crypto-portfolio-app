import { StyleSheet, View } from "react-native";
import CoinItem from "./src/components/CoinItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CoinItem name={"Lukas"} />
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
