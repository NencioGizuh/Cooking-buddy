<template>
    <div>
    <v-app>
    <v-app-bar app color="blue">Storage</v-app-bar>
    <v-main>
    <v-text-field class="mt-3" @click="autocompleteSearch" width="100%" label="Solo" placeholder="Search in your storage" solo></v-text-field>
    <v-container>
        <v-row>
            <v-col>
                <v-card @click="vegetables" class="mb-2">
                    <v-img></v-img>
                    <v-card-title>Vegetables</v-card-title>
                </v-card>
                <v-card @click="grains" class="mb-2">
                    <v-img></v-img>
                    <v-card-title>Grains</v-card-title>
                </v-card>
                <v-card @click="dairy">
                    <v-img></v-img>
                    <v-card-title>Dairy</v-card-title>
                </v-card>
            </v-col>
            <v-col>
                <v-card @click="fruits" class="mb-2">
                    <v-img></v-img>
                    <v-card-title>Fruits</v-card-title>
                </v-card>
                <v-card @click="proteinfood" class="mb-2">
                    <v-img></v-img>
                    <v-card-title>Protein Foods</v-card-title>
                </v-card>
                <v-card @click="spices">
                    <v-img></v-img>
                    <v-card-title>Spices</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <navigation-bar></navigation-bar>
    </v-main>
    </v-app>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import NavigationBar from '../components/NavigationBar.vue';
export default {
    data() {
        return {
            storage: []
        }
    },
    methods: {
        vegetables() {
            this.$router.push('/ingredients/vegetables');
        },
        fruits() {
            this.$router.push('/ingredients/fruits');
        },
        grains() {
            this.$router.push('/ingredients/grains');
        },
        proteinfood() {
            this.$router.push('/ingredients/proteinfood');
        },
        dairy() {
            this.$router.push('/ingredients/dairy');
        },
        spices() {
            this.$router.push('/ingredients/spices');
        },
        autocompleteSearch() {
            this.$router.push('/storage/searchingredients');
        }
    },

    updated() {

    },
    components: {
        'navigation-bar': NavigationBar,
        'search-bar': SearchBar
    }
}
</script>

<style>
    .categoryList {
        margin-top: 25px;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .img {
        width: 62.5px;
        height: 62.5px;
    }
</style>