<template>
    <div id="test">
        <Header />
        <Todo />
        <Footer />
    </div>
</template>

<script>
    import Header from "./todo/header.vue";
    import Todo from "./todo/Todo.vue";
    import Footer from "./todo/Footer.jsx";

    export default {
        components: {Todo, Header,Footer},
        data() {
            return {
                text: 'wcy'
            }
        },
    }
</script>

<style scoped>
    #test {
        color: red;
    }
</style>