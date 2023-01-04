import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { restauranDetails } from "../feautures/restaurantSlice";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(restauranDetails);
  return (
    <View className="bg-white h-full">
      <View className="flex-1 relative">
        <View className="flex-row justify-between bg-green-600 px-4 pt-14 h-56">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white text-xl opacity-50">Order Help</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between absolute top-28 bg-white rounded-md p-5 mx-5 z-10">
          <View className="space-y-0 w-5/6">
            <Text className="font-extrabold text-gray-400 text-sm">
              Estimated Arrival
            </Text>
            <Text className="font-extrabold text-3xl mb-2">40-50 Minutes</Text>
            <Progress.Bar
              indeterminate={true}
              color="green"
              width={140}
              className="mb-2"
            />
            <Text className="font-extrabold text-gray-400 text-xs">
              Your order at {restaurant.title} is being prepared
            </Text>
          </View>
          <Image
            source={{ uri: "https://links.papareact.com/fls" }}
            className="h-14 w-14"
          />
        </View>
        <View className="flex-1 items-center justify-center">
          {/* <Text className="font-bold text-5xl">Google Maps</Text>
          <Text className="font-extrabold text-white">
            Pin with restaurant location
          </Text> */}
          <MapView
            initialRegion={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            className="flex-1 z-0 border w-full"
            mapType="mutedStandard"
          >
            <Marker
              coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
              }}
              title={restaurant.title}
              description={restaurant.description}
              identifier="origin"
              pinColor="#00CCBB"
            />
          </MapView>
        </View>
      </View>
      <View className="bg-white flex-row items-center px-5 pt-4 pb-10">
        <View className="flex-1 flex-row space-x-3 items-center">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-12 w-12 bg-gray-300 rounded-full"
          />
          <View>
            <Text className="font-extrabold">Cristhian Carrillo</Text>
            <Text className="font-bold text-gray-500 text-xs opacity-70">
              Your Rider
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text className="text-xl text-green-600 font-bold">Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryScreen;
