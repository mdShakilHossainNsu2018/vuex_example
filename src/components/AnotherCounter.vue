<template>
    <div>
        <p>result counter: {{counter}}</p>
        <p>double Counter: {{doubleCounter}}</p>
        <br>
        <p>{{stringCounter}}</p>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        name: "AnotherCounter",

        // data() {
        //     // return {
        //     //     counter: this.$store.getters.doubleCounter,
        //     // };
        // },

        computed: {

            ...mapGetters(['doubleCounter', 'stringCounter']),

            counter() {
                return this.$store.getters.doubleCounter;
            }
        }

    }
</script>

<style scoped>

</style>
