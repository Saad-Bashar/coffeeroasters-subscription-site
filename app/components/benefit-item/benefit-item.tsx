import * as React from "react"
import { TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { moderateScale, scale } from "react-native-size-matters"
import useDevice from "../../hooks/useDevice"

const CONTAINER: ViewStyle = {
  marginHorizontal: spacing[5],
  marginVertical: scale(12),
  backgroundColor: color.primary,
  paddingHorizontal: spacing[5],
  borderRadius: spacing[2],
  justifyContent: 'center',
  alignItems: 'center',
  height: scale(380)
}
const HORIZONTAL: ViewStyle = {
  flexDirection: "row",
  marginHorizontal: spacing[5],
  marginVertical: scale(12),
  backgroundColor: color.primary,
  borderRadius: spacing[2],
  alignItems: 'center',
  height: scale(120),
  paddingHorizontal: spacing[5],

}
const BODY: TextStyle = {
  lineHeight: moderateScale(22),
  paddingTop: spacing[3],
  fontSize: moderateScale(15)
}
const TEXT_WRAPPER: ViewStyle = {
  marginTop: scale(40)
}


export interface CollectionItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  title: string
  body: string
  image?: React.Component<React.FC>
  horizontal?: boolean
}

/**
 * Describe your component here
 */
export const BenfitItem = observer(function CollectionItem(props: CollectionItemProps) {
  const { style, title, body, image, horizontal = false } = props
  const isTablet = useDevice()

  if (isTablet) {
    return (
      <View style={[HORIZONTAL, style]}>
        {image()}
        <View style={{ flex: 1, marginLeft: spacing[5] }}>
          <Text textColor={color.lightCream} preset="h4">
            {title}
          </Text>
          <Text textColor={color.lightCream} style={BODY} >
            {body}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={[CONTAINER, style]}>
      {image()}
      <View style={TEXT_WRAPPER}>
        <Text textColor={color.lightCream} centered preset="h4">
          {title}
        </Text>
        <Text textColor={color.lightCream} style={BODY} centered>
          {body}
        </Text>
      </View>
    </View>
  )
})
