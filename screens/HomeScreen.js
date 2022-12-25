import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  S,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
      ...,
    restaurants[]->{..., dishes[]->}
  }`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className="bg-gray-100 h-screen">
      <View className="px-1">
        {/* header */}
        <View className="flex-row items-center space-x-4 p-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-10 w-10 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-300">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current location <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={30} color="#00CCBB" />
        </View>
        {/* search */}
        <View className="flex-row items-center px-2 pb-3 space-x-2">
          <View className="flex-row flex-1 space-x-2 p-2 bg-gray-300">
            <MagnifyingGlassIcon />
            <TextInput placeholder="Restaurants" keyboardType="default" />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
        {/* Body */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {featuredCategories.map((featured) => (
          <FeaturedRow
            key={featured._id}
            id={featured._id}
            title={featured.name}
            description={featured.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
