import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../styles/auth.styles";
import { router } from "expo-router";

export default function ConnectScreen() {
  return (
    <View style={Styles.container}>
      {/* Interactive Content */}

      <Image source={require("../images/GuyGuy.png")} style={Styles.GuyGuy} />
      <Image source={require("../images/GuyStop.png")} style={Styles.GuyStop} />
      <Image
        source={require("../images/GuyStop.png")}
        style={Styles.GuyStopSm}
      />
      <Image source={require("../images/Nerd.png")} style={Styles.NerdSm} />
      <Image source={require("../images/Nerd.png")} style={Styles.NerdSm2} />

      {/* Heading and Description */}
      <Text style={Styles.title}>Connect With Friends {"\n"}and Family</Text>
      <Text style={Styles.description}>
        Connecting with Family and Friends {"\n"} from all over the world
      </Text>

      {/* Button */}
      <View style={Styles.buttonContainer}>
        {/* Next Button */}
        <TouchableOpacity
          onPress={() => router.push("/(auth)/Onboarding2")}
          style={Styles.nextButton}
        >
          <Text style={Styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.skipButton}>
          <Text style={Styles.skipText}>Skip</Text>
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
