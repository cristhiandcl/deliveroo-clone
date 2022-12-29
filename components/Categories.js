import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "category"]`).then((data) => setCategories(data));
  }, []);

  // console.log(categories);
  return (
    <ScrollView
      //   contentContainerStyle={{ paddingHorizontal: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="p-2"
    >
      {/* CategoryCard */}

      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
