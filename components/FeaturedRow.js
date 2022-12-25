import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id] {
      ...,
    restaurants[]->{..., dishes[]->, type->}
  }`,
        { id }
      )
      .then((data) => setRestaurants(data[0]?.restaurants));
  }, []);

  console.log(restaurants);
  return (
    <View className="">
      <View className="flex flex-row p-3">
        <View className="flex-1">
          <Text className="font-bold text-xl">{title}</Text>
          <Text className="text-gray-40leyd0 font-bold">{description}</Text>
        </View>
        <ArrowRightIcon color="green" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="p-3"
      >
        {/* RestaurantsCards */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
