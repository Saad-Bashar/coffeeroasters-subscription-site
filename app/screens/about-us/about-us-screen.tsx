import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, ImageBackground, useWindowDimensions, View, Image } from "react-native"
import { Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import Logo from "../home/logo"

export const AboutUsScreen = observer(function AboutUsScreen() {
  const windowHeight = useWindowDimensions().height
  return (
    <Screen style={{ paddingBottom: 36 }} preset="scroll">
      <View style={{ padding: spacing[5] }}>
        <Logo />
      </View>
      <ImageBackground
        style={{
          height: windowHeight * 0.5,
          margin: spacing[4],
          borderRadius: 8,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("./Bitmap.jpg")}
      >
        <View style={{ padding: spacing[5] }}>
          <Text centered textColor={color.lightCream} preset="h2">
            About Us
          </Text>
          <Text
            textColor={color.lightCream}
            centered
            style={{ paddingTop: spacing[5], lineHeight: 22 }}
          >
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of
            coffee from around the world. We have since been dedicated to bring the perfect cup -
            from bean to brew - in every shipment.
          </Text>
        </View>
      </ImageBackground>
      <View style={{ margin: spacing[5] }}>
        <Image
          source={require("../../../assets/about/mobile/image-commitment.jpg")}
          style={{ height: 400, width: "100%", borderRadius: 8 }}
        />
        <View style={{ marginVertical: spacing[6] }}>
          <Text centered preset="h4">
            Our commitment
          </Text>
          <Text style={{ paddingTop: spacing[5], lineHeight: 24, fontSize: 14 }} centered>
            We’re built on a simple mission and a commitment to doing good along the way. We want to
            make it easy for you to discover and brew the world’s best coffee at home. It all starts
            at the source. To locate the specific lots we want to purchase, we travel nearly 60 days
            a year trying to understand the challenges and opportunities in each of these places. We
            collaborate with exceptional coffee growers and empower a global community of farmers
            through with well above fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating only the finest
            blends, we roast each lot to highlight tasting profiles distinctive to their native
            growing region.
          </Text>
        </View>
      </View>
      <View
        style={{
          margin: spacing[5],
          backgroundColor: color.secondary,
          borderRadius: 8,
          paddingVertical: spacing[8],
          paddingHorizontal: spacing[5],
        }}
      >
        <Image
          style={{
            height: 200,
            width: "100%",
            borderRadius: 8,
            position: "absolute",
            top: -50,
            alignSelf: "center",
          }}
          source={require("../../../assets/about/mobile/image-quality.jpg")}
        />
        <Text centered preset="h4" style={{ color: color.lightCream, marginTop: 100 }}>
          Uncompromising quality
        </Text>
        <Text
          textColor={color.lightCream}
          centered
          style={{ paddingTop: spacing[5], lineHeight: 24, fontSize: 14 }}
        >
          Although we work with growers who pay close attention to all stages of harvest and
          processing, we employ, on our end, a rigorous quality control program to avoid
          over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date
          and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing
          is easy and enjoyable.
        </Text>
      </View>

      <View style={{ margin: spacing[5] }}>
        <Text centered preset="h4">
          Our headquarters
        </Text>

        <View style={{ marginTop: spacing[6] }}>
          <Image source={require("./UK.png")} style={{ alignSelf: "center" }} />
          <Text centered preset="h5" style={{ marginTop: spacing[5] }}>
            United Kingdom
          </Text>
          <Text centered style={{ lineHeight: 24, fontSize: 14 }}>
            68 Asfordby Rd{"\n"}
            Alcaston{"\n"}
            SY6 1YA{"\n"}
            +44 1241 918425
          </Text>
        </View>

        <View style={{ marginTop: spacing[6] }}>
          <Image source={require("./canada.png")} style={{ alignSelf: "center" }} />
          <Text centered preset="h5" style={{ marginTop: spacing[5] }}>
            Canada
          </Text>
          <Text centered style={{ lineHeight: 24, fontSize: 14 }}>
            1528 Eglinton Avenue{"\n"}
            Toronto{"\n"}
            Ontario M4P 1A6{"\n"}
            +1 416 485 2997
          </Text>
        </View>

        <View style={{ marginTop: spacing[6] }}>
          <Image source={require("./australia.png")} style={{ alignSelf: "center" }} />
          <Text centered preset="h5" style={{ marginTop: spacing[5] }}>
            Australia
          </Text>
          <Text centered style={{ lineHeight: 24, fontSize: 14 }}>
            36 Swanston Street{"\n"}
            Kewell{"\n"}
            Victoria{"\n"}
            +61 4 9928 3629
          </Text>
        </View>
      </View>
    </Screen>
  )
})
