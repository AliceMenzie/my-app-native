// required first import for stack navigation
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./screens/SignIn";
import SignOut from "./screens/Today/SignOut";
import Messages from "./screens/Messages/Messages";
import Today from "./screens/Today/Today";
import { Ionicons, Entypo } from "@expo/vector-icons";

// Define the config
const config = {
  useSystemColorMode: true,
  // initialColorMode: "dark",
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

interface HomeNavProps {
  setIsSignedIn: any;
}

const HomeNav = ({ setIsSignedIn }: HomeNavProps) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute", backgroundColor: "#2e3138" },
        tabBarActiveTintColor: "#b2e6d4",
        tabBarInactiveTintColor: "#e1b07e",
      }}
    >
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#2e3138",
            borderColor: "#2e3138",
            borderEndColor: "#2e3138",
          },
          headerTintColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Ionicons name="today" size={24} color={color} />
          ),
        }}
        name="Today"
        component={Today}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#2e3138",
            borderColor: "#2e3138",
            borderEndColor: "#2e3138",
          },
          headerTintColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Entypo name="message" size={24} color={color} />
          ),
        }}
        name="Messages"
        component={Messages}
      />
      <Tab.Screen
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        })}
        name="Settings"
        children={() => <SignOut setIsSignedIn={setIsSignedIn} />}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const Stack = createStackNavigator();
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name="Home"
              children={() => <HomeNav setIsSignedIn={setIsSignedIn} />}
              options={() => ({
                headerShown: false,
              })}
            />
          ) : (
            <Stack.Screen
              name="SignIn"
              children={() => <SignIn setIsSignedIn={setIsSignedIn} />}
              options={() => ({
                headerShown: false,
              })}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
