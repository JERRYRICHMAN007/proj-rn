import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  GuyGuy: {
    width: 50,
    height: 50,
    marginTop: -100,
    marginLeft: 200,
    backgroundColor: "#006175",
    borderRadius: 100,
    resizeMode: "contain",
  },
  GuyStop: {
    width: 160,
    height: 160,
    marginTop: 0,
    marginRight: 0,
    backgroundColor: "#DBE9EC",
    borderRadius: 100,
    resizeMode: "cover",
  },
  GuyStopSm: {
    width: 30,
    height: 30,
    marginTop: -70,
    marginLeft: 280,
    backgroundColor: "#DBE9EC",
    borderRadius: 100,
    resizeMode: "cover",
  },
  NerdSm: {
    width: 70,
    height: 70,
    marginTop: 0,
    marginRight: 250,
    backgroundColor: "#006175",
    borderRadius: 100,
    resizeMode: "cover",
  },
  NerdSm2: {
    width: 50,
    height: 50,
    marginTop: 0,
    marginLeft: 250,
    backgroundColor: "hsl(195, 51.40%, 86.30%)",
    borderRadius: 100,
    resizeMode: "cover",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,

    textAlign: "left",
    marginRight: 100,
    lineHeight: 24,
  },
  description: {
    fontSize: 16,
    color: "gray",
    textAlign: "left",

    marginRight: 50,
    lineHeight: 24,
  },

  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    position: "absolute",
    bottom: 40,
  },

  skipButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderColor: "#000000",
    color: "#000000",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  nextButton: {
    backgroundColor: "#1C6758",
    paddingVertical: 12,
    paddingHorizontal: 24,
    color: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  nextButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
