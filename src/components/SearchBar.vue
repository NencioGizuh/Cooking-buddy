<template>
    <div>
        <v-text-field v-model="value" class="mt-3" @keydown.enter="buttonPressed" width="75%" label="Solo" placeholder="Search for recipes" solo></v-text-field>
    </div>
</template>

<script>
import { eventBus } from '../main';
import Random from './Random.vue';
export default {
    data: function () {
        return {
            value: '',
        }
    },
    methods: {
        buttonPressed() {
            eventBus.$emit('buttonPressed', this.value);
        }
    },
    components: {
    }
}
</script>