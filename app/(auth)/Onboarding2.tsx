import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "../styles/auth.styles";

export default function Onboarding2() {
  return (
    <View style={Styles.container}>
      {/* Interactive Content */}

      <Image source={require("../images/GuyGuy.png")} style={Styles.GuyGuy} />
      <Image source={require("../images/Nerd.png")} style={Styles.GuyStop} />

      <Image source={require("../images/Nerd.png")} style={Styles.NerdSm} />
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
          <Text style={Styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.skipButton}>
          <Text style={Styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.Disc}>
        <Text style={Styles.DiscText}>Already Have An Account?</Text>
        <Text style={Styles.DiscPrompt}>Sign In</Text>
      </View>
    </View>
  );
}
