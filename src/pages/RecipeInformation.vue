<template>
  <div>
    <v-app>
      <v-app-bar app color="blue">
        <v-icon color="white" @click="back">mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title color="white">{{
          recipeInformation.title
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="addToFavourites(recipeInformation)" icon>
          <v-icon color="white">mdi-heart</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <img :src="recipeInformation.image" alt="recipe information" />
        <v-list>
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Cooking Information</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  Time to prepare:
                  {{ recipeInformation.preparationMinutes }} minutes
                </v-list-item-title>
                <v-list-item-title>
                  Time to cook: {{ recipeInformation.cookingMinutes }} minutes
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Diets</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  v-for="diet in recipeInformation.diets"
                  :key="diet"
                >
                  {{ diet }}
                </v-list-item-title>
                <v-list-item-title>
                  Vegan: {{ recipeInformation.vegan }}
                </v-list-item-title>
                <v-list-item-title>
                  Vegetarian: {{ recipeInformation.vegetarian }}
                </v-list-item-title>
                <v-list-item-title>
                  Gluten Free: {{ recipeInformation.glutenFree }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Cuisines</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  v-for="cuisine in recipeInformation.cuisines"
                  :key="cuisine"
                >
                  {{ cuisine }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Wine Pairing</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  v-for="pairedWine in recipeInformation.winePairing
                    .pairedWines"
                  :key="pairedWine"
                >
                  {{ pairedWine }}
                </v-list-item-title>
                <v-list-item-title>
                  {{ recipeInformation.winePairing.pairingText }}
                </v-list-item-title>
                <v-list-item
                  v-for="productMatch in recipeInformation.winePairing
                    .productMatches"
                  :key="productMatch"
                >
                  <v-img :src="productMatch.imageUrl"></v-img>
                  <v-list-item-title>
                    {{ productMatch.title }}
                  </v-list-item-title>
                  <v-list-item-title>
                    {{ productMatch.description }}
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Ingredients</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="ingredient in recipeInformation.extendedIngredients"
              :key="ingredient"
            >
              <v-list-item-content>
                <v-img
                  :src="
                    'https://spoonacular.com/cdn/ingredients_500x500/' +
                    ingredient.image
                  "
                ></v-img>
                <v-list-item-title>
                  {{ ingredient.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-alert
            :value="alert"
            dense
            text
            type="success"
            transition="scale-transition"
          >
            {{ recipeInformation.title }} was added to your favourites
          </v-alert>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Instructions</v-list-item-title>
              </v-list-item-content>
            </template>
            <div
              v-for="instruction in recipeInformation.analyzedInstructions"
              :key="instruction"
            >
              <v-list-item v-for="step in instruction.steps" :key="step">
                <v-list-item-title>Step {{ step.number }}</v-list-item-title>
                <v-list-item-title>{{ step.step }}</v-list-item-title>
                <v-list-item
                  v-for="equipment in step.equipment"
                  :key="equipment"
                >
                  <v-img
                    :src="
                      'https://spoonacular.com/cdn/equipment_100x100/' +
                      equipment.image
                    "
                  ></v-img>
                  <v-list-item-title>{{ equipment.name }}</v-list-item-title>
                  <v-list-item
                    v-for="ingredient in step.ingredients"
                    :key="ingredient"
                  >
                    <v-img
                      :src="
                        'https://spoonacular.com/cdn/ingredients_100x100/' +
                        ingredient.image
                      "
                    ></v-img>
                    <v-list-item-title>{{ ingredient.name }}</v-list-item-title>
                  </v-list-item>
                </v-list-item>
              </v-list-item>
            </div>
          </v-list-group>

          <v-list-group prepend-icon="mdi-nutrition">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Macro Nutrients</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >Carbs:
                  {{
                    recipeInformation.nutrition.caloricBreakdown.percentCarbs
                  }}%</v-list-item-title
                >
                <v-list-item-title
                  >Fat:
                  {{
                    recipeInformation.nutrition.caloricBreakdown.percentFat
                  }}%</v-list-item-title
                >
                <v-list-item-title
                  >Protein:
                  {{
                    recipeInformation.nutrition.caloricBreakdown.percentProtein
                  }}%</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group prepend-icon="mdi-nutrition">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Nutrients</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="nutrient in recipeInformation.nutrition.nutrients"
              :key="nutrient"
            >
              <v-list-item-content>
                <v-list-item-title>{{ nutrient.title }}</v-list-item-title>
                <v-list-item-title
                  >{{ nutrient.amount }} {{ nutrient.unit }}</v-list-item-title
                >
                <v-list-item-title
                  >{{ nutrient.percentOfDailyNeeds }}% of daily
                  needs</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group prepend-icon="mdi-pulse">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Flavanoids</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="flavanoid in recipeInformation.nutrition.flavanoids"
              :key="flavanoid"
            >
              <v-list-item-content>
                <v-list-item-title
                  >{{ flavanoid.title }}:
                  {{ flavanoid.amount }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      favourites: [],
      recipeInformation: {},
      alert: false,
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    addToFavourites(ingredientObject) {
      this.alert = true;
      if (localStorage.getItem("favourites") === null) {
        localStorage.setItem("favourites", JSON.stringify(this.favourites));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.title,
          image: ingredientObject.image,
        };
        this.favourites.push(ingredientInformation);
        localStorage.setItem("favourites", JSON.stringify(this.favourites));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      } else {
        this.favourites = JSON.parse(localStorage.getItem("favourites"));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.title,
          image: ingredientObject.image,
        };
        this.favourites.push(ingredientInformation);
        localStorage.setItem("favourites", JSON.stringify(this.favourites));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      }
    },
  },
  created() {
    var vm = this;
    axios
      .get(
        "https://api.spoonacular.com/recipes/" +
          `${this.$route.params.recipeid}` +
          "/information",
        {
          params: {
            apiKey: "8eadc066fccf4a6e91d4b644a9560d76",
            includeNutrition: true,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        const allowed = ["data"];
        Object.keys(response)
          .filter((key) => !allowed.includes(key))
          .forEach((key) => delete response[key]);

        Object.keys(response).forEach(function (key) {
          const results = response[key];
          vm.recipeInformation = results;
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        //always
      });
  },
};
</script>

<style>
</style>