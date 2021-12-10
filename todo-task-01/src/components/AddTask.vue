<template>
    <form action="" method="post" @submit="onSubmit">
        <div class="form-control">
            <label for="text">Task</label>
            <input type="text" name="text" v-model="text" id="text" palceholder="Add Task">
        </div>
        <div class="form-control">
            <label for="day">Day & Time</label>
            <input type="text" name="day" v-model="day" id="day" palceholder="Add Day and time">
        </div>
        <div class="form-control form-control-check">
            <label for="reminder">Set reminder</label>
            <input type="checkbox" name="reminder" v-model="reminder" id="reminder">
        </div>
        <button type="submit" class="btn">Save Task</button>
    </form>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            text: '',
            day: '',
            reminder: false
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            if(!this.text) {
                alert('Please add a task')
                return
            }
            if(!this.day) {
                alert('Please add a day or time')
                return
            }
            const newTask = {
                id: `${Math.floor(Math.random() * 10000)}${Date.now()}`,
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }
            this.$emit('add-task', newTask)
            console.log(newTask)
            this.text = ""
            this.day = ""
            this.reminder = false
        }
    }
}
</script>

<style lang="scss" scoped>
%inputBtn {
    width: 100%;
    height: 3rem;
    padding: 0 .5rem;
    font-size: 1.2rem;
    border: 1px solid gray;
    border-radius: .3rem;
}
form {
    padding: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    .form-control {
        display: flex;
        flex-flow: column;
        gap: .3rem;
        label {
            font-size: 1.3rem;
            letter-spacing: 1px;
        }
        input {
           @extend %inputBtn;
        }
    }
    .form-control-check {
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        input {
            width: 2rem;
        }
    }
    .btn {
        @extend %inputBtn;
        cursor: pointer;
        background: rgb(34, 119, 148);
        color: white;
        &:hover {
            opacity: .9;
        }
    }
   
}
</style>