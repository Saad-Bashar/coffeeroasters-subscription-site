import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    "Barlow-Regular": require("./Barlow-Regular.ttf"),
    "Barlow-Bold": require("./Barlow-Bold.ttf"),
    "Fraunces-Black": require("./Fraunces-Black.ttf"),
    "Fraunces-Italic": require("./Fraunces-Italic.ttf"),
  })
}
