<template>
  <section class="main-content">
    <div class="container">
      <div class="main-content_tasks">
        <Header title = "Task tracker" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
        <AddTask @add-task="addTask" v-show="showAddTask" />
        <Tasks 
          :tasks="tasks"  
          @delete-task="deleteTask" 
          @toggle-reminder="toggleReminder"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'
export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    addTask(task) {
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id) {
      if(confirm (`Arue you sure delete this task ? `))
      this.tasks = this.tasks.filter((task)  =>  task.id !== id )
    },
    toggleReminder(id) {
      this.tasks = this.tasks
        .map((task) => task.id === id ? 
          {...task, reminder : !task.reminder} : 
          task
        )
    }
  },
  
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctor\'s Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meating at school',
        day: 'March 3rd at 1:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'food shopping',
        day: 'March 3rd at 11:30am',
        reminder: false
      }
    ]
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');
$main-font: 'Poppins', sans-serif;
* {
  box-sizing: border-box;
  margin: 0; padding: 0;
  font-family: $main-font;
  border: none; outline: none;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 100%;
  transition: .2s linear;
}

%scrollbar {
  &::-webkit-scrollbar {
    width: .8rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(34, 119, 148);
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0,0,0,.1);
  }
}

html {
  overflow-x: hidden;
  @extend %scrollbar;
}

body {
  background: lightblue;
}

.container {
  max-width: 100%;
  margin: 0 1rem;
  padding: 0 .5rem;
}

.main-content {
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin: 2rem auto;
  &_tasks {
    min-width: 420px;
    background: #FFF;
    border: 1px solid #F4F4F4;
    border-radius: .4rem;
    padding: 1rem;
    box-shadow: 0 0 .9rem 0 rgba(0,0,0,.1);
  }
}
</style>
