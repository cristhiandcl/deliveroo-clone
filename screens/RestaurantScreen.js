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

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  return (
    // <SafeAreaView>
    <ScrollView>
      <View className="relative">
        <Image source={{ uri: urlFor(imgUrl).url() }} className="w-full h-56" />
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
            <StarIcon color="gray" />
            <Text className="text-gray-400 font-bold">{rating}</Text>
          </View>
          <Text className="text-gray-400 font-bold">{genre}</Text>
          <View className="flex-row items-center space-x-2">
            <MapPinIcon color="gray" />
            <Text className="text-gray-400 font-bold">{address}</Text>
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
          <ChevronRightIcon color="green" />
        </View>
      </View>
      <Text className="font-bold text-2xl px-4 pt-6 pb-2">Menu</Text>
      <View className="bg-white p-4">
        <View>
          <Text>trial</Text>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default RestaurantScreen;
