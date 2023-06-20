<template>
  <div>
    <div v-for="(task, index) in tasks" :key="index">
      <appTask
      :taskName="task.taskName"
      :taskNumber="task.taskNumber"
      ></appTask>
    </div>
  </div>
</template>

<script>
import appTask from './appTask.vue';

export default {
  name: 'appTasks',
  comments: { appTask },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
  },
};
</script>
