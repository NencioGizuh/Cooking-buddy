<template>
  <div>
    <v-app>
      <v-app-bar app color="blue">
        <v-icon @click="back">mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Search Recipes</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-main>
        <search-bar></search-bar>
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
import SearchBar from '../components/SearchBar.vue';
import Vue from "vue";
import axios from "axios";
export default {
  data: function () {
    return {
      value: '',
      basicRecipes: [],
      lastSeen: [],
      favourites: []
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    sendRecipeID(recipeObject) {
        if(localStorage.getItem('lastSeen') === null) {
          localStorage.setItem('lastSeen', JSON.stringify(this.lastSeen));
        }
        else {
          this.lastSeen = JSON.parse(localStorage.getItem('lastSeen'));
        }
        const recipeInformation = {
                id: recipeObject.id,
                name: recipeObject.title,
                image: recipeObject.image
        }
        this.lastSeen.push(recipeInformation);
        localStorage.setItem('lastSeen', JSON.stringify(this.lastSeen));
        const path = '/recipes/' + `${recipeObject.id}` + '/recipeinformation';
        this.$router.push(path);
    },
    addToFavourites(recipeObject) {
        if(localStorage.getItem('favourites') === null) {
          localStorage.setItem('favourites', JSON.stringify(this.favourites));
        }
        else {
          this.favourites = JSON.parse(localStorage.getItem('favourites'));
          const recipeInformation = {
                id: recipeObject.id,
                name: recipeObject.title,
                image: recipeObject.image
          }
          this.favourites.push(recipeInformation);
          localStorage.setItem('favourites', JSON.stringify(this.favourites));
        }
    }
  },
  components: {
        'search-bar': SearchBar,
  },
  created() {
    eventBus.$on("buttonPressed", (value) => {
          var vm = this;
      axios
        .get("https://api.spoonacular.com/recipes/complexSearch", {
          params: {
            apiKey: "8eadc066fccf4a6e91d4b644a9560d76",
            query: value,
            limitLicense: false,
            number: 5,
          },
        })
        .then(function (response) {
          console.log(response);
          const allowed = ["data"];
          Object.keys(response)
            //Met .filter() gebruik een lijst om te zorgen dat 
            //de data die ik krijg gefilteerd wordt en daarna verwijdert wordt.
            .filter((key) => !allowed.includes(key))
            .forEach((key) => delete response[key]);
          console.log(response);

         const lijst = ["results"];
         Object.keys(response).forEach(function (key) {
             const results = response[key];
             Object.keys(results)
                .filter((key) => !lijst.includes(key))
                .forEach((key) => delete results[key])
                const recipes = results;
                Object.keys(recipes).forEach(function (key) {
                    const recipe = recipes[key];
                    vm.basicRecipes = recipe;
                });
            });
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          //awlays
        });
    });
  }
};
</script>

