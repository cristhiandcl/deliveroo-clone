import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../feautures/basketSlice";
import { restauranDetails } from "../feautures/restaurantSlice";
import DishesToBuy from "../components/DishesToBuy";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const itemsTotal = useSelector(selectBasketTotal);
  const restaurant = useSelector(restauranDetails);

  const [groupedItemsInBasket, setGroupItemsInBasket] = useState();

  useMemo(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupItems);
  }, [items]);

  return (
    <View className="bg-gray-200 h-full">
      <View className="flex-1">
        <View className="p-6 relative bg-white">
          <Text className="text-center font-extrabold text-xl">Basket</Text>
          <Text className="text-center text-gray-300 font-bold text-xs">
            {restaurant.title}
          </Text>
          <TouchableOpacity
            className="absolute right-2 top-5"
            onPress={navigation.goBack}
          >
            <XCircleIcon size={50} color="green" />
          </TouchableOpacity>
        </View>
        <View className="h-6"></View>
        <View className="bg-white p-4 flex-row items-center">
          <View className="flex-row items-center space-x-4 flex-1">
            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-10 w-10 bg-gray-300 rounded-full"
            />
            <Text>Deliver in 50-75 min</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-green-600 font-bold">Change</Text>
          </TouchableOpacity>
        </View>
        <View className="h-6"></View>
        <View className="bg-white">
          {/* dishes  */}
          {groupedItemsInBasket &&
            Object.keys(groupedItemsInBasket).map((item) => (
              <DishesToBuy dish={groupedItemsInBasket[item]} />
            ))}
        </View>
      </View>
      <View className="p-4 space-y-4 bg-white pb-10">
        <View className="flex-row justify-between">
          <Text className="text-gray-300 font-bold">Subtotal</Text>
          <Text className="text-gray-300 font-bold">
            <Currency
              quantity={itemsTotal * 0.92}
              currency="COP"
              pattern="!##,### "
            />{" "}
            COP
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-300 font-bold">Delivery Fee</Text>
          <Text className="text-gray-300 font-bold">
            <Currency
              quantity={itemsTotal * 0.08}
              currency="COP"
              pattern="!##,### "
            />{" "}
            COP
          </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-bold">Order Total</Text>
          <Text className="font-bold">
            <Currency quantity={itemsTotal} currency="COP" pattern="!##,### " />{" "}
            COP
          </Text>
        </View>
        <TouchableOpacity className="p-4 bg-green-600 rounded-xl">
          <Text className=" text-white text-center font-bold text-lg">
            Place order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
