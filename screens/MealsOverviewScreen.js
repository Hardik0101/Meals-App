import { View, StyleSheet, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catID = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  function renderMealsItem(itemData) {
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    );
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
