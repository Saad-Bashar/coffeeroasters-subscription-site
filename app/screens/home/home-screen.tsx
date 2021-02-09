import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import Logo from './logo'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const HEADER: ViewStyle = {
  padding: spacing[4]
}

export const HomeScreen = observer(function HomeScreen() {
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADER}>
        <Logo />
      </View>
      <View>
        <Text preset="bold">
          Testing the font
        </Text>
      </View>
    </Screen>
  )
})
