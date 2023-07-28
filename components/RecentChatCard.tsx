import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import { Avatar } from "react-native-paper";
import { Badge } from "react-native-paper";
import { DeliveredMessaged } from "../assets/svgs";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types";
import AvatarOnline from "./AvatarOnline";

const RecentChatCard = ({ item }: { item: any }) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ paddingHorizontal: SIZES.sm, marginBottom: SIZES.lg }}
      onPress={() => navigation.navigate("DetailedChat")}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AvatarOnline image={item.image} />
          <View style={{ marginLeft: SIZES.sm }}>
            <Text style={[TYPOGRAPHY.h2]}>{item.name}</Text>
            <Text style={[TYPOGRAPHY.p, { color: "#6E6E6E", marginTop: 3 }]}>
              {item.last_message}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Text style={[TYPOGRAPHY.p, { color: "#6E6E6E", marginBottom: 3 }]}>
            {item.time}
          </Text>
          {item.sender ? (
            <DeliveredMessaged />
          ) : (
            <Badge style={{ backgroundColor: "#F9C32F" }}>
              {item.count_message}
            </Badge>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecentChatCard;

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
