import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  // selectBasketItems,
  // selectBasketItemsWithId,
} from "../feautures/basketSlice";

const DishCard = ({ id, description, name, image, price }) => {
  const [isPressed, setIsPressed] = useState(false);
  // const items = useSelector(selectBasketItems);
  // const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const items = useSelector((state) =>
    state.basket.items.filter((item) => item.id === id)
  );
  const dispatch = useDispatch();

  console.log(items);

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, description, name, image, price }));
  };
  return (
    <TouchableOpacity
      className={`border-b-[1px] border-gray-200 py-4 ${
        isPressed && "border-b-0"
      }`}
      onPress={() => setIsPressed(!isPressed)}
    >
      <View className="flex-row">
        <View className="flex-1 space-y-2">
          <Text className="text-2xl">{name}</Text>
          <Text className="text-gray-400 font-bold">{description}</Text>
          <Text className="text-gray-400 font-bold">
            <Currency quantity={price} currency="COP" pattern="! ##,### " /> COP
          </Text>
        </View>
        <Image source={{ uri: urlFor(image).url() }} className="h-20 w-20" />
      </View>
      {isPressed && (
        <View className="px-1 flex-row space-x-1 items-center pt-3">
          <TouchableOpacity>
            <MinusCircleIcon size={40} color="green" />
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={40} color="green" />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DishCard;
