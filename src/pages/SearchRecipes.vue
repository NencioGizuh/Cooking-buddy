<template>
    <div>
        <search></search>
    </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import Search from '../components/Search.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        'search-bar': SearchBar,
        'search': Search
    }
}
</script>