<template>
  <div>
    <h3>Задача {{ taskName }} номер {{ taskNumber }}</h3>
    <button type="button" @click="removeTask">Удалить</button>
    <button type="button" @click="editTask">Изменить</button>
  </div>
</template>

<script>
export default {
  name: 'appTask',
  props: ['taskName', 'taskNumber'],
  methods: {
    removeTask() {
      const newTasks = this.tasks.filter((task) => (
        task.taskNumber !== this.taskNumber
      ));

      this.$store.commit(
        'SET_TASKS',
        newTasks,
      );

      localStorage.setItem('local', JSON.stringify(newTasks));
    },
    editTask() {
      this.$store.commit(
        'SET_EDITTASK',
        this.taskNumber,
      );
    },
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
  },
};
</script>
