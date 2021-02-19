<template>
  <div>
    <template>
      <v-app>
        <v-app-bar app color="blue">
          <v-icon @click="back">mdi-arrow-left</v-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title>{{ ingredientInformation.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu left v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-list>
                <v-list-item @click="addedToVegetables(ingredientInformation)">
                  <v-list-item-title>Vegetables</v-list-item-title>
                </v-list-item>
                <v-list-item @click="addedToFruits(ingredientInformation)">
                  <v-list-item-title>Fruits</v-list-item-title>
                </v-list-item>
                <v-list-item @click="addedToGrains(ingredientInformation)">
                  <v-list-item-title>Grains</v-list-item-title>
                </v-list-item>
                <v-list-item @click="addedToProteinFood(ingredientInformation)">
                  <v-list-item-title>Protein Food</v-list-item-title>
                </v-list-item>
                <v-list-item @click="addedToDairy(ingredientInformation)">
                  <v-list-item-title>Dairy</v-list-item-title>
                </v-list-item>
                <v-list-item @click="addedToSpices(ingredientInformation)">
                  <v-list-item-title>Spices</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </v-app-bar>
        <v-main>
          <!---<ingredient-category-list :ingredientInformation="ingredientInformation" v-if="addTo"></ingredient-category-list> -->
          <v-img max-width="250px"
            :src="
              'https://spoonacular.com/cdn/ingredients_250x250/' +
              ingredientInformation.image
            "
            alt="ingredient photo"
          />
          <v-list>
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
                      ingredientInformation.nutrition.caloricBreakdown
                        .percentCarbs
                    }}%</v-list-item-title
                  >
                  <v-list-item-title
                    >Fat:
                    {{
                      ingredientInformation.nutrition.caloricBreakdown
                        .percentFat
                    }}%</v-list-item-title
                  >
                  <v-list-item-title
                    >Protein:
                    {{
                      ingredientInformation.nutrition.caloricBreakdown
                        .percentProtein
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

              <v-list-item v-for="nutrient in nutrients" :key="nutrient">
                <v-list-item-content>
                  <v-list-item-title>{{ nutrient.title }}</v-list-item-title>
                  <v-list-item-title
                    >{{ nutrient.amount }}
                    {{ nutrient.unit }}</v-list-item-title
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

              <v-list-item v-for="flavanoid in flavanoids" :key="flavanoid">
                <v-list-item-content>
                  <v-list-item-title
                    >{{ flavanoid.title }}:
                    {{ flavanoid.amount }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-list-group prepend-icon="mdi-barley">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Properties</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="property in properties" :key="property">
                <v-list-item-content>
                  <v-list-item-title
                    >{{ property.title }}:
                    {{ property.amount }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>

                               <v-alert
            :value="alert"
            dense
            text
            type="success"
            transition="scale-transition"
          >
            {{ ingredientInformation.name }} was added to your storage
          </v-alert>
        </v-main>
      </v-app>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import IngredientCategoryList from "../components/IngredientCategoryList";
import { eventBus } from "../main";
export default {
  data() {
    return {
      menu: false,
      alert: false,
      addTo: false,
      vegetables: [],
      fruits: [],
      proteinFoods: [],
      grains: [],
      dairy: [],
      spices: [],
      ingredientInformation: {},
      flavanoids: [],
      nutrients: [],
      properties: [],
    };
  },
  methods: {
    addToList() {
      this.addTo = true;
    },
    back() {
      this.$router.back();
    },
    addedToVegetables(ingredientObject) {
      this.menu = false;
      this.alert = true;
      if (localStorage.getItem("vegetables") === null) {
        localStorage.setItem("vegetables", JSON.stringify(this.vegetables));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.vegetables.push(ingredientInformation);
        localStorage.setItem("vegetables", JSON.stringify(this.vegetables));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      } else {
        this.vegetables = JSON.parse(localStorage.getItem("vegetables"));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.vegetables.push(ingredientInformation);
        localStorage.setItem("vegetables", JSON.stringify(this.vegetables));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      }
    },
    addedToFruits(ingredientObject) {
      this.menu = false;
      this.alert = true;
      if (localStorage.getItem("fruits") === null) {
        localStorage.setItem("fruits", JSON.stringify(this.fruits));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.fruits.push(ingredientInformation);
        localStorage.setItem("fruits", JSON.stringify(this.fruits));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      } else {
        this.fruits = JSON.parse(localStorage.getItem("fruits"));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.fruits.push(ingredientInformation);
        localStorage.setItem("fruits", JSON.stringify(this.fruits));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      }
    },
    addedToGrains(ingredientObject) {
      this.menu = false;
      this.alert = true;
      if (localStorage.getItem("grains") === null) {
        localStorage.setItem("grains", JSON.stringify(this.grains));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.grains.push(ingredientInformation);
        localStorage.setItem("grains", JSON.stringify(this.grains));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      } else {
        this.grains = JSON.parse(localStorage.getItem("grains"));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.grains.push(ingredientInformation);
        localStorage.setItem("grains", JSON.stringify(this.grains));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      }
    },

    addedToProteinFood(ingredientObject) {
      this.menu = false;
      this.alert = true;
      if (localStorage.getItem("proteinFoods") === null) {
        localStorage.setItem("proteinFoods", JSON.stringify(this.proteinFoods));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.proteinFoods.push(ingredientInformation);
        localStorage.setItem("proteinFoods", JSON.stringify(this.proteinFoods));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      } else {
        this.proteinFoods = JSON.parse(localStorage.getItem("proteinFoods"));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.proteinFoods.push(ingredientInformation);
        localStorage.setItem("proteinFoods", JSON.stringify(this.proteinFoods));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      }
    },

    addedToSpices(ingredientObject) {
      this.menu = false;
      this.alert = true;
      if (localStorage.getItem("spices") === null) {
        localStorage.setItem("spices", JSON.stringify(this.spices));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.spices.push(ingredientInformation);
        localStorage.setItem("spices", JSON.stringify(this.spices));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      } else {
        this.spices = JSON.parse(localStorage.getItem("spices"));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.spices.push(ingredientInformation);
        localStorage.setItem("spices", JSON.stringify(this.spices));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      }
    },

    addedToDairy(ingredientObject) {
      this.menu = false;
      this.alert = true;
      if (localStorage.getItem("dairy") === null) {
        localStorage.setItem("dairy", JSON.stringify(this.dairy));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.dairy.push(ingredientInformation);
        localStorage.setItem("dairy", JSON.stringify(this.dairy));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      } else {
        this.dairy = JSON.parse(localStorage.getItem("dairy"));
        const ingredientInformation = {
          id: ingredientObject.id,
          name: ingredientObject.name,
          image: ingredientObject.image,
        };
        this.dairy.push(ingredientInformation);
        localStorage.setItem("dairy", JSON.stringify(this.dairy));
        setTimeout(() => {
          this.alert = false;
        }, 5000);
      }
    },
  },
  components: {
    "ingredient-category-list": IngredientCategoryList,
  },
  created() {
    var vm = this;
    axios
      .get(
        "https://api.spoonacular.com/food/ingredients/" +
          `${this.$route.params.ingredientid}` +
          "/information",
        {
          params: {
            apiKey: "8eadc066fccf4a6e91d4b644a9560d76",
            amount: 1,
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
          console.log(results.nutrition);
          vm.ingredientInformation = results;
          vm.flavanoids = results.nutrition.flavanoids;
          vm.nutrients = results.nutrition.nutrients;
          vm.properties = results.nutrition.properties;
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        //awlays
      });

    eventBus.$on("closeScreen", (value) => {
      var vm = this;
      vm.addTo = value;
    });
  },
};
</script>

<style>
.down {
  z-index: -1;
}
</style>