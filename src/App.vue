<template>
    <div id="app">

        <h1>Vuex</h1>

        <hr>
        <result :counter="counter"></result>
        <hr>
        <another-counter></another-counter>
        <hr>
        <counter @updated="counter +=  $emit"></counter>
        <br>
        <async-counter></async-counter>

    </div>
</template>

<script>

    import Counter from "@/components/Counter";
    import Result from "@/components/Result";
    import AnotherCounter from "@/components/AnotherCounter";
    import AsyncCounter from "@/components/AsyncCounter";


    export default {
        name: 'App',

        data() {
            return {
                counter: 0
            }
        },

        components: {
            AsyncCounter,
            Counter,
            Result,
            AnotherCounter
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
