<template>
  <div>
      <v-app>
      <v-app-bar app color="blue">
        <v-icon @click="back">mdi-arrow-left</v-icon>
        <v-toolbar-title>Search for storage ingredients</v-toolbar-title>
      </v-app-bar>
      <v-main>
    <v-text-field
            class="mt-3"
            label="Search in your storage"
            outlined
            v-model="inputValue"
            @keyup="autocompleteSearch"
    ></v-text-field>
    <v-card max-width="344"
            class="mb-2"
            v-for="ingredient in searchResults" 
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
      vegetables: [],
      fruits: [],
      proteinFoods: [],
      spices: [],
      grains: [],
      dairys: [],
      ingredientNames: [],
      searchResults: [],
    };
  },
  methods: {
    autocompleteSearch() {
      if (this.inputValue == -"") {
        this.searchResults = [];
      } else {
        this.searchResults = [];
        this.ingredientNames.forEach((element) => {
          let regex = element.name.substring(0, this.inputValue.length);
          if (this.inputValue === regex) {
            this.searchResults.push(element);
          }
        });
      }
    },
    back() {
      this.$router.back();
    },
    ingredientSelection(id) {
      const path = "/ingredients/" + `${id}` + "/ingredientinformation";
      this.$router.push(path);
    },
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
    if (this.vegetables.length === 0) {
    } else {
      this.vegetables.forEach((element) => {
        this.ingredientNames.push(element);
      });
    }
    if (this.fruits.length === 0) {
    } else {
      this.fruits.forEach((element) => {
        this.ingredientNames.push(element);
      });
    }
    if (this.proteinFoods.length === 0) {
    } else {
      this.proteinFoods.forEach((element) => {
        this.ingredientNames.push(element);
      });
    }
    if (this.spices.length === 0) {
    } else {
      this.spices.forEach((element) => {
        this.ingredientNames.push(element);
      });
    }
    if (this.grains.length === 0) {
    } else {
      this.grains.forEach((element) => {
        this.ingredientNames.push(element);
      });
    }
    if (this.dairys.length === 0) {
    } else {
      this.dairys.forEach((element) => {
        this.ingredientNames.push(element);
      });
    }
    console.log(this.ingredientNames);
  },
};
</script>

<style>
</style>