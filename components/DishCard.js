import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const DishCard = ({ id, description, name, image, price }) => {
  return (
    <View>
      <View className="flex-row">
        <View className="flex-1 space-y-2">
          <Text className="text-2xl">{name}</Text>
          <Text className="text-gray-400 font-bold">{description}</Text>
          <Text className="text-gray-400 font-bold">$ {price} COP</Text>
        </View>
        <Image source={{ uri: urlFor(image).url() }} className="h-20 w-20" />
      </View>
      <View className="px-1 flex-row space-x-1 items-center pt-3 pb-5">
        <TouchableOpacity>
          <MinusCircleIcon size={40} color="green" />
        </TouchableOpacity>
        <Text>amount</Text>
        <TouchableOpacity>
          <PlusCircleIcon size={40} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishCard;
