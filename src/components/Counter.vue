<template>
    <div>
        <button class="btn btn-primary" @click="increment(10)">Increment</button>
        <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
    </div>
</template>

<script>

    import {mapActions} from 'vuex'

    export default {
        methods: {
            // increment() {
            //     this.$store.state.counter += 1;
            // },
            // decrement() {
            //     this.$store.state.counter -= 1;
            // }

            ...mapActions(["increment", "decrement"])

        }



    }
</script>
