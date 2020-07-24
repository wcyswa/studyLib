<template>
    <div>
        <input type="text" placeholder="接下来要做什么" @keyup.enter="addToDoItem">
        <Item :todo="todo" v-for="todo in todoesByFilter" :key="todo.id" @del="deleteId"
              @changeState="changeCompleteState" />
        <Tabs :filter="filter" :todoes="todoes" @toggle="toggleFilter" @deleteCompleted="deleteCompleted" />
    </div>
</template>

<script>
    import Item from "./Item.vue";
    import Tabs from './tabs.vue';

    let id = 0;
    export default {
        data() {
            return {
                todoes: [],
                filter: 'all'
            }
        },
        name: "Todo",
        components: {Item, Tabs},
        computed: {
            todoesByFilter() {
                if (this.filter === 'all') {
                    return this.todoes;
                }
                let completed = this.filter === 'completed';
                console.log(this.todoes, '法拉盛记分')
                return this.todoes.filter((todo) => todo.completed === completed)
            }
        },
        methods: {
            addToDoItem(e) {
                let item = {
                    id: id++,
                    content: e.target.value.trim(),
                    completed: false
                };
                this.todoes.unshift(
                    item
                );
                e.target.value = ''
            },
            deleteId(id) {
                this.todoes.splice(this.todoes.findIndex((todo) => todo.id === id), 1)
            },
            toggleFilter(state) {
                this.filter = state;
            },
            deleteCompleted() {
                console.log('fadsfad')
                this.todoes = this.todoes.filter((todo) => !todo.completed)
            },
            changeCompleteState(id,state) {
                let result = this.todoes.find((todo) => todo.id === id);
                if (result) {
                    result.complete = state;
                }
            }
        }
    }
</script>

<style scoped>

</style>