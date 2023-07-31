import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import { useNavigation } from "@react-navigation/native";
import AvatarOnline from "../components/AvatarOnline";
import { SendLiveMessageIcon } from "../assets/svgs";
import {
  LeftMDLove,
  LeftXLLove,
  LeftXSLove,
  RightMDLove,
  RightXLLove,
  RightXSLove,
} from "../assets/svgs/liveSvg";

const LiveVideo = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/cooking.jpg")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
      imageStyle={{ flex: 1 }}
    >

      <StatusBar barStyle="light-content" />

      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            margin: SIZES.sm,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AvatarOnline image={require("../assets/person2.jpg")} />
          <View style={styles.liveBadge}>
            <Text style={[TYPOGRAPHY.h2, { color: COLORS.white }]}>
              LIVE • 00:41
            </Text>
          </View>
          <Feather
            name="x"
            size={32}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 20,
            flexDirection: "row",
            padding: SIZES.md,
          }}
        >
          <View style={{ flex: 0.8, width: "100%" }}>
            <Onliner />
            <Onliner />
            <Onliner />

            <View style={styles.input} />
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ height: 110 }} />
            <View>
              <LeftXSLove />
              <RightXSLove />
            </View>

            <View style={{ flexDirection: "row" }}>
              <LeftMDLove />
              <RightMDLove />
            </View>

            <View style={{ flexDirection: "row" }}>
              <LeftXLLove />
              <RightXLLove />
            </View>

            <TouchableOpacity>
              <SendLiveMessageIcon />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LiveVideo;

const Onliner = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: SIZES.sm,
      }}
    >
      <AvatarOnline image={require("../assets/person3.jpg")} />
      <View style={{ marginLeft: SIZES.xxs }}>
        <Text style={[TYPOGRAPHY.h2, { color: COLORS.white }]}>
          crazyelephant681
        </Text>
        <Text style={[TYPOGRAPHY.p, { color: COLORS.white }]}>Florida</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  liveBadge: {
    backgroundColor: "#F44747",
    height: 24,
    width: 96,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  input: {
    borderRadius: SIZES.sm,
    borderColor: COLORS.white,
    borderWidth: 2,
    height: 40,
    marginVertical: SIZES.sm,
    marginHorizontal: SIZES.sm,
  },
});
