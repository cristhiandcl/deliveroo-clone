import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const DishCard = ({ id, description, name, image, price }) => {
  const [amount, setAmount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
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
          <TouchableOpacity
            onPress={() => (amount > 0 ? setAmount(amount - 1) : setAmount(0))}
          >
            <MinusCircleIcon size={40} color="green" />
          </TouchableOpacity>
          <Text>{amount}</Text>
          <TouchableOpacity onPress={() => setAmount(amount + 1)}>
            <PlusCircleIcon size={40} color="green" />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DishCard;
