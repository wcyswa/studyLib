<template>
    <div class="tabsBox">
        <span>{{unFinishedToDoLength}} items left</span>
        <span>
            <span v-for="state in states" :key="state" :class="['normal',filter === state ?'active':'']"
                  @click="toggleFilter(state)">
                {{state}}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">
            clear All Completed
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            filter: {
                type: String,
                required: true
            },
            todoes:{
                type:Array,
                required: true
            }
        },
        data() {
            return {
                states: [
                    'all',
                    'active',
                    'completed'
                ]
            }
        },
        computed:{
          unFinishedToDoLength(){
              return this.todoes.filter((todo)=>!todo.completed).length;
          }
        },
        methods: {
            toggleFilter(state) {
                this.$emit('toggle',state)
            },
            clearAllCompleted() {
                this.$emit('deleteCompleted')
            }
        }
    }
</script>

<style scoped>
    .tabsBox {
        margin: 20px 10px;
    }

    .normal {
        margin: 8px;
        padding: 4px 8px;
        border: solid 1px;
        border-radius: 4px;
    }

    .active {
        color: green;
    }

    .clear{
        border: solid 1px;
    }
</style>