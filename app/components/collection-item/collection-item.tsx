import * as React from "react"
import { TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { moderateScale, scale } from "react-native-size-matters"

const CONTAINER: ViewStyle = {
  marginTop: spacing[3]
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

const BODY: TextStyle = {
  lineHeight: moderateScale(25),
  paddingTop: spacing[4]
}

const IMAGE: ImageStyle = {
  width: scale(200),
  height: scale(150),
  alignSelf: "center"
}

export interface CollectionItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
  title: string
  body: string
  image: string
}

/**
 * Describe your component here
 */
export const CollectionItem = observer(function CollectionItem(props: CollectionItemProps) {
  const { style, title, body, image } = props

  return (
    <View style={[CONTAINER, style]}>
      <Image style={IMAGE} source={image} />
      <Text centered preset="h4">{title}</Text>
      <Text style={BODY} centered>{body}</Text>
    </View>
  )
})
