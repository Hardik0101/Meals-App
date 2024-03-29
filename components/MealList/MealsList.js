import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../MealItem";

function MealList({ items }) {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
      />
    </View>
  );
}

export default MealList;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
