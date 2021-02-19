<template>
  <div>
      <div @click="previousPage" class="fab">
          <font-awesome-icon icon="times" />
      </div>
      <div @click="addIngredient" class="fabsmaller">
          <font-awesome-icon icon="cart-plus" />
      </div>
      <div @click="ingredientRecipes" class="fabsmaller2">
        <font-awesome-icon icon="search" />
      </div>
      <div @click="searchRecipes" class="fabsmaller3">
        <font-awesome-icon icon="search" />
      </div>
      <div @click="randomRecipes" class="fabsmaller4">
        <font-awesome-icon icon="search" />
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        previousPage() {
            this.$router.back();
        },
        addIngredient() {
            this.$router.push('/ingredients/addingredient');
        },
        ingredientRecipes() {
            this.$router.push('/ingredientsrecipes');
        },
        searchRecipes() {
            this.$router.push('/searchrecipes');
        },
        randomRecipes() {
            this.$router.push('/randomrecipes');
        }
    }
}
</script>

<style>
.fab {
      border-radius: 50%;
      background-color: #0099FF;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 70px;
      font-weight: bold;
      font-size: 22px;
      color: #fff;
      position: absolute;
      top: 10%;
      left: 0 auto;
      right: 0 auto;
    }
.fabsmaller {
      border-radius: 50%;
      background-color: #0099FF;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      font-weight: bold;
      font-size: 22px;
      color: #fff;
      position: absolute;
      top: 20%;
    }
.fabsmaller2 {
      border-radius: 50%;
      background-color: #0099FF;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      font-weight: bold;
      font-size: 22px;
      color: #fff;
      position: absolute;
      top: 30%;
    }

.fabsmaller3 {
      border-radius: 50%;
      background-color: #0099FF;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      font-weight: bold;
      font-size: 22px;
      color: #fff;
      position: absolute;
      top: 40%;
    }

.fabsmaller4 {
      border-radius: 50%;
      background-color: #0099FF;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      font-weight: bold;
      font-size: 22px;
      color: #fff;
      position: absolute;
      top: 50%;
    }
</style>