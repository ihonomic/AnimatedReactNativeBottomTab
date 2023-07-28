import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES, TYPOGRAPHY } from "../theme";
import { useNavigation } from "@react-navigation/native";
import AvatarOnline from "./AvatarOnline";

const LiveCard = ({ item }: { item: any }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bg}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: SIZES.xxs,
        }}
      >
        <AvatarOnline image={"https://source.unsplash.com/random?lady"} />
        <View style={{ marginLeft: SIZES.md }}>
          <Text
            style={[
              TYPOGRAPHY.h2,
              { fontWeight: "bold", fontSize: 17, marginBottom: 2 },
            ]}
          >
            Lagatha_24
          </Text>
          <Text style={[TYPOGRAPHY.p, { color: "#6E6E6E" }]}>
            Florida • Currently live
          </Text>
        </View>
      </View>

      <ImageBackground
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: "100%", height: 180 }}
        resizeMode="cover"
        imageStyle={{}}
      >
        <View
          style={{
            backgroundColor: "#F44747",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 5,
            top: 5,
            height: 24,
            width: 42,
            margin: 10,
            borderColor: COLORS.white,
            borderWidth: 1,
            borderRadius: 7,
          }}
        >
          <Text style={[TYPOGRAPHY.p, { fontSize: 15, color: COLORS.white }]}>
            Live
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          alignItems: "center",
          alignSelf: "center",
          marginVertical: 12,
        }}
      >
        <Text style={[TYPOGRAPHY.h2, { textAlign: "center" }]}>
          Outdoor cooks
        </Text>
        <Text
          style={[
            TYPOGRAPHY.p,
            { textAlign: "center", marginHorizontal: SIZES.xxs },
          ]}
        >
          I’ll be showing how I prepare outdoor meals at home with my friends.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primaryLight,
            width: 230,
            height: 25,
            borderRadius: SIZES.md,
            marginVertical: SIZES.md,
            justifyContent: "center",
            ...SHADOWS.dark,
          }}
          onPress={() => navigation.navigate("LiveVideo")}
        >
          <Text
            style={[TYPOGRAPHY.p, { textAlign: "center", color: COLORS.white }]}
          >
            Request to Join
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LiveCard;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.white,
    width: 264,
    height: 356,
    borderRadius: SIZES.xxs,
    ...SHADOWS.dark,
    marginHorizontal: SIZES.xxs,
  },
  online: {
    backgroundColor: "#36F855",
    height: 10,
    width: 10,
    borderRadius: 12,
    position: "absolute",
    bottom: -3,
    left: 20,
  },
});
