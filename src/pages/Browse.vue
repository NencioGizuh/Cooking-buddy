<template>
  <div>
    <v-app>
      <v-app-bar app color="blue">Browse</v-app-bar>
      <v-main>
          <h2>Favourite Recipes</h2>
          <div v-if="favourites.length === 0 || favourites == null">
              <p>Add your favourite recipes here</p>
          </div>
          <v-card v-else class="d-flex flex-row mb-6 overflow-x-auto">
          <v-card 
                class="flex-row"
                width="50%"
                v-for="favourite in favourites" 
                :key="favourite.id"
                @click="showRecipes(favourite.id)">
              <v-img :src="favourite.image"></v-img>
              <v-card-title class=".text-md">{{ favourite.name }}</v-card-title>
          </v-card>
        </v-card>

        <h2>Ingredients</h2>
        <v-card class="d-flex flex-row mb-6 overflow-x-auto">
            <v-card 
                v-for="random in randomList" 
                :key="random.id"
                width="35%"
                @click="showIngredients(random.id)">
                <v-img :src="'https://spoonacular.com/cdn/ingredients_100x100/' + random.image"></v-img>
                <v-card-title>{{ random.name }}</v-card-title>
            </v-card>
        </v-card>

        <h2>Last Seen</h2>
        <div v-if="lastSeen.length === 0 || lastSeen == null">
              <p>You have not seen any recipes. Go look!</p>
        </div>
        <v-container>
        <v-card class="overflow-y-auto">
            <v-card v-for="seen in lastSeen" :key="seen.id" @click="showLastSeen(seen.id)">
                <v-img :src="seen.image"></v-img>
                <v-card-title>{{ seen.name }}</v-card-title>
            </v-card>
        </v-card>
        </v-container>

        <navigation-bar></navigation-bar>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
export default {
  data() {
    return {
      lastSeen: [],
      favourites: [],
      randomList: [],
      listOfIngredients: [
        "vegetables",
        "fruits",
        "proteinFoods",
        "spices",
        "dairys",
        "grains",
      ],
    };
  },
  methods: {
      showRecipes(favouriteRecipe) {
        const path = '/recipes/' + `${favouriteRecipe}` + '/recipeinformation';
        this.$router.push(path);
      },
      showLastSeen(lastSeen) {
        const path = '/recipes/' + `${lastSeen}` + '/recipeinformation';
        this.$router.push(path);
      },
      showIngredients(ingredientStorage) {
        const path = '/ingredients/' + `${ingredientStorage}` + '/ingredientinformation';
        this.$router.push(path);
      }
  },
  components: {
    "navigation-bar": NavigationBar,
  },
  created() {
    const randomElement = this.listOfIngredients[
      Math.floor(Math.random() * this.listOfIngredients.length)
    ];
    console.log(randomElement);
    this.randomList = JSON.parse(localStorage.getItem(randomElement));
    if(localStorage.getItem('favourites') === null) {
        localStorage.setItem('favourites', JSON.stringify(this.favourites));
    }
    this.favourites = JSON.parse(localStorage.getItem("favourites"));
    this.favourites.reverse();
    if(localStorage.getItem('lastSeen') === null) {
        localStorage.setItem('lastSeen', JSON.stringify(this.lastSeen));
    }
    this.lastSeen = JSON.parse(localStorage.getItem("lastSeen"));
    this.lastSeen.reverse();
  },
};
</script>