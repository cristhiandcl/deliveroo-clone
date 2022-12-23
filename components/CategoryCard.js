import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="p-1 relative ">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-2 left-2 font-bold text-white text-xm">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
