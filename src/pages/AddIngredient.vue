<template>
  <div>
      <v-app>
      <v-app-bar app color="blue">
        <v-icon @click="back">mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Search for ingredients</v-toolbar-title>
        <v-spacer></v-spacer>
        </v-app-bar>
      <v-main>
    <v-text-field
            class="mt-3"
            label="Add to storage"
            outlined
            v-model="inputValue"
            @keyup="autocompleteSearch"
    ></v-text-field>
    <v-card max-width="344"
            class="mb-2"
            v-for="ingredient in ingredients" 
            :key="ingredient"
            @click="ingredientSelection(ingredient.id)">
      <v-img :src="
            'https://spoonacular.com/cdn/ingredients_100x100/' +
            ingredient.image
            "
                        max-height="125"
            max-width="125"></v-img>
      <v-card-title>{{ ingredient.name }}</v-card-title>
    </v-card>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
export default {
  data() {
    return {
      inputValue: "",
      ingredients: []
    };
  },
  methods: {
    autocompleteSearch() {
      var vm = this;
      axios
        .get("https://api.spoonacular.com/food/ingredients/autocomplete", {
          params: {
            apiKey: "8eadc066fccf4a6e91d4b644a9560d76",
            query: this.inputValue,
            metaInformation: true,
            number: 10,
          },
        })
        .then(function (response) {
            console.log(response);            
            const allowed = ["data"];
            Object.keys(response)
            .filter((key) => !allowed.includes(key))
            .forEach((key) => delete response[key]);

            Object.keys(response).forEach(function (key) {
                 const results = response[key];
                 vm.ingredients = results;
            });
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          //awlays
        });
    },
    ingredientSelection(id) {
        const path = '/ingredients/' + `${id}` + '/ingredientinformation';
        this.$router.push(path);
    },
    back() {
      this.$router.back();
    }
  },
};
</script>

<style>
.searchIngredient {
  font-size: 1.5em;
  width: 100%;
  height: 60px;
  margin: 0 auto;
}
</style>