import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../styles/auth.styles";

export default function Login() {
  return (
    <View style={Styles.container}>
      <Image source={require("../images/GuyGuy.png")} style={Styles.GuyGuy} />
      <Image source={require("../images/GuyStop.png")} style={Styles.GuyStop} />
      <Image
        source={require("../images/GuyStop.png")}
        style={Styles.GuyStopSm}
      />
      <Image source={require("../images/Nerd.png")} style={Styles.NerdSm} />
      <Image source={require("../images/Nerd.png")} style={Styles.NerdSm2} />
      <Text style={Styles.title}>Connect With Friends {"\n"}and Family</Text>
      <Text style={Styles.description}>
        Connecting with Family and Friends {"\n"} from all over the world
      </Text>

      <View style={Styles.buttonContainer}>
        <TouchableOpacity style={Styles.nextButton}>
          <Text style={Styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.skipButton}>
          <Text style={Styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
