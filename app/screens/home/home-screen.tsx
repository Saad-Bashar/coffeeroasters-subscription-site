import React from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  View,
  Image,
  ImageBackground,
  Dimensions,
  ImageStyle,
  TextStyle,
} from "react-native"
import { Button, HowItWorksWrapper, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import Logo from "./logo"
import { moderateScale, scale } from "react-native-size-matters"
import { LinearGradient } from "expo-linear-gradient"
import { CollectionItem } from "../../components/collection-item/collection-item"
import LANDINGIMAGE from "./image-hero-coffeepress.jpg"
import ESPRESSO from "./image-gran-espresso.png"
import PLANALTO from "./image-planalto.png"
import PICOLLO from "./image-piccollo.png"
import DANCHE from "./image-danche.png"
import BeanSvg from "./bean"
import GiftSvg from "./gift"
import TruckSvg from "./truck"
import MaskedView from "@react-native-community/masked-view"
import { BenfitItem } from "../../components/benefit-item/benefit-item"
import useDevice from "../../hooks/useDevice"

const COLLECTION_DATA = [
  {
    title: "Gran Espresso",
    body: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    image: ESPRESSO,
  },
  {
    title: "Planalto",
    body: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    image: PLANALTO,
  },
  {
    title: "Piccollo",
    body: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
    image: PICOLLO,
  },
  {
    title: "Danche",
    body: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    image: DANCHE,
  },
]

const { width } = Dimensions.get("window")

const GradientText = (props) => (
  <MaskedView maskElement={<Text {...props} />}>
    <LinearGradient colors={["#83888F", " rgba(254, 252, 247, 0.001)"]}>
      <Text {...props} style={[props.style, { opacity: 0 }]} />
    </LinearGradient>
  </MaskedView>
)

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flexGrow: 1,
  paddingBottom: spacing[8],
}
const HEADER: ViewStyle = {
  paddingVertical: spacing[5],
  paddingHorizontal: spacing[4],
}
const LANDING_IMAGE_BODY: ViewStyle = {
  padding: spacing[4],
}
const LANDING_IMAGE_BODY_TEXT: TextStyle = {
  lineHeight: moderateScale(25),
  textAlign: "center",
  fontSize: moderateScale(16),
}
const IMAGE_WIDTH = width - spacing[4]
const IMAGE_HEIGHT = moderateScale(500)
const LANDING_IMAGE_STYLE: ImageStyle = {
  width: IMAGE_WIDTH,
  height: IMAGE_HEIGHT,
  alignSelf: "center",
  borderRadius: 10,
  resizeMode: "contain",
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
}
const LANDING_IMAGE_TEXT_WRAPPER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginBottom: scale(40),
}
const COLLECTION_WRAPPER: ViewStyle = {
  marginTop: moderateScale(32),
}
const COLLECTION_TITLE: TextStyle = {
  textAlign: "center",
}
const COLLECTION_ITEM_WRAPPER: ViewStyle = {
  marginTop: spacing[4],
}
const BENEFIT_ITEM_HEIGHT: number = scale(380) + scale(380 / 2)
const BENFIT_ITEM_TOP: number = scale(200)
const PADDING_SPACE: number = scale(48)
const WHY_CHOSSE_US_WRAPPER: ViewStyle = {
  backgroundColor: "#2C343E",
  position: "absolute",
  height: BENEFIT_ITEM_HEIGHT + BENFIT_ITEM_TOP + PADDING_SPACE,
  left: spacing[4],
  right: spacing[4],
  borderRadius: scale(12),
  padding: spacing[5],
}
const WHY_CHOSSE_US_WRAPPER_TABLET: ViewStyle = {
  backgroundColor: "#2C343E",
  position: "absolute",
  height: scale(120 * 2) + scale(150),
  left: spacing[4],
  right: spacing[4],
  borderRadius: scale(12),
  padding: spacing[5],
}
const BENEFIT_ITEM_WRAPPER: ViewStyle = {
  marginTop: scale(200),
  marginHorizontal: spacing[2],
}
const BENEFIT_ITEM_WRAPPER_TABLET: ViewStyle = {
  marginTop: scale(150),
  marginHorizontal: spacing[2],
}

export const HomeScreen = observer(function HomeScreen() {
  const isTablet = useDevice()

  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADER}>
        <Logo />
      </View>
      <ImageBackground style={LANDING_IMAGE_STYLE} source={LANDINGIMAGE} resizeMode="cover">
        <View style={LANDING_IMAGE_TEXT_WRAPPER}>
          <View>
            <Text preset="h2" textColor={color.lightCream}>
              Great Coffee
            </Text>
            <Text preset="h2" textColor={color.lightCream}>
              made simple.
            </Text>
          </View>
          <View style={LANDING_IMAGE_BODY}>
            <Text style={LANDING_IMAGE_BODY_TEXT} textColor={color.lightCream}>
              Start your mornings with the world’s best coffees. Try our expertly curated artisan
              coffees from our best roasters delivered directly to your door, at your schedule.
            </Text>
          </View>
        </View>

        <Button text="Create your plan" />
      </ImageBackground>

      <View style={COLLECTION_WRAPPER}>
        <View style={COLLECTION_ITEM_WRAPPER}>
          <GradientText
            preset="h2"
            centered
            style={isTablet && { fontSize: scale(44), lineHeight: scale(60) }}
          >
            our collection
          </GradientText>
          <View style={[{ marginHorizontal: spacing[5] }, isTablet && { marginTop: -scale(44) }]}>
            {COLLECTION_DATA.map((item, index) => {
              return (
                <CollectionItem
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  image={item.image}
                />
              )
            })}
          </View>
        </View>
      </View>

      <View style={{ marginTop: spacing[6] }}>
        <View style={!isTablet ? WHY_CHOSSE_US_WRAPPER : WHY_CHOSSE_US_WRAPPER_TABLET}>
          <Text preset="h4" centered textColor={color.lightCream}>
            Why choose us?
          </Text>
          <View style={{ marginTop: spacing[5] }}>
            <Text textColor={color.lightCream} centered>
              A large part of our role is choosing which particular coffees will be featured in our
              range. This means working closely with the best coffee growers to give you a more
              impactful experience on every level.
            </Text>
          </View>
        </View>
        <View style={!isTablet ? BENEFIT_ITEM_WRAPPER : BENEFIT_ITEM_WRAPPER_TABLET}>
          <BenfitItem
            image={BeanSvg}
            title="Best quality"
            body={
              "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
            }
          />
          <BenfitItem
            image={GiftSvg}
            title="Exclusive benefits"
            body={
              "Special offers and swag when you subscribe, including 30% off your first shipment."
            }
          />
          <BenfitItem
            image={TruckSvg}
            title="Free shipping"
            body={"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."}
          />
        </View>
      </View>
      <View>
        <HowItWorksWrapper />
      </View>
    </Screen>
  )
})
