import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../styles/auth.styles";
import { router } from "expo-router";

export default function Onboarding2() {
  return (
    <View style={Styles.container}>
      {/* Interactive Content */}

      <Image source={require("../images/Nerd.png")} style={Styles.GuyGuy} />
      <Image source={require("../images/GuyGuy.png")} style={Styles.GuyStop} />

      <Image source={require("../images/GuyStop.png")} style={Styles.NerdSm} />
      <Image source={require("../images/Nerd.png")} style={Styles.NerdSmm2} />

      {/* Heading and Description */}
      <Text style={Styles.title2}>Make new Friends {"\n"}with ease</Text>
      <Text style={Styles.description2}>
        Connecting with Family and Friends {"\n"} from all over the world
      </Text>

      {/* Button */}
      <View style={Styles.buttonContainer}>
        {/* Next Button */}
        <TouchableOpacity style={Styles.nextButton}>
          <Text style={Styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.Disc}>
        <Text style={Styles.DiscText}>Already Have An Account?</Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={Styles.DiscPrompt}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
