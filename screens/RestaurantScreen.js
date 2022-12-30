import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftCircleIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishCard from "../components/DishCard";
import BasketComponent from "../components/BasketComponent";
import { useSelector } from "react-redux";
import { selectBasketTotal } from "../feautures/basketSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();

  const basketTotal = useSelector(selectBasketTotal);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} className="relative">
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56"
          />
          <TouchableOpacity
            className="absolute top-12 left-6"
            onPress={navigation.goBack}
          >
            <ArrowLeftCircleIcon color="green" size={40} />
          </TouchableOpacity>
        </View>
        <View className="p-3 bg-white pb-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row items-center space-x-4 px-1 mt-1.5 mb-4">
            <View className="flex-row items-center space-x-2">
              <StarIcon color="green" />
              <Text className="text-xs text-green-600 font-bold">{rating}</Text>
            </View>
            <Text className="text-xs text-gray-400 font-bold">{genre}</Text>
            <View className="flex-row items-center space-x-2">
              <MapPinIcon color="gray" />
              <Text className="text-xs text-gray-400 font-bold">{address}</Text>
            </View>
          </View>
          <Text className="font-bold text-gray-400 px-1 pb-3">
            {short_description}
          </Text>
          <View className="flex-row px-1 border-t-2 border-gray-100 pt-4">
            <View className="flex-row items-center space-x-4 flex-1">
              <QuestionMarkCircleIcon color="gray" />
              <Text className="font-bold">Have a food allergy?</Text>
            </View>
            <TouchableOpacity>
              <ChevronRightIcon color="green" />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="font-bold text-2xl px-4 pt-6 pb-2">Menu</Text>
        <View className="bg-white p-4">
          {/* dishesRow */}
          <View className={`${basketTotal > 0 && "pb-24"}`}>
            {dishes.map((dish) => (
              <DishCard
                key={dish._id}
                id={dish._id}
                description={dish.description}
                name={dish.name}
                image={dish.image}
                price={dish.price}
              />
            ))}
            {/* <DishCard /> */}
          </View>
        </View>
      </ScrollView>
      {basketTotal > 0 && <BasketComponent />}
    </>
  );
};

export default RestaurantScreen;
