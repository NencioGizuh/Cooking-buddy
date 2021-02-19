<template>
  <div>
    <v-app>
      <v-app-bar app color="blue">
        <v-icon @click="back">mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
         <v-toolbar-title>Ingredient Recipes</v-toolbar-title>
         <v-spacer></v-spacer>
        </v-app-bar>
      <v-main>
        <template>
          <ingredients-recipe></ingredients-recipe>
          <div v-if="showRecipes">
            <h2>Vegetables</h2>
            <v-card class="d-flex flex-row mb-6 overflow-x-auto">
              <v-card v-for="vegetable in vegetables" :key="vegetable">
                <v-img
                  :src="
                    'https://spoonacular.com/cdn/ingredients_100x100/' +
                    vegetable.image
                  "
                ></v-img>
                <v-card-title>{{ vegetable.name }}</v-card-title>
              </v-card>
            </v-card>

            <h2>Fruits</h2>
            <v-card class="d-flex flex-row mb-6 overflow-x-auto">
              <v-card v-for="fruit in fruits" :key="fruit">
                <v-img
                  :src="
                    'https://spoonacular.com/cdn/ingredients_100x100/' +
                    fruit.image
                  "
                ></v-img>
                <v-card-title>{{ fruit.name }}</v-card-title>
              </v-card>
            </v-card>

            <h2>Protein Foods</h2>
            <v-card class="d-flex flex-row mb-6 overflow-x-auto">
              <v-card v-for="protein in proteinFoods" :key="protein">
                <v-img
                  :src="
                    'https://spoonacular.com/cdn/ingredients_100x100/' +
                    protein.image
                  "
                ></v-img>
                <v-card-title>{{ protein.name }}</v-card-title>
              </v-card>
            </v-card>

            <h2>Spices</h2>
            <v-card class="d-flex flex-row mb-6 overflow-x-auto">
              <v-card v-for="spice in spices" :key="spice">
                <v-img
                  :src="
                    'https://spoonacular.com/cdn/ingredients_100x100/' +
                    spice.image
                  "
                ></v-img>
                <v-card-title>{{ spice.name }}</v-card-title>
              </v-card>
            </v-card>

            <h2>Grains</h2>
            <v-card class="d-flex flex-row mb-6 overflow-x-auto">
              <v-card v-for="grain in grains" :key="grain">
                <v-img
                  :src="
                    'https://spoonacular.com/cdn/ingredients_100x100/' +
                    grain.image
                  "
                ></v-img>
                <v-card-title>{{ grain.name }}</v-card-title>
              </v-card>
            </v-card>

            <h2>Dairy</h2>
            <v-card class="d-flex flex-row mb-6 overflow-x-auto">
              <v-card v-for="dairy in dairys" :key="dairy">
                <v-img
                  :src="
                    'https://spoonacular.com/cdn/ingredients_100x100/' +
                    dairy.image
                  "
                ></v-img>
                <v-card-title>{{ dairy.name }}</v-card-title>
              </v-card>
            </v-card>
            <v-btn width="100%" depressed color="primary" @click="findRecipes">
              Find Recipes
            </v-btn>
          </div>
        </template>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { eventBus } from "../main";
import Ingredients from "../components/Ingredients.vue";
export default {
  data() {
    return {
      showRecipes: true,
      vegetables: [],
      fruits: [],
      proteinFoods: [],
      spices: [],
      dairys: [],
      grains: [],
      ingredientNames: [],
    };
  },
  methods: {
    findRecipes() {
      if (this.vegetables.length === 0 ) {
      } else {
        this.vegetables.forEach((element) => {
          this.ingredientNames.push(element.name);
        });
      }
      if (this.fruits.length === 0) {
      } else {
        this.fruits.forEach((element) => {
          this.ingredientNames.push(element.name);
        });
      }
      if (this.proteinFoods.length === 0) {
      } else {
        this.proteinFoods.forEach((element) => {
          this.ingredientNames.push(element.name);
        });
      }
      if (this.spices.length === 0) {
      } else {
        this.spices.forEach((element) => {
          this.ingredientNames.push(element.name);
        });
      }
      if (this.grains.length === 0) {
      } else {
        this.grains.forEach((element) => {
          this.ingredientNames.push(element.name);
        });
      }
      console.log(this.ingredientNames);
      eventBus.$emit("ingredientsGathered", this.ingredientNames);
      this.showRecipes = false;
    },
    back() {
      this.$router.back();
    },
  },
  components: {
    "ingredients-recipe": Ingredients,
  },
  created() {
    if (localStorage.getItem("vegetables") === null) {
        localStorage.setItem("vegetables", JSON.stringify(this.vegetables));
    }
    else {
      this.vegetables = JSON.parse(localStorage.getItem("vegetables"));
    }
    if (localStorage.getItem("fruits") === null) {
        localStorage.setItem("fruits", JSON.stringify(this.fruits));
    }
    else {
      this.fruits = JSON.parse(localStorage.getItem("fruits"));
    }
    if (localStorage.getItem("proteinFoods") === null) {
        localStorage.setItem("proteinFoods", JSON.stringify(this.proteinFoods));
    }
    else {
      this.proteinFoods = JSON.parse(localStorage.getItem("proteinFoods"));
    }
    if (localStorage.getItem("spices") === null) {
        localStorage.setItem("spices", JSON.stringify(this.spices));
    }
    else {
      this.spices = JSON.parse(localStorage.getItem("spices"));
    }
    if (localStorage.getItem("dairy") === null) {
        localStorage.setItem("dairy", JSON.stringify(this.dairys));
    }
    else {
      this.dairys = JSON.parse(localStorage.getItem("dairy"));
    }
    if (localStorage.getItem("grains") === null) {
        localStorage.setItem("grains", JSON.stringify(this.grains));
    }
    else {
      this.grains = JSON.parse(localStorage.getItem("grains"));
    }
  },
};
</script>

<style>
</style>