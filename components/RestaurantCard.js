import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-4"
      onPress={() => {
        navigation.navigate("restaurant", {
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
        });
      }}
    >
      <Image source={{ uri: urlFor(imgUrl).url() }} className="w-64 h-32" />
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
