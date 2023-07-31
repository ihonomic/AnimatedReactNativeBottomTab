import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES, TYPOGRAPHY } from "../theme";

const DiscoverCard = ({ item }: { item: any }) => {
  return (
    <TouchableOpacity style={styles.bg} activeOpacity={0.6}>
      <ImageBackground
        source={item.image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
        imageStyle={{ borderRadius: SIZES.xs }}
      >
        <View
          style={{
            backgroundColor: COLORS.primaryLight,
            width: 60,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderColor: COLORS.white,
            borderWidth: 1,
            borderRadius: 7,
            position: "absolute",
            right: 5,
            top: 5,
          }}
        >
          <Text style={[TYPOGRAPHY.p, { fontSize: 15, color: COLORS.white }]}>
            New
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: SIZES.lg,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={[TYPOGRAPHY.p, { color: COLORS.white, textAlign: "center" }]}
          >
            {item.name} • {item.age}
          </Text>
          <Text style={[TYPOGRAPHY.p, { color: COLORS.white }]}>
            {item.city}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DiscoverCard;

const styles = StyleSheet.create({
  bg: {
    width: 120,
    height: 174,
    borderRadius: SIZES.xs,
    marginHorizontal: SIZES.xxs,
    ...SHADOWS.dark,
  },
});
