import * as React from "react"
import { TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { moderateScale,scale } from "react-native-size-matters"
import useDevice from "../../hooks/useDevice"

const CONTAINER: ViewStyle = {
  marginVertical: spacing[5]
}
const TITLE: TextStyle = {
  fontSize: moderateScale(28),
  lineHeight: moderateScale(32),
  textAlign: "center",
  marginVertical: spacing[5],
  fontFamily: typography.secondary
}
const TITLE_TABLET: TextStyle = {
  fontSize: 28,
  paddingVertical: spacing[4],
  fontFamily: typography.secondary
}
const IMAGE: ImageStyle = {
  alignSelf: 'center',
}
const BODY: TextStyle = {
  lineHeight: moderateScale(25),
  marginHorizontal: spacing[5],
}

export interface HowItWorksItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  image: string
  title: string
  body: string, 
  textColor: string,
}

/**
 * Describe your component here
 */
export const HowItWorksItem = observer(function HowItWorksItem(props: HowItWorksItemProps) {
  const { style, image, title, body, textColor } = props
  const isTablet = useDevice()

  if(isTablet) {
    return (
      <View style={[CONTAINER, style]}>
        <Image source={image} />
        <View>
          <Text style={TITLE_TABLET}>
            {title}
          </Text>
          <Text style={{fontSize: 15, lineHeight: 25}}>
            {body}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={[CONTAINER, style]}>
      <Image style={IMAGE} source={image} />
      <View>
        <Text style={[TITLE, { color: textColor }]}>
          {title}
        </Text>
        <Text centered style={[BODY, {color: textColor }]}>
          {body}
        </Text>
      </View>
    </View>
  )
})
