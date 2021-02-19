<template>
  <div>
    <v-app>
      <v-app-bar app color="blue">
        <v-icon @click="back">mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Protein food</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon @click="deleteItem">mdi-trash-can-outline</v-icon>
      </v-app-bar>
      <v-main>
        <v-card v-for="protein in proteins"
            :key="protein.id" width="100%" outlined class="mt-6 mb-3">
          <v-list-item
          >
            <v-list-item-content>
              <div class="overline mb-4">PROTEIN</div>
              <v-list-item-title class="headline mb-1">
                {{ protein.name }}
              </v-list-item-title>
              <v-list-item-subtitle> Lorum Ipsem</v-list-item-subtitle>
            </v-list-item-content>

            <v-img
            class="mt-3"
            max-height="125"
            max-width="125"
              :src="
                'https://spoonacular.com/cdn/ingredients_250x250/' +
                protein.image
              "
            >
            </v-img>
          </v-list-item>

          <v-card-actions>
            <v-btn @click="showIngredients(protein.id)" outlined rounded text> See Ingredient </v-btn>
          </v-card-actions>
        </v-card>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      proteins: [],
    };
  },
  methods: {
    back() {
      this.$router.push("/storage");
    },
    showIngredients(ingredientStorage) {
        const path = '/ingredients/' + `${ingredientStorage}` + '/ingredientinformation';
        this.$router.push(path);
    },
    deleteItem() {

    }
  },
  created() {
    this.proteins = JSON.parse(localStorage.getItem("proteinFoods"));
  },
};
</script>

<style>
</style>