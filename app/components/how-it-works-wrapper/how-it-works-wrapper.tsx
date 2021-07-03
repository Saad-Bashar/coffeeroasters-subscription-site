import * as React from "react"
import { View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { Text } from "../"
import useDevice from "../../hooks/useDevice"
import { HowItWorksItem } from "../how-it-works-item/how-it-works-item"
import ONE from "./01.png"
import TWO from "./02.png"
import THREE from "./03.png"

const CIRCLE: ViewStyle = {
  height: 32,
  width: 32,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: color.primary,
  backgroundColor: "white",
}

const ITEM_WRAPPER: ViewStyle = {
  flex: 1,
  marginRight: 10,
}

const LINE: ViewStyle = {
  height: 2,
  backgroundColor: "#FDD6BA",
  width: "100%",
}

const CIRCLE_LINE_WRAPPER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 40,
}

const ROW: ViewStyle = {
  flexDirection: "row",
}

export const HowItWorksWrapper = observer(function HowItWorksWrapper({ textColor }) {
  const isTablet = useDevice()

  if (isTablet) {
    return (
      <View style={{ marginTop: spacing[6], marginHorizontal: spacing[4] }}>
        <Text preset="h4" textColor="#83888F">
          How it works
        </Text>

        <View style={ROW}>
          <View style={ITEM_WRAPPER}>
            <View style={CIRCLE_LINE_WRAPPER}>
              <View style={CIRCLE} />
              <View style={LINE} />
            </View>
            <HowItWorksItem
              image={ONE}
              title={"Pick your\ncoffee"}
              body="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
              textColor={textColor}
            />
          </View>
          <View style={ITEM_WRAPPER}>
            <View style={CIRCLE_LINE_WRAPPER}>
              <View style={CIRCLE} />
              <View style={LINE} />
            </View>
            <HowItWorksItem
              image={TWO}
              title="Choose the frequency"
              body="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with  no commitment through our online portal."
              textColor={textColor}
            />
          </View>
          <View style={ITEM_WRAPPER}>
            <View style={CIRCLE_LINE_WRAPPER}>
              <View style={CIRCLE} />
            </View>
            <HowItWorksItem
              image={THREE}
              title="Receive and enjoy!"
              body="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning  world-class coffees curated to provide a distinct tasting experience."
              textColor={textColor}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ marginTop: spacing[6] }}>
      <Text centered preset="h4" textColor="#83888F">
        How it works
      </Text>
      <HowItWorksItem
        image={ONE}
        title="Pick your coffee"
        body="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        textColor={textColor}
      />
      <HowItWorksItem
        image={TWO}
        title="Choose the frequency"
        body="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with  no commitment through our online portal."
        textColor={textColor}
      />
      <HowItWorksItem
        image={THREE}
        title="Receive and enjoy!"
        body="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning  world-class coffees curated to provide a distinct tasting experience."
        textColor={textColor}
      />
    </View>
  )
})
