<template>
    <div>
    <h1>Profile</h1>
    <!-- User Profile Component -->
    <!-- My Cookbook aka favourite recipes-->
    <navigation-bar></navigation-bar>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
export default {
    components: {
        'navigation-bar': NavigationBar
    }
}
</script>