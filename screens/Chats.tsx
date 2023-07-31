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
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import RecentChatCard from "../components/RecentChatCard";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const Chats = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={data}
          ListHeaderComponent={() => <FilterUsers />}
          ListHeaderComponentStyle={{ backgroundColor: "#f7f7f7" }}
          renderItem={({ item }: { item: any }) => (
            <RecentChatCard item={item} />
          )}
          keyExtractor={(item: any) => item.id}
          alwaysBounceVertical={true}
          // StickyHeaderComponent={<View></View>}
          stickyHeaderIndices={[0]}
          ListFooterComponent={<View style={{ height: 90 }} />}
        />
      </SafeAreaView>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const FilterUsers = () => {
  return (
    <TextInput
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.lg,
        borderColor: COLORS.darkGray,
        borderWidth: 2,
        marginVertical: 23,
        marginHorizontal: 12,
      }}
      activeUnderlineColor={"transparent"}
      placeholder="Search"
      left={
        <TextInput.Icon
          icon={() => (
            <AntDesign name="search1" size={25} color={COLORS.primary} />
          )}
        />
      }
      onChangeText={(text) => {}}
    />
  );
};

const data = [
  {
    id: "1",
    image: require("../assets/person3.jpg"),
    name: "Lagatha_24",
    last_message: "Yes, I'll be available by 3pm",
    time: "06:57 am",
    sender: false,
    count_message: 2,
  },
  {
    id: "2",
    image: require("../assets/person3.jpg"),
    name: "silvercon34",
    last_message: "americano",
    time: "10:32 pm",
    sender: true,
    count_message: 2,
  },
  {
    id: "3",
    image: require("../assets/person3.jpg"),
    name: "whitefish664",
    last_message: "Yeap, Go home",
    time: "12:32 pm",
    sender: false,
    count_message: 14,
  },
  {
    id: "4",
    image: require("../assets/person3.jpg"),
    name: "Erik_18",
    last_message: "Sure, let's meet at the park!",
    time: "09:30 am",
    sender: true,
    count_message: 1,
  },
  {
    id: "5",
    image: require("../assets/person3.jpg"),
    name: "Anna_33",
    last_message: "I'll bring some snacks.",
    time: "10:45 am",
    sender: true,
    count_message: 3,
  },

  {
    id: "32",
    image: require("../assets/person3.jpg"),
    name: "Lagatha_24",
    last_message: "Yes, I'll be available by 3pm",
    time: "06:57 am",
    sender: false,
    count_message: 2,
  },
  {
    id: "28",
    image: require("../assets/person3.jpg"),
    name: "Erik_18",
    last_message: "Sure, let's meet at the park!",
    time: "09:30 am",
    sender: true,
    count_message: 1,
  },
  {
    id: "34",
    image: require("../assets/person3.jpg"),
    name: "Anna_33",
    last_message: "I'll bring some snacks.",
    time: "10:45 am",
    sender: true,
    count_message: 3,
  },
  {
    id: "45",
    image: require("../assets/person3.jpg"),
    name: "John_29",
    last_message: "See you at the party tonight!",
    time: "12:15 pm",
    sender: false,
    count_message: 1,
  },
  {
    id: "58",
    image: require("../assets/person3.jpg"),
    name: "Sophia_22",
    last_message: "I'm looking forward to our trip!",
    time: "02:00 pm",
    sender: false,
    count_message: 0,
  },
  {
    id: "6",
    image: require("../assets/person3.jpg"),
    name: "Alex_25",
    last_message: "Let's have a video call later.",
    time: "03:20 pm",
    sender: true,
    count_message: 5,
  },
  {
    id: "7",
    image: require("../assets/person3.jpg"),
    name: "Emily_27",
    last_message: "Don't forget to bring the documents!",
    time: "04:10 pm",
    sender: true,
    count_message: 2,
  },
  {
    id: "8",
    image: require("../assets/person3.jpg"),
    name: "Michael_31",
    last_message: "Can you please pick up some groceries?",
    time: "05:45 pm",
    sender: false,
    count_message: 0,
  },
  {
    id: "9",
    image: "https://source.unsplash.com/random?girl",
    name: "Emma_19",
    last_message: "Happy birthday! 🎉",
    time: "07:30 pm",
    sender: false,
    count_message: 1,
  },
  {
    id: "10",
    image: require("../assets/person3.jpg"),
    name: "Daniel_26",
    last_message: "Sorry, I can't make it to the meeting.",
    time: "08:15 pm",
    sender: true,
    count_message: 3,
  },
  {
    id: "11",
    image: require("../assets/person3.jpg"),
    name: "Olivia_30",
    last_message: "Let's catch up over coffee tomorrow.",
    time: "09:05 pm",
    sender: true,
    count_message: 0,
  },
  {
    id: "12",
    image: require("../assets/person3.jpg"),
    name: "David_28",
    last_message: "Thanks for your help!",
    time: "10:20 pm",
    sender: false,
    count_message: 1,
  },
  {
    id: "13",
    image: require("../assets/person3.jpg"),
    name: "Ava_23",
    last_message: "Check out this cool website!",
    time: "11:30 pm",
    sender: false,
    count_message: 2,
  },
  {
    id: "14",
    image: require("../assets/person3.jpg"),
    name: "Noah_20",
    last_message: "What's the plan for the weekend?",
    time: "11:59 pm",
    sender: true,
    count_message: 1,
  },
  {
    id: "15",
    image: require("../assets/person3.jpg"),
    name: "Isabella_35",
    last_message: "I'm excited about the concert!",
    time: "12:40 am",
    sender: true,
    count_message: 0,
  },
  {
    id: "16",
    image: require("../assets/person3.jpg"),
    name: "James_32",
    last_message: "Have a safe trip!",
    time: "01:15 am",
    sender: false,
    count_message: 4,
  },
];
