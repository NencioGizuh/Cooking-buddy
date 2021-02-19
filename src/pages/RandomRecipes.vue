<template>
    <div>
        <font-awesome-icon @click="back" icon="arrow-left" />
        <h1>Random Recipes</h1>
        <random></random>
    </div>
</template>

<script>
import { eventBus } from '../main';
import Random from '../components/Random.vue';
export default {
    data: function () {
        return {
        }
    },
    methods: {
        back() {
            this.$router.push('/');
        }
    },
    components: {
        'random': Random
    }
}
</script>