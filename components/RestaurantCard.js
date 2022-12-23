import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-4">
      <Image source={{ uri: imgUrl }} className="w-64 h-32" />
      <View className="p-4">
        <Text className="font-bold text-xl">{title}</Text>
        <View className="flex flex-row items-center space-x-2">
          <StarIcon color="green" opacity={0.5} />
          <Text className="text-green-600">{rating}</Text>
          <Text className="text-gray-300 font-bold">{genre}</Text>
        </View>
        <Text className="text-gray-300 font-bold">{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
