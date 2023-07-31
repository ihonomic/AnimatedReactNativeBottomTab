import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { SIZES, TYPOGRAPHY } from "../theme";

const AvatarOnline = ({ image }: { image: string }) => {
  return (
    <View>
      <Avatar.Image size={35} source={image} />
      <View style={styles.online} />
    </View>
  );
};

export default AvatarOnline;

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
