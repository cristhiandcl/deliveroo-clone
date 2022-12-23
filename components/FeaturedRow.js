import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View className="">
      <View className="flex flex-row p-3">
        <View className="flex-1">
          <Text className="font-bold text-xl">{title}</Text>
          <Text className="text-gray-400 font-bold">{description}</Text>
        </View>
        <ArrowRightIcon color="green" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="p-3"
      >
        {/* RestaurantsCards */}
        <RestaurantCard
          id={148}
          imgUrl="https://links.papareact.com/gn7"
          title="Punto Cubano"
          rating="4.8"
          genre="Cuban"
          address="Llanogrande Mall"
          short_description="taste the best sandwich in town"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={148}
          imgUrl="https://links.papareact.com/gn7"
          title="Punto Cubano"
          rating="4.8"
          genre="Cuban"
          address="Llanogrande Mall"
          short_description="taste the best sandwich in town"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={148}
          imgUrl="https://links.papareact.com/gn7"
          title="Punto Cubano"
          rating="4.8"
          genre="Cuban"
          address="Llanogrande Mall"
          short_description="taste the best sandwich in town"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={148}
          imgUrl="https://links.papareact.com/gn7"
          title="Punto Cubano"
          rating="4.8"
          genre="Cuban"
          address="Llanogrande Mall"
          short_description="taste the best sandwich in town"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
