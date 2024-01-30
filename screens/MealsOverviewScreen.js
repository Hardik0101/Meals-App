import { View, StyleSheet, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

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

  function renderMealsItem(itemData) {
    const item = itemData.item;
    const mealItemProp = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProp} />;
  }

  return (
    <View style={style.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
