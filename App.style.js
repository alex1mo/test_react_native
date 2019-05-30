import { Dimensions, StyleSheet } from "react-native";

let { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width
  },

  header: {
    height: 50,
    marginTop: 20,
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },

  back: {
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 50
  },

  camera: {
    paddingTop: 3,
    paddingBottom: 3,
    height: 50,
    width: 50
  },

  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },

  item: {
    margin: 10,
    height: 100,
    width: 100,
    borderRadius: 50
  }
});
