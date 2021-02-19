<template>
  <div class="top">
      <ul>
          <li @click="addVegetables(ingredientInformation)">
             <h2>Vegetables</h2>
          </li>
          <li @click="addFruits(ingredientInformation)">
            <h2>Fruits</h2>
          </li>
          <li @click="addGrains(ingredientInformation)"> 
              <h2>Grains</h2>
          </li>
          <li @click="addProteinFoods(ingredientInformation)">
              <h2>Protein Foods</h2> 
          </li>
          <li @click="addDairy(ingredientInformation)">    
              <h2>Dairy</h2>
          </li>
          <li @click="addSpices(ingredientInformation)">
              <h2>Spices</h2>
          </li>
      </ul>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props: ['ingredientInformation'],
    data() {
        return {
            addTo: false,
            vegetables: [],
            fruits: [],
            proteinFoods: [],
            grains: [],
            dairy: [],
            spices: [],
        }
    },
    methods: {
        addVegetables(ingredientObject) {
            this.vegetables = JSON.parse(localStorage.getItem('vegetables'));
            const ingredientInformation = {
                id: ingredientObject.id,
                name: ingredientObject.name,
                image: ingredientObject.image
            }
            this.vegetables.push(ingredientInformation);
            localStorage.setItem('vegetables', JSON.stringify(this.vegetables));
            eventBus.$emit('closeScreen', this.addTo);
        },
        addFruits(ingredientObject) {
            this.fruits = JSON.parse(localStorage.getItem('fruits'));
            const ingredientInformation = {
                id: ingredientObject.id,
                name: ingredientObject.name,
                image: ingredientObject.image
            }
            this.fruits.push(ingredientInformation);
            localStorage.setItem('fruits', JSON.stringify(this.fruits));
            eventBus.$emit('closeScreen', this.addTo);
        },
        addGrains(ingredientObject) {
            this.grains = JSON.parse(localStorage.getItem('grains'));
            const ingredientInformation = {
                id: ingredientObject.id,
                name: ingredientObject.name,
                image: ingredientObject.image
            }
            this.grains.push(ingredientInformation);
            localStorage.setItem('grains', JSON.stringify(this.grains));
            eventBus.$emit('closeScreen', this.addTo);
        },
        addProteinFoods(ingredientObject) {
            this.proteinFoods = JSON.parse(localStorage.getItem('proteinFoods'));
            const ingredientInformation = {
                id: ingredientObject.id,
                name: ingredientObject.name,
                image: ingredientObject.image
            }
            this.proteinFoods.push(ingredientInformation);
            localStorage.setItem('proteinFoods', JSON.stringify(this.proteinFoods));
            eventBus.$emit('closeScreen', this.addTo);
        },
        addDairy(ingredientObject) {
            this.dairy = JSON.parse(localStorage.getItem('dairy'));
            const ingredientInformation = {
                id: ingredientObject.id,
                name: ingredientObject.name,
                image: ingredientObject.image
            }
            this.dairy.push(ingredientInformation);
            localStorage.setItem('dairy', JSON.stringify(this.dairy));
            eventBus.$emit('closeScreen', this.addTo);
        },
        addSpices(ingredientObject) {
            this.spices = JSON.parse(localStorage.getItem('spices'));
            const ingredientInformation = {
                id: ingredientObject.id,
                name: ingredientObject.name,
                image: ingredientObject.image
            }
            this.spices.push(ingredientInformation);
            localStorage.setItem('spices', JSON.stringify(this.spices));
            eventBus.$emit('closeScreen', this.addTo);
        }
    }
}
</script>

<style>
    .top {
        z-index: 1;
    }
</style>