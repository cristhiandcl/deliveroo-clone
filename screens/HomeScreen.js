import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  S,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <View className="px-3">
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
