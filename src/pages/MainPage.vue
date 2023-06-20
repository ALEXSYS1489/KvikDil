<template>
  <div>
    <h1> Главная страница</h1>
    <Button type="button" @click="$router.push('/tasks')">Перейти к задачам</Button>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
};
</script>
