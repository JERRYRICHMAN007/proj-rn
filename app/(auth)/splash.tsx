import React from "react";
import { View, Text, Image } from "react-native";

import { Styles } from "../../styles/auth.styles";

export default function Splash() {
  return (
    <View style={Styles.splashContainer}>
      <View style={Styles.Smiley1}>
        <Image
          source={require("../../assets/images/images/green smiley.png")}
        />
      </View>
      <View style={Styles.Smiley2}>
        <Image
          source={require("../../assets/images/images/green smiley.png")}
        />
      </View>
      <View style={Styles.Smiley3}>
        <Image
          source={require("../../assets/images/images/green smiley.png")}
        />
      </View>
      <View style={Styles.Smiley4}>
        <Image
          source={require("../../assets/images/images/green smiley.png")}
        />
      </View>
      <View style={Styles.Smiley5}>
        <Image
          source={require("../../assets/images/images/green smiley.png")}
        />
      </View>
      <View style={Styles.Smiley6}>
        <Image
          source={require("../../assets/images/images/green smiley.png")}
        />
      </View>
      <View style={Styles.Smiley7}>
        <Image
          source={require("../../assets/images/images/green smiley.png")}
        />
      </View>
      <View>
        <Text style={Styles.splashText}>Socially</Text>
      </View>
    </View>
  );
}
