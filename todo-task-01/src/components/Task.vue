<template>
    <div 
        @dblclick="$emit('toggle-reminder', task.id)"
        :class="[task.reminder ? 'reminder' : '', 'task']"
    >
        <h3>
            {{ task.text }} 
            <span @click="$emit('delete-task', task.id)">&times;</span> 
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        task: Object
    }
}
</script>
<style lang="scss" scoped>
.task {
    background: #F4F4F4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    &.reminder {
        border-left: 5px solid rgb(34, 119, 148);
    }
    h3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            font-size: 1.6rem;
            color: tomato;
            user-select: none;
            &:hover {
                color: red;
            }
        }
    }
}
</style>
