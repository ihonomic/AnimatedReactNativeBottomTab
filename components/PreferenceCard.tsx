import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES, TYPOGRAPHY } from "../theme";
import { CancelIcon } from "../assets/svgs";

const PreferenceCard = ({ item }: { item: any }) => {
  return (
    <View style={styles.bg}>
      <ImageBackground
        source={{ uri: item.image }}
        style={{ width: "100%", height: 104 }}
        resizeMode="cover"
        imageStyle={{
          borderTopLeftRadius: SIZES.xs,
          borderTopRightRadius: SIZES.xs,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 5,
            top: 5,
          }}
        >
          <CancelIcon />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          marginVertical: SIZES.sm,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={[TYPOGRAPHY.h2, { textAlign: "center" }]}>Nini Cho</Text>
        <Text style={[TYPOGRAPHY.p, { fontSize: 10 }]}>
          Chief chef, Nini pastries
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primaryLight,
            width: 150,
            height: 25,
            borderRadius: SIZES.md,
            marginVertical: SIZES.md,
            justifyContent: "center",
            ...SHADOWS.dark,
          }}
        >
          <Text
            style={[TYPOGRAPHY.p, { textAlign: "center", color: COLORS.white }]}
          >
            Send Friend Request
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreferenceCard;

const styles = StyleSheet.create({
  bg: {
    width: 164,
    height: 200,
    borderRadius: SIZES.xs,
    marginHorizontal: SIZES.xxs,
    backgroundColor: COLORS.white,
    ...SHADOWS.dark,
  },
});
