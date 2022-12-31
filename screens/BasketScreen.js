import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../feautures/basketSlice";
import { restauranDetails } from "../feautures/restaurantSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(restauranDetails);
  console.log(restaurant);

  return (
    <View className="bg-gray-200">
      <View className="p-6 relative bg-white">
        <Text className="text-center font-extrabold text-lg">Basket</Text>
        <Text className="text-center text-gray-300 font-bold text-xs">
          {restaurant.title}
        </Text>
        <TouchableOpacity
          className="absolute right-2 top-5"
          onPress={navigation.goBack}
        >
          <XCircleIcon size={50} color="green" />
        </TouchableOpacity>
      </View>
      <View className="h-6"></View>
      <View className="bg-white p-4">
        <Text>Deliver time</Text>
      </View>
      <View className="h-6"></View>
      <View>{/* dishes  */}</View>
    </View>
  );
};

export default BasketScreen;
