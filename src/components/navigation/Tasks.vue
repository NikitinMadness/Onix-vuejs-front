<template lang="pug">
    div.tasksArea
        form.newTaskAdd(@submit.prevent="addTask")
            div.taskNameZone
            input.nameOfTask(type="text" required="" placeholder="Name of the task..." v-model="newTask.name" )
            div.taskDescZone
            textarea.descOfTask(rows="3" required="",
                placeholder="Enter new task description..." v-model="newTask.description")
            div.taskBtnZone
            button.newTaskBtn(type="submit") &#10003; Add
        ul.openTasksList
            li(v-for="(task, index) in tasks" v-bind:key="task.id")
                .taskRows
                span.tasksNameRow {{ task.name }}
                .tasksDeleteButton(@click="deleteTask(index)") x
                span.taskeDscriptionRow {{ task.description }}
                span.tasksTimeNow {{task.time}}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
interface TaskInterface {
  name: string;
  description: string;
  time: string;
}
    @Component({
      name: 'Tasks'
    })
export default class Tasks extends Vue {
    newTask: TaskInterface = {
      name: '',
      description: '',
      time: ''
    };
    tasks: TaskInterface[] = [
      {
        name: 'Morning',
        description: 'It’s time to do something important',
        time: '9.30 AM'
      },
      {
        name: 'Lunch',
        description: 'Time to eat and get to work',
        time: '10.00 AM'
      },
      {
        name: 'Work',
        description: 'Time to work now, my code looking bad',
        time: ' 10.30 AM'
      }
    ]
    addTask (event: { target: { reset: () => void; }; }) {
      this.tasks.push({
        name: this.newTask.name,
        description: this.newTask.description,
        time: this.getTasksTime()
      })
      this.newTask.name = ''
      this.newTask.description = ''
      event.target.reset()
    }
    deleteTask (index: number) {
      this.tasks.splice(index, 1)
    }
    getTasksTime () {
      let time = new Date()
      return (time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
    }
}
</script>

<style lang="css">
    .tasksArea{
        position: absolute;
        margin-left: 3em;
        margin-top: 2em;
        width: 50vw;
        height: 24em;
        overflow: auto;
        font-size: 110%;
    }
    .nameOfTask{
        position: absolute;
        width: 44vw;
        height: 3em;
        margin-bottom: 1em;
    }
    .descOfTask{
        position: absolute;
        margin-top: 4.5em;
        width: 44vw;
        height: 8em;
    }
    .newTaskBtn{
        position: absolute;
        top: 185px;
        margin-left: 20vw;
        background-color: #7FFF00;
        width: 80px;
        height: 30px;
        border: solid 0px;
        border-radius: 30px;
        cursor: pointer;
    }
    .openTasksList{
        list-style: none;
        position: absolute;
        top: 250px;
        width: 44vw;
    }
    .taskRows{
        margin-bottom: 20px;
    }
    .tasksNameRow{
        font-size: 110%;
    }
    .tasksDeleteButton{
        background-color: red;
        width: 24px;
        height: 24px;
        border-radius: 30px;
        text-align: center;
        color: white;
        margin-left: 42vw;
        cursor: pointer;
    }
    .tasksTimeNow{
        margin-left: 10vw;
    }
</style>
