import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Feed,
  Chats,
  Bookmarks,
  Profile,
  DetailedChat,
  LiveVideo,
} from "./screens";

import { COLORS, } from "./theme";
import { BookmarkIcon, ChatIcon, FeedIcon, ProfileIcon } from "./assets/svgs";
import { createStackNavigator } from "@react-navigation/stack";
import AddButton from "./components/AddButton";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTabMenu } from "./context/TabContext";


const getIconColor = focused => ({
  color: focused ? COLORS.primary : COLORS.black,
});

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          //  headerTitleStyle: { ...customHeaderTitleStyle },
          headerBackTitle: " ",
          headerTintColor: COLORS.black, // COLOR OF THE ALL HEADER TEXT
          headerStyle: {
            backgroundColor: COLORS.white,
          },
        }}
      >
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="DetailedChat"
          component={DetailedChat} />
        <Stack.Screen
          name="LiveVideo"
          component={LiveVideo}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const LandingScreen = () => {
  const { opened, toggleOpened } = useTabMenu();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <FeedIcon color={getIconColor(focused).color} />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <ChatIcon color={getIconColor(focused).color} />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Feed}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => (
            <AddButton opened={opened} toggleOpened={toggleOpened} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <BookmarkIcon color={getIconColor(focused).color} />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <ProfileIcon color={getIconColor(focused).color} />
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
    </Tab.Navigator>

  );
};



const styles = StyleSheet.create({
  tabBar: {
    // position: 'absolute',
    // padding: 0,
    // left: 16,
    // right: 16,
    // bottom: 32,
    // height: 56,
    // borderRadius: 16,
    backgroundColor: COLORS.white,
    borderTopColor: "transparent",
    shadowColor: COLORS.black,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tabIconContainer: {
    position: "absolute",
    top: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
})




