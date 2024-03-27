<template>
  <RouterLink class="event-link" :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid rgba(235, 235, 235, 0.64);
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
}
.event-link {
  color: rgba(235, 235, 235, 0.64);
  text-decoration: none;
}
</style>
