import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import { BellIcons, SearchAdjustIcon } from "../assets/svgs";
import {
  DiscoverCard,
  FeedCard,
  LiveCard,
  PreferenceCard,
} from "../components";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const Feed = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.welcomeHeader}>
          <View>
            <Text style={TYPOGRAPHY.h1}>Hello Hamza</Text>
            <Text style={TYPOGRAPHY.p}>
              Who do you want to cook with today?
            </Text>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <BellIcons />
          </TouchableOpacity>
        </View>

        {/* SEARCH  */}

        <TextInput
          style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.lg,
            borderColor: COLORS.darkGray,
            borderWidth: 2,
          }}
          activeUnderlineColor={"transparent"}
          underlineColor="transparent"
          underlineColorAndroid="transparent"
          placeholder="Search"
          left={
            <TextInput.Icon
              icon={() => <AntDesign name="search1" size={25} />}
            />
          }
          right={<TextInput.Icon icon={() => <SearchAdjustIcon />} />}
          onChangeText={(text) => {}}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text style={TYPOGRAPHY.h2}>Discover</Text>
            <Text
              style={[TYPOGRAPHY.p, { color: COLORS.primary }]}
              onPress={() => {}}
            >
              See all
            </Text>
          </View>

          <View style={{ marginBottom: SIZES.md }}>
            <FlatList
              data={discoverData}
              renderItem={({ item }) => <DiscoverCard item={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.section}>
            <Text style={TYPOGRAPHY.h2}>Trending Posts</Text>
            <Text
              style={[TYPOGRAPHY.p, { color: COLORS.primary }]}
              onPress={() => {}}
            >
              See all
            </Text>
          </View>

          <View>
            <FeedCard />
          </View>

          <View style={styles.section}>
            <Text style={TYPOGRAPHY.h2}>Based on your preference</Text>
            <Text
              style={[TYPOGRAPHY.p, { color: COLORS.primary }]}
              onPress={() => {}}
            >
              See all
            </Text>
          </View>

          <View style={{ marginBottom: SIZES.md }}>
            <FlatList
              data={discoverData}
              renderItem={({ item }) => <PreferenceCard item={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.section}>
            <Text style={TYPOGRAPHY.h2}>Currently live</Text>
            <Text
              style={[TYPOGRAPHY.p, { color: COLORS.primary }]}
              onPress={() => {}}
            >
              See all
            </Text>
          </View>

          <View>
            <FlatList
              data={discoverData}
              renderItem={({ item }) => <LiveCard item={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{ marginVertical: 80 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: SIZES.sm,
  },
  welcomeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.md,
    marginBottom: SIZES.xxs,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.md,
  },
});

const discoverData = [
  {
    id: "1",
    name: "Sammy Zayn",
    age: "22",
    city: "SOUTHAMPTON",
    image: require("../assets/person2.jpg"),
  },
  {
    id: "2",
    name: "Clara simps",
    age: "25",
    city: "LONDON",
    image: require("../assets/person1.jpg"),
  },
  {
    id: "3",
    name: "Joshzy",
    age: "19",
    city: "FLORIDA",
    image: require("../assets/musician.jpg"),
  },
];
