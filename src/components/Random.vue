<template>
  <div>
    <v-app>
      <v-app-bar app color="blue">
        <v-icon @click="back">mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Random Recipes</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-main>
        <template>
          <v-list>
            <v-row justify="space-around">
              <v-card
                v-for="recipe in basicRecipes"
                :key="recipe.id"
                width="400"
                class="mb-2"
              >
                <v-img :src="recipe.image">
                </v-img>
                <v-card-title>{{ recipe.title}}</v-card-title>
                <v-btn @click="sendRecipeID(recipe)"
                elevation="2"
                width="100%"
                >See Recipe</v-btn>
              </v-card>
            </v-row>
          </v-list>
        </template>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { eventBus } from "../main";
import Vue from "vue";
import axios from "axios";
export default {
  props: ["value"],
  data: function () {
    return {
      basicRecipes: [],
      lastSeen: [],
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
    back() {
      this.$router.back();
    },
  },
  created() {
    var vm = this;
    axios
      .get("https://api.spoonacular.com/recipes/random", {
        params: {
          apiKey: "8eadc066fccf4a6e91d4b644a9560d76",
          limitLicense: false,
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
          const re = response[key];
          Object.keys(re).forEach(function (key) {
            const recipes = re[key];
            vm.basicRecipes = recipes;
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        //awlays
      });
  },
};
</script>

