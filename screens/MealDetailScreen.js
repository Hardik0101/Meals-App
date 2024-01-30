import { View, StyleSheet, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetalis from "../components/MealDetails";

function MealDetaliScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View>
        <MealDetalis
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </View>
      <Text>Ingredints</Text>

      <Text>Steps</Text>
    </View>
  );
}

export default MealDetaliScreen;

const style = StyleSheet.create({});
