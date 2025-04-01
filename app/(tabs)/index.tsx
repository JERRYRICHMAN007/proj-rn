import { Text, TouchableOpacity, View, Image } from "react-native";
import { Styles } from "../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>come</Text>
      <TouchableOpacity onPress={() => alert("you touched")}>
        <Text>Press Me</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1742615869855-ad5270a1b2ac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        }}
        style={{
          width: 200,
          height: 200,
          resizeMode: "cover",
        }}
      />
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVhdHVyZXx8fHx8fHx8",
        }}
        style={{
          width: 200,
          height: 200,
          resizeMode: "cover",
        }}
      />

      <Link
        style={{
          color: "white",
          paddingTop: 20,
        }}
        href={"./notifications"}
      >
        Visit Nofications Screen
      </Link>
      <Link
        style={{
          color: "white",
          paddingTop: 20,
        }}
        href={"./profile"}
      >
        Visit Profile Screen
      </Link>
    </View>
  );
}
