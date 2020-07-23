<template>
    <div :class="['todoItem',todo.completed ?'completed':''] ">
        <input type="checkBox" class="toggle" v-model="todo.completed" /> <span>{{todo.content}}</span>
        <button class="delete" @click="deleteToDo">x</button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            deleteToDo() {
                this.$emit('del',this.todo.id)
            }
        }
    }
</script>

<style lang="stylus" scoped>
.todoItem{
    margin: 20px 10px;
}
</style>