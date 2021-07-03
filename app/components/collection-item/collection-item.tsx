/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { moderateScale, scale } from "react-native-size-matters"
import useDevice from "../../hooks/useDevice"

const CONTAINER: ViewStyle = {
  marginVertical: spacing[5]
}
const BODY: TextStyle = {
  lineHeight: moderateScale(18),
  paddingTop: spacing[2]
}
const IMAGE: ImageStyle = {
  width: "100%",
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
  const isTablet = useDevice()

  if (isTablet) {
    return (
      <View style={{ flexDirection: 'row', marginVertical: spacing[5] }}>
        <View style={{ flex: 1 }}>
          <Image style={IMAGE} source={image} />
        </View>
        <View style={{ flex: 1 }}>
          <Text preset="h4">{title}</Text>
          <Text style={[BODY, { marginRight: 30 }]}>{body}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={[CONTAINER, style]}>
      <Image style={IMAGE} source={image} resizeMode="contain" />
      <Text centered preset="h4">{title}</Text>
      <Text style={BODY} centered>{body}</Text>
    </View>
  )
})
