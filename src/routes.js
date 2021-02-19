import Browse from './pages/Browse.vue';
import Storage from './pages/Storage.vue';
import Vegetables from './pages/Vegetables.vue';
import Fruits from './pages/Fruits.vue';
import Grains from './pages/Grains.vue';
import ProteinFood from './pages/ProteinFood.vue'
import Dairy from './pages/Dairy.vue';
import Spices from './pages/Spices.vue';
import RandomRecipes from './pages/RandomRecipes.vue';
import IngredientsRecipes from './pages/IngredientsRecipes.vue';
import SearchRecipes from './pages/SearchRecipes.vue';
import AddIngredient from './pages/AddIngredient.vue';
import RecipeInformation from './pages/RecipeInformation.vue';
import IngredientInformation from './pages/IngredientInformation.vue';
import StorageIngredients from './pages/StorageIngredients.vue';

export const routes = [
    {path: '/', component: Browse},
    {path: '/storage', component: Storage},
    {path: '/storage/searchingredients', component: StorageIngredients},
    {path: '/ingredients/vegetables', component: Vegetables},
    {path: '/ingredients/fruits', component: Fruits},
    {path: '/ingredients/grains', component: Grains},
    {path: '/ingredients/proteinfood', component: ProteinFood},
    {path: '/ingredients/dairy', component: Dairy},
    {path: '/ingredients/spices', component: Spices},
    {path: '/randomrecipes', component: RandomRecipes},
    {path: '/ingredientsrecipes', component: IngredientsRecipes},
    {path: '/searchrecipes', component: SearchRecipes},
    {path: '/recipes/:recipeid/recipeinformation', component: RecipeInformation },
    {path: '/ingredients/addingredient', component: AddIngredient},
    {path: '/ingredients/:ingredientid/ingredientinformation', component: IngredientInformation}
];