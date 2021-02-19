<template>
  <div>
    <template>
      <v-list>
        <v-row justify="space-around">
          <v-card
            v-for="recipe in recipes"
            :key="recipe.id"
            width="400"
            class="mb-2"
          >
            <v-img :src="recipe.image"> </v-img>
            <v-card-title>{{ recipe.title }}</v-card-title>
            <v-btn @click="sendRecipeID(recipe)" elevation="2" width="100%"
              >See Recipe</v-btn
            >
          </v-card>
        </v-row>
      </v-list>
    </template>
  </div>
</template>

<script>
import { eventBus } from "../main";
import Vue from "vue";
import axios from "axios";
export default {
  data: function () {
    return {
      recipes: [],
      lastSeen: [],
      favourites: [],
    };
  },
  methods: {
    sendRecipeID(recipeObject) {
      if (localStorage.getItem("lastSeen") === null) {
        localStorage.setItem("lastSeen", JSON.stringify(this.lastSeen));
      } else {
        this.lastSeen = JSON.parse(localStorage.getItem("lastSeen"));
      }
      const recipeInformation = {
        id: recipeObject.id,
        name: recipeObject.title,
        image: recipeObject.image,
      };
      this.lastSeen.push(recipeInformation);
      localStorage.setItem("lastSeen", JSON.stringify(this.lastSeen));
      const path = "/recipes/" + `${recipeObject.id}` + "/recipeinformation";
      this.$router.push(path);
    },
    addToFavourites(recipeObject) {
      if (localStorage.getItem("favourites") === null) {
        localStorage.setItem("favourites", JSON.stringify(this.favourites));
      } else {
        this.favourites = JSON.parse(localStorage.getItem("favourites"));
        const recipeInformation = {
          id: recipeObject.id,
          name: recipeObject.title,
          image: recipeObject.image,
        };
        this.favourites.push(recipeInformation);
        localStorage.setItem("favourites", JSON.stringify(this.favourites));
      }
    },
  },
  created() {
    eventBus.$on("ingredientsGathered", (value) => {
      const ingredientString = value.toString();
      var vm = this;
      axios
        .get("https://api.spoonacular.com/recipes/findByIngredients", {
          params: {
            apiKey: "8eadc066fccf4a6e91d4b644a9560d76",
            ingredients: ingredientString,
            limitLicense: false,
            ranking: 1,
            ignorePantry: true,
            number: 5,
          },
        })
        .then(function (response) {
          console.log(response);
          const allowed = ["data"];
          Object.keys(response)
            .filter((key) => !allowed.includes(key))
            .forEach((key) => delete response[key]);

          Object.keys(response).forEach(function (key) {
            const recipes = response[key];
            vm.recipes = recipes;
          });
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          //awlays
        });
    });
  },
};
</script>

