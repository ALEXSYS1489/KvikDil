<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    const tasks = JSON.parse(localStorage.getItem('local'));
    if (tasks) {
      this.$store.commit('SET_TASKS', tasks);
    }
  },
};
</script>
