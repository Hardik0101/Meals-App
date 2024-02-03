import { View, StyleSheet, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect } from "react";
import MealList from "../components/MealList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  return <MealList items={displayMeals} />;
}

export default MealsOverviewScreen;
