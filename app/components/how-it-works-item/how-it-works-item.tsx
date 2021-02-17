import * as React from "react"
import { TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { moderateScale } from "react-native-size-matters"

const CONTAINER: ViewStyle = {
  marginVertical: spacing[5]
}
const TITLE: TextStyle = {
  fontSize: moderateScale(28),
  lineHeight: moderateScale(32),
  textAlign: "center",
  marginVertical: spacing[5]
}
const IMAGE: ImageStyle = {
  alignSelf: 'center',
}
const BODY: TextStyle = {
  lineHeight: moderateScale(25),
}

export interface HowItWorksItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  image: string
  title: string
  body: string
}

/**
 * Describe your component here
 */
export const HowItWorksItem = observer(function HowItWorksItem(props: HowItWorksItemProps) {
  const { style, image, title, body } = props

  return (
    <View style={[CONTAINER, style]}>
      <Image style={IMAGE} source={image} />
      <View>
        <Text style={TITLE}>
          {title}
        </Text>
        <Text centered style={BODY}>
          {body}
        </Text>
      </View>
    </View>
  )
})
