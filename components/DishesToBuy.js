import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../feautures/basketSlice";

const DishesToBuy = ({ dish }) => {
  const dispatch = useDispatch();
  const id = dish[0].id;
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <View className="flex-row items-center mx-4 border-b border-gray-100 py-3">
      <View className="flex-row flex-1 items-center space-x-2">
        <Text className="text-green-600 font-bold">{dish.length} x</Text>
        <Image
          source={{ uri: urlFor(dish[0].image).url() }}
          className="w-10 h-10 rounded-full"
        />
        <Text className="text-sm font-bold">{dish[0].name}</Text>
      </View>
      <View className="flex-row space-x-2 items-center">
        <Text className="text-xs font-bold">
          <Currency
            quantity={dish[0].price}
            currency="COP"
            pattern="!##,### "
          />{" "}
          COP
        </Text>
        <TouchableOpacity onPress={removeItemFromBasket}>
          <Text className="text-green-600 font-bold">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishesToBuy;
