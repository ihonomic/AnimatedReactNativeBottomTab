import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  GiftedChat,
  Bubble,
  Actions,
  Send,
  Avatar as ChatAvatar,
} from "react-native-gifted-chat";
import { Avatar } from "react-native-paper";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons, Octicons
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AvatarOnline from "../components/AvatarOnline";
import { SendLiveMessageIcon } from "../assets/svgs";

const ParentDetailedChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  //  TOP LAYOUT
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: SIZES.xxs,
            marginLeft: -10
          }}
        >
          <Ionicons name="call-outline" color={COLORS.black} size={25} style={{ marginHorizontal: 12 }} />
          <Octicons name="device-camera-video" color={COLORS.black} size={25} style={{ marginHorizontal: 12 }} />
          <Entypo name="dots-three-vertical" color={COLORS.black} size={25} style={{ marginHorizontal: 12 }} />
        </View>
      ),
      headerTitle: (props) => (
        <CenterChatHeader
          group_name={"Lagatha_24"}
          group_photo={"https://source.unsplash.com/random/?chef"}
          group_members={"Active now"}
          {...props}
        />
      ),
    });
  }, []);

  // Render bubble
  const renderBubble = (props) => {
    const message_sender_id = props.currentMessage.user._id;
    return (
      <Bubble
        {...props}
        position={message_sender_id == 1 ? "right" : "left"}
        wrapperStyle={{
          right: {
            borderTopRightRadius: 15,
            backgroundColor: "#EBEBEB",
          },
          left: {
            borderTopLeftRadius: 15,
            backgroundColor: COLORS.black
          },
        }}
        textStyle={{
          right: { ...TYPOGRAPHY.h2, color: COLORS.black },
          left: { ...TYPOGRAPHY.h2, color: COLORS.white },
        }}
        timeTextStyle={{
          right: { color: COLORS.darkGray },
          left: { color: COLORS.white },
        }}
        containerToPreviousStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
        containerToNextStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
        containerStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
      />
    );
  };

  // RENDER SEND
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <SendLiveMessageIcon />
      </Send>
    );
  };

  // RENDER AVATAR
  const renderAvatar = (props) => {
    return (
      <ChatAvatar
        {...props}
        onPressAvatar={(props) => {
          // console.log(props);
        }}
      />
    );
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Good content Hamza",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Parent Native",
          avatar: "https://source.unsplash.com/random/?agent",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderSend={renderSend}
        scrollToBottom
        textInputStyle={{
          backgroundColor: COLORS.white,
          borderRadius: 20,
          borderColor: COLORS.darkGray,
          borderWidth: 1,
          color: COLORS.black,
          paddingHorizontal: 10,
          // marginBottom: 20,
        }}
        renderBubble={renderBubble}
        renderAvatar={renderAvatar}
        wrapInSafeArea={false}
      // scrollToBottomComponent={scrollToBottomComponent}
      // bottomOffset={insets.bottom}
      // renderActions={renderActions}
      // showUserAvatar={true}
      />
    </>
  );
};

export default ParentDetailedChatScreen;

const styles = StyleSheet.create({});

const CenterChatHeader = ({
  group_name,
  group_photo,
  group_members,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        left: -70,
      }}
    >
      <AvatarOnline image={require("../assets/person3.jpg")} />
      <View style={{ marginLeft: SIZES.xxs }}>
        <Text numberOfLines={1} style={{ ...TYPOGRAPHY.h2 }}>
          {group_name}
        </Text>
        <Text numberOfLines={1} style={{ ...TYPOGRAPHY.p, color: "gray" }}>
          {group_members}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
