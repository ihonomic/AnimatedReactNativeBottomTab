import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { COLORS, SHADOWS, SIZES, TYPOGRAPHY } from "../theme";
import { CommentIcon, DownloadIcon, LikeIcon, ShareIcon } from "../assets/svgs";
import AvatarOnline from "./AvatarOnline";
import { FontAwesome5 } from "@expo/vector-icons";

const FeedCard = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={{ ...SHADOWS.dark }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AvatarOnline
            image={"https://source.unsplash.com/random?default_picture"}
          />
          <View style={{ marginLeft: SIZES.md }}>
            <Text style={[TYPOGRAPHY.h2]}>Lagatha_24</Text>
            <Text style={[TYPOGRAPHY.p, { color: "#6E6E6E" }]}>
              Florida • Jan 3rd, 12:14pm
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primaryLight,
            height: 33,
            width: 60,
            borderRadius: SIZES.xs,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={[TYPOGRAPHY.p, { color: COLORS.white }]}>Follow</Text>
        </TouchableOpacity>
      </View>

      <Text style={[TYPOGRAPHY.p, { marginVertical: SIZES.md }]}>
        My process for making birthday cakes, take a look, my recipe is attached
        to this post.
      </Text>

      <ImageBackground
        source={{ uri: "https://source.unsplash.com/random?video" }}
        style={{
          width: width - 30,
          height: 241,
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
        imageStyle={{ borderRadius: SIZES.xs }}
      >
        <FontAwesome5
          name="play"
          size={30}
          color={COLORS.primary}
          onPress={() => {}}
        />
      </ImageBackground>

      <View
        style={{
          marginVertical: SIZES.xxs,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: COLORS.secondary }}>
            <Text style={{ fontWeight: "bold" }}>299K</Text> views{" "}
            <Text style={{ fontWeight: "bold" }}>• </Text>
            <Text style={{ fontWeight: "bold" }}>29K</Text> likes{" "}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>
            <Text style={{ fontWeight: "bold" }}>11k</Text> Comments{" "}
            <Text style={{ fontWeight: "bold" }}>• </Text>
            <Text style={{ fontWeight: "bold" }}>2.5K</Text> Downloads{" "}
          </Text>
        </View>
      </View>

      {/* Icons  */}
      <View
        style={{
          margin: SIZES.xxs,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <LikeIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <CommentIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <DownloadIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <ShareIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
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
