import * as React from "react"
import { TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { moderateScale, scale } from "react-native-size-matters"

const CONTAINER: ViewStyle = {
  marginHorizontal: spacing[5],
  marginVertical: scale(12),
  backgroundColor: color.primary,
  paddingHorizontal: scale(40),
  borderRadius: spacing[2],
  justifyContent: 'center',
  alignItems: 'center',
  height: scale(380)
}
const HORIZONTAL: ViewStyle = {
  flexDirection: "row",
}
const BODY: TextStyle = {
  lineHeight: moderateScale(18),
  paddingTop: spacing[3],
}
const BODY_HORIZONTAL: TextStyle = {
  marginRight: 30,
}
const WRAPPER_HORIZONTAL: ViewStyle = {
  flex: 1,
}
const TEXT_WRAPPER: ViewStyle = {
  marginTop: scale(40)
}

const IMAGE: ImageStyle = {
  width: scale(200),
  height: scale(150),
  alignSelf: "center",
}

export interface CollectionItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  title: string
  body: string
  image?: React.Component
  horizontal?: boolean
}

/**
 * Describe your component here
 */
export const BenfitItem = observer(function CollectionItem(props: CollectionItemProps) {
  const { style, title, body, image, horizontal = false } = props

  if (horizontal) {
    return (
      <View style={[HORIZONTAL, style]}>
        <View style={WRAPPER_HORIZONTAL}>
          <Image style={IMAGE} source={image} />
        </View>
        <View style={WRAPPER_HORIZONTAL}>
          <Text preset="h4">{title}</Text>
          <Text style={[BODY, BODY_HORIZONTAL]}>{body}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={[CONTAINER, style]}>
      { image() }
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
