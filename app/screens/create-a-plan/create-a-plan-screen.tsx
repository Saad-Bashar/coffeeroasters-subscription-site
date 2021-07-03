import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, ImageBackground, useWindowDimensions, Pressable } from "react-native"
import { Button, HowItWorksWrapper, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
import Logo from "../home/logo"
import Collapsible from "react-native-collapsible"
import { FontAwesome } from "@expo/vector-icons"

const SelectionBox = ({ option, selectedOption, onSelect }) => {
  const isSelected = option.name === selectedOption?.name
  return (
    <Pressable
      onPress={onSelect}
      style={{
        padding: 15,
        borderRadius: 8,
        backgroundColor: isSelected ? color.primary : "#F4F1EB",
        marginBottom: spacing[2],
      }}
    >
      <Text textColor={isSelected && color.lightCream} preset="h5">
        {option.name}
      </Text>
      <Text textColor={isSelected && color.lightCream} style={{ paddingTop: 10 }}>
        {option.text}
      </Text>
    </Pressable>
  )
}

const DRINK_OPTIONS = [
  { name: "Capsule", text: "Compatible with Nespresso systems and similar brewers" },
  { name: "Filter", text: "For pour over or drip methods like Aeropress, Chemex, and V60" },
  { name: "Espresso", text: "Dense and finely ground beans for an intense, flavorful experience" },
]

const TYPES = [
  {
    name: "Single Origin",
    text: "Distinct, high quality coffee from a specific family-owned farm",
  },
  { name: "Decaf", text: "Just like regular coffee, except the caffeine has been removed" },
  { name: "Blended", text: "Combination of two or three dark roasted beans of organic coffees" },
]

const QUANTITY = [
  { name: "250g", text: "Perfect for the solo drinker. Yields about 12 delicious cups." },
  { name: "500g", text: "Perfect option for a couple. Yields about 40 delectable cups." },
  { name: "1000g", text: "Perfect for offices and events. Yields about 90 delightful cups." },
]

const GRIND = [
  { name: "Wholebean", text: "Best choice if you cherish the full sensory experience" },
  { name: "Filter", text: "For drip or pour-over coffee methods such as V60 or Aeropress" },
  { name: "Cafetiére", text: "Course ground beans specially suited for french press coffee" },
]

const DELIVERY = [
  { name: "Every week", text: "$7.20 per shipment. Includes free first-class shipping." },
  { name: "Every 2 weeks", text: "$9.60 per shipment. Includes free priority shipping." },
  { name: "Every month", text: "$12.00 per shipment. Includes free priority shipping." },
]

export const CreateAPlanScreen = observer(function CreateAPlanScreen() {
  const windowHeight = useWindowDimensions().height
  const [drinkOptionView, setDrinkOptionView] = useState(true)
  const [typeOptionView, setTypeOptionView] = useState(true)
  const [quantityOptionView, setQuantityOptionView] = useState(true)
  const [grindOptionView, setGrindOptionView] = useState(true)
  const [deliveryOptionView, setDeliveryOptionView] = useState(true)
  const [selectedDrink, setSelectedDrink] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [selectedQuantity, setSelectedQuantity] = useState(null)
  const [selectedGrind, setSelectedGrind] = useState(null)
  const [selectedDelivery, setSelectedDelivery] = useState(null)

  return (
    <Screen preset="scroll">
      <View style={{ padding: spacing[5] }}>
        <Logo />
      </View>
      <ImageBackground
        style={{
          height: windowHeight * 0.5,
          margin: spacing[4],
          borderRadius: 8,
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("./create-plan.png")}
      ></ImageBackground>
      <View style={{ backgroundColor: "#000", borderRadius: 16, marginVertical: spacing[5] }}>
        <HowItWorksWrapper textColor={color.lightCream} />
      </View>

      <View style={{ margin: spacing[5] }}>
        <Pressable
          onPress={() => setDrinkOptionView((prev) => !prev)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: spacing[5],
          }}
        >
          <Text preset="h5">How do you drink your coffee?</Text>
          <FontAwesome
            name={!drinkOptionView ? "angle-up" : "angle-down"}
            size={24}
            color={color.primary}
          />
        </Pressable>

        <Collapsible duration={500} collapsed={drinkOptionView}>
          {DRINK_OPTIONS.map((option) => {
            return (
              <SelectionBox
                key={option.name}
                option={option}
                selectedOption={selectedDrink}
                onSelect={() => setSelectedDrink(option)}
              />
            )
          })}
        </Collapsible>

        <Pressable
          onPress={() => setTypeOptionView((prev) => !prev)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: spacing[5],
          }}
        >
          <Text preset="h5">What type of coffee?</Text>
          <FontAwesome
            name={!typeOptionView ? "angle-up" : "angle-down"}
            size={24}
            color={color.primary}
          />
        </Pressable>

        <Collapsible duration={500} collapsed={typeOptionView}>
          {TYPES.map((option) => {
            return (
              <SelectionBox
                key={option.name}
                option={option}
                selectedOption={selectedType}
                onSelect={() => setSelectedType(option)}
              />
            )
          })}
        </Collapsible>

        <Pressable
          onPress={() => setQuantityOptionView((prev) => !prev)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: spacing[5],
          }}
        >
          <Text preset="h5">How much would you like?</Text>
          <FontAwesome
            name={!quantityOptionView ? "angle-up" : "angle-down"}
            size={24}
            color={color.primary}
          />
        </Pressable>

        <Collapsible duration={500} collapsed={quantityOptionView}>
          {QUANTITY.map((option) => {
            return (
              <SelectionBox
                key={option.name}
                option={option}
                selectedOption={selectedQuantity}
                onSelect={() => setSelectedQuantity(option)}
              />
            )
          })}
        </Collapsible>

        <Pressable
          onPress={() => setGrindOptionView((prev) => !prev)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: spacing[5],
          }}
        >
          <Text preset="h5">Want us to grind them?</Text>
          <FontAwesome
            name={!grindOptionView ? "angle-up" : "angle-down"}
            size={24}
            color={color.primary}
          />
        </Pressable>

        <Collapsible duration={500} collapsed={grindOptionView}>
          {GRIND.map((option) => {
            return (
              <SelectionBox
                key={option.name}
                option={option}
                selectedOption={selectedGrind}
                onSelect={() => setSelectedGrind(option)}
              />
            )
          })}
        </Collapsible>

        <Pressable
          onPress={() => setDeliveryOptionView((prev) => !prev)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: spacing[5],
          }}
        >
          <Text preset="h5">How often should we deliver?</Text>
          <FontAwesome
            name={!deliveryOptionView ? "angle-up" : "angle-down"}
            size={24}
            color={color.primary}
          />
        </Pressable>

        <Collapsible duration={500} collapsed={deliveryOptionView}>
          {DELIVERY.map((option) => {
            return (
              <SelectionBox
                key={option.name}
                option={option}
                selectedOption={selectedDelivery}
                onSelect={() => setSelectedDelivery(option)}
              />
            )
          })}
        </Collapsible>
      </View>

      <View
        style={{
          margin: spacing[5],
          backgroundColor: color.secondary,
          borderRadius: 12,
          padding: 15,
        }}
      >
        <Text textColor="#FFF">ORDER SUMMARY</Text>
        <View style={{ paddingTop: spacing[4] }}>
          {selectedDrink &&
          selectedType &&
          selectedQuantity &&
          selectedGrind &&
          selectedDelivery ? (
            <Text textColor="#FFF" preset="h5">
              “I drink my coffee as{" "}
              <Text preset="h5" textColor={color.primary}>
                {selectedDrink.name}
              </Text>
              , with a{" "}
              <Text preset="h5" textColor={color.primary}>
                {selectedType.name}
              </Text>{" "}
              type of bean.{" "}
              <Text preset="h5" textColor={color.primary}>
                {selectedQuantity.name}
              </Text>{" "}
              ground ala{" "}
              <Text preset="h5" textColor={color.primary}>
                {selectedGrind.name}
              </Text>
              , sent to me{" "}
              <Text preset="h5" textColor={color.primary}>
                {selectedDelivery.name}
              </Text>
              .”
            </Text>
          ) : (
            <Text textColor="#FFF">Select all option to generate your order summary</Text>
          )}
        </View>
      </View>

      <Button text="Create my plan!" style={{ margin: spacing[5] }} />
      
    </Screen>
  )
})
