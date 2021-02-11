import { moderateScale } from 'react-native-size-matters';
import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 16,
}

/**
 * All text will start off looking like this.
 */
const BOLD: TextStyle = {
  fontFamily: typography.secondary,
  color: color.text,
  fontSize: moderateScale(16),
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BOLD } as TextStyle,

  h2: { ...BOLD, fontSize: moderateScale(40), lineHeight: moderateScale(48), } as TextStyle,
  h4: { ...BOLD, fontSize: moderateScale(24), lineHeight: moderateScale(32), } as TextStyle,

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: moderateScale(24), fontWeight: "bold" } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13 } as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9 } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
