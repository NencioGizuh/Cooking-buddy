<template>
  <div>
    <v-app>
      <div class="bottom-appbar">
        <div class="tabs">
          <div class="tab tab--left">
            <div>
              <font-awesome-icon icon="home" />
              <span @click="browse">Browse</span>
            </div>
          </div>
          <div class="tab tab--fab">
            <div class="top">
              <div @click="overlayMenu" class="fab">
                <font-awesome-icon v-if="fab" icon="times" />
                <font-awesome-icon v-else icon="search" />
              </div>
              <div v-if="fab">
                <div @click="addIngredient" class="fabTwo">
                   <v-icon color="white">mdi-fruit-cherries</v-icon>
                </div>
                <span class="textFab" style="color: white">Add ingredient</span>
              </div>
              <div v-if="fab">
                <div @click="ingredientRecipes" class="fabThree">
                  <v-icon color="white">mdi-food-variant</v-icon>
                </div>
                <span class="textFabTwo" style="color: white"
                  >Ingredients recipe</span
                >
              </div>

              <div v-if="fab">
                <div @click="searchRecipes" class="fabFour">
                   <v-icon color="white" >mdi-magnify</v-icon>
                </div>
                <span class="textFabThree" style="color: white"
                  >Search Recipes</span
                >
              </div>

              <div v-if="fab">
                <div @click="randomRecipes" class="fabFive">
                   <v-icon color="white" >mdi-arrow-left-right-bold</v-icon>
                </div>
                <span class="textFabFour" style="color: white"
                  >Random Recipes</span
                >
              </div>
            </div>
          </div>
          <div class="tab tab--right">
            <div>
              <font-awesome-icon icon="shopping-cart" />
              <span @click="storage">Storage</span>
            </div>
          </div>
        </div>
      </div>
      <v-overlay :value="overlay" :opacity="opacity"></v-overlay>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
      fab: false,
      opacity: 0.8,
    };
  },
  methods: {
    browse() {
      this.$router.push("/");
    },
    storage() {
      this.$router.push("/storage");
    },
    addIngredient() {
      this.$router.push("/ingredients/addingredient");
    },
    ingredientRecipes() {
      this.$router.push("/ingredientsrecipes");
    },
    searchRecipes() {
      this.$router.push("/searchrecipes");
    },
    randomRecipes() {
      this.$router.push("/randomrecipes");
    },
    overlayMenu() {
      this.fab = !this.fab;
      this.overlay = !this.overlay;
    },
  },
};
</script>

<style>
.container-background {
  background-color: #0099ff;
}

.bottom-appbar {
  height: 70px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
}
.tabs {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.tab {
  background-color: #fff;
  width: 33.4%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #eee;
  box-shadow: 1x 1x 3px #ccc, -1px -1px 3px #ccc;
  font-size: 24px;
}

span {
  font-size: 12px;
}
i {
  font-size: 24px;
}

.is-active {
  color: #fd9d97;
}

.tab--left {
  width: 100%;
  border-top-right-radius: 30px;
  border-top: 1px solid rgba(167, 161, 161, 0.69);
  box-shadow: 0px 6px 7px 0px rgba(23, 23, 23, 0.28);
}
.tab--right {
  width: 100%;
  border-top-left-radius: 30px;
  border-top: 1px solid rgba(167, 161, 161, 0.69);
  box-shadow: 15px 4px 15px 0px rgba(23, 23, 23, 0.28);
}
.tab--fab {
  width: 180px;
  height: 100%;
  background: transparent;
  border: none;
  display: flex;
}

.top {
  width: 100%;
  height: 50%;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: transparent;
  box-shadow: 0px 30px 0px 25px #fff;
  border-bottom: 1px solid rgba(167, 161, 161, 0.69);
  display: flex;
}

.fab {
  border-radius: 50%;
  background-color: #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  position: absolute;
  transform: translate(2px, -60%);
}

.fabTwo {
  border-radius: 50%;
  background-color: #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  position: absolute;
  top: -120%;
  right: 25%;
}

.fabThree {
  border-radius: 50%;
  background-color: #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  position: absolute;
  top: -120%;
  left: 25%;
}

.fabFour {
  border-radius: 50%;
  background-color: #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  position: absolute;
  top: -200%;
  left: 35%;
}

.fabFive {
  border-radius: 50%;
  background-color: #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
  position: absolute;
  top: -200%;
  right: 35%;
}

.textFab {
  position: absolute;
  top: -95%;
  right: 4%;
}

.textFabTwo {
  position: absolute;
  top: -96%;
  left: 1%;
}

.textFabThree {
  position: absolute;
  top: -180%;
  left: 12.5%;
}

.textFabFour {
  position: absolute;
  top: -180%;
  right: 11.5%;
}
</style>