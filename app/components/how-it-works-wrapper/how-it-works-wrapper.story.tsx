import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { color } from "../../theme"
import { HowItWorksWrapper } from "./how-it-works-wrapper"

storiesOf("HowItWorksWrapper", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <HowItWorksWrapper style={{ backgroundColor: color.error }} />
      </UseCase>
    </Story>
  ))
