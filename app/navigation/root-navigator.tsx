/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your MainNavigator) which the user
 * will use once logged in.
 */
import React from "react"
import { StatusBar } from 'react-native'
import { NavigationContainer, NavigationContainerRef, } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "../screens/home/home-screen"
import { AboutUsScreen, CreateAPlanScreen } from "../screens"
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { color } from "../theme/"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type RootParamList = {
  mainStack: undefined
}

const Stack = createStackNavigator<RootParamList>()
const Tab = createBottomTabNavigator()

const RootStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: {route: any}) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home"
          } else if (route.name === "Create") {
            iconName= "pluscircle"
          } else if (route.name === "About") {
            iconName = "infocirlceo"
          }
          return <AntDesign name={iconName} size={22} color={focused ? color.primary : 'black'} />
        },
      })}
      tabBarOptions={{
        activeTintColor: color.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutUsScreen} />
      <Tab.Screen name="Create" component={CreateAPlanScreen} />
    </Tab.Navigator>
  )
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
      <StatusBar barStyle="dark"  />
    </NavigationContainer>
  )
})

RootNavigator.displayName = "RootNavigator"
