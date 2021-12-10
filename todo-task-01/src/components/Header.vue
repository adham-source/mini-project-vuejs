<template>
    <header>
        <h1>{{ title }}</h1>
        <Button 
            :text="showAddTask ? 'Close' : 'Add Task'" 
            :color="showAddTask ? 'Red' : 'rgb(34, 119, 148)'" 
            @btn-click="$emit('toggle-add-task')" 
        />
    </header>
</template>

<script>
import Button from './Button.vue'
export default {
    name: 'Header',
    props: {
        title : {
            type: String,
            default: ''
        },
        showAddTask: Boolean
    },
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: .7rem;
    border-bottom: 2px solid gray;
}
</style>