<template>
    <div>
        <button class="btn btn-primary" @click="incrementAsync({by:10, time:1000})">AsIncrement</button>
        <button class="btn btn-primary" @click="decrementAsync({by:5, time:2000})">AsDecrement</button>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "AsyncCounter",

        methods: {
            // increment() {
            //     this.$store.state.counter += 1;
            // },
            // decrement() {
            //     this.$store.state.counter -= 1;
            // }

            ...mapActions(["incrementAsync", "decrementAsync"])

        }
    }
</script>

<style scoped>

</style>
