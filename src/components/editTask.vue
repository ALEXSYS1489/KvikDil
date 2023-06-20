<template>
  <div class="popup">
    <form class=" form" @submit="formSubmit">
      <h3>Введите новое имя для задачи номер {{ editTask }}</h3>
      <Label for="taskNewName"> Имя задачи
      <input type="text" id="taskNewName" v-model="taskNewName">
      </Label>

      <button type="button" @click="closePopup">Отмена</button>
      <button type="submit">Изменить</button>
    </form>
  </div>
</template>

<script>
import appTask from './appTask.vue';

export default {
  name: 'editTask',
  comments: { appTask },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    editTask() {
      return this.$store.getters.getEditTask;
    },
  },
  data() {
    return {
      taskNewName: '',
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();

      const newTasks = this.tasks.map((task) => {
        if (task.taskNumber !== this.editTask) {
          return task;
        }
        const a = task;
        a.taskName = this.taskNewName;
        return a;
      });

      this.$store.commit(
        'SET_TASKS',
        newTasks,
      );

      localStorage.setItem('local', JSON.stringify(newTasks));

      this.$store.commit(
        'SET_EDITTASK',
        null,
      );
    },
    closePopup() {
      this.$store.commit(
        'SET_EDITTASK',
        null,
      );
    },
  },
};
</script>

<style>
.popup {
  position: absolute;
  background-color: rgb( 0 0 0 / 0.5);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.form {
  background-color: #fff;
  margin: auto;
  width: 50%;
  height: 15%;
}
</style>
