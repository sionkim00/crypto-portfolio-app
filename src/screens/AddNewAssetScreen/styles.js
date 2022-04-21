import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  dropdownContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  item: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#1e1e1e",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 5,
  },
  textInput: {
    padding: 12,
    borderWidth: 1.5,
    borderColor: "#444",
    borderRadius: 5,
    backgroundColor: "#1e1e1e",
    color: "white",
  },
  ticker: {
    color: "grey",
    fontWeight: "700",
    fontSize: 20,
    marginTop: 25,
    marginLeft: 5,
  },
  quantityContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  buttonContainer: {
    backgroundColor: "#4169e1",
    padding: 10,
    alignItems: "center",
    marginVertical: 40,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  coinPriceText: {
    color: "grey",
    marginTop: 15,
  },
});
export default styles;
