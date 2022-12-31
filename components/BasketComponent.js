import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../feautures/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketComponent = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  if (basketTotal === 0) return null;

  console.log(items);

  return (
    <View className="absolute bottom-8 w-full z-50">
      <TouchableOpacity
        className="mx-5 flex-row bg-green-600 items-center p-4 justify-between rounded"
        onPress={() => navigation.navigate("basket")}
      >
        <Text className="font-extrabold text-white text-lg p-2 bg-green-700">
          {items.length}
        </Text>
        <Text className="font-extrabold text-white text-lg">View Basket</Text>
        <Text className="font-extrabold text-white text-lg">
          <Currency quantity={basketTotal} currency="COP" pattern="! ##,### " />{" "}
          COP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketComponent;
