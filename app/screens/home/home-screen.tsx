import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, ImageBackground, Dimensions, ImageStyle, TextStyle, } from "react-native"
import { Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import Logo from './logo'
import LANDINGIMAGE from './image-hero-coffeepress.jpg'
import { Colors } from "react-native/Libraries/NewAppScreen"

const { width } = Dimensions.get('window')

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const HEADER: ViewStyle = {
  paddingVertical: spacing[5],
  paddingHorizontal: spacing[4]
}

const LANDING_IMAGE_BODY: ViewStyle = {
  padding: spacing[4]
}

const LANDING_IMAGE_BODY_TEXT: TextStyle = {
  lineHeight: 25,
  textAlign: "center"
}

const IMAGE_ASPECT_RATIO = 327 / 500
const IMAGE_WIDTH = width - spacing[4]
const IMAGE_HEIGHT = IMAGE_WIDTH / IMAGE_ASPECT_RATIO
const LANDING_IMAGE_STYLE: ImageStyle = {
  width: IMAGE_WIDTH,
  height: IMAGE_HEIGHT,
  alignSelf: 'center',
  borderRadius: 10,
  resizeMode: 'contain',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
}

export const HomeScreen = observer(function HomeScreen() {
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADER}>
        <Logo />
      </View>
      <ImageBackground
        style={LANDING_IMAGE_STYLE}
        source={LANDINGIMAGE}
      >
        <View>
          <Text preset="h2" textColor={color.lightCream}>Great Coffee</Text>
          <Text preset="h2" textColor={color.lightCream}>made simple.</Text>  
        </View>
        <View style={LANDING_IMAGE_BODY}>
          <Text style={LANDING_IMAGE_BODY_TEXT} textColor={color.lightCream}>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan 
            coffees from our best roasters delivered directly to your door, at your schedule.
          </Text>
        </View> 
      </ImageBackground>
    </Screen>
  )
})
