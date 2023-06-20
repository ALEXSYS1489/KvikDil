<template>
  <div>
    <h1>Создать задачу</h1>
    <form @submit="formSubmit">

      <Label for="taskName"> Имя задачи
      <input type="text" id="taskName" v-model="taskName">
      </Label>

      <Label for="taskNumber"> Номер задачи
      <input type="number" id="taskNumber" v-model="taskNumber">
      </Label>

      <button type="submit">Создать</button>
    </form>

    <h1>Задачи:</h1>
    <appTasks></appTasks>
    <editTask v-if="editTask"></editTask>
  </div>
</template>

<script>
import appTasks from '../components/appTasks.vue';

export default {
  name: 'TasksPage',
  comments: { appTasks },
  methods: {
    formSubmit(e) {
      e.preventDefault();

      if (this.tasks.some((task) => (
        task.taskNumber === this.taskNumber
      ))) {
        alert('Такой номер задачи уже существует');
      } else {
        this.$store.commit(
          'SET_TASKS',
          [
            {
              taskName: this.taskName,
              taskNumber: this.taskNumber,
            },
            ...this.tasks,
          ],
        );

        localStorage.setItem('local', JSON.stringify(this.tasks));
      }
    },
  },
  data() {
    return {
      taskName: '',
      taskNumber: '',
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    editTask() {
      return this.$store.getters.getEditTask;
    },
  },
};
</script>
