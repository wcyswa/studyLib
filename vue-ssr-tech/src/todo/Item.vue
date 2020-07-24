<template>
    <div :class="['todoItem',todo.completed ?'completed':''] ">
        <input type="checkbox" class="toggle" v-model="todo.completed" @change="changeCompleteState" /> <span>{{todo.content}}</span>
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
                this.$emit('del', this.todo.id)
            },
            changeCompleteState(e) {
                console.log(e,'辣椒粉蓝色')
                this.$emit('changeState', this.todo.id,);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .todoItem {
        margin: 20px 10px;
    }
</style>