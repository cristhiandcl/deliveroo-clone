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
import { ArrowLeftCircleIcon } from "react-native-heroicons/solid";

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
    </ScrollView>
    // </SafeAreaView>
  );
};

export default RestaurantScreen;
