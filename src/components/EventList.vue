<script setup>
import { RouterLink } from 'vue-router'
import EventService from '../services/EventService.js'
</script>

<script>
import EventCard from './EventCard.vue'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents(2, this.page)
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<template>
  <main>
    <h1>Events for Good</h1>
    <div class="events"></div>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <RouterLink :to="{ name: 'EventList', query: { page: page - 1 } }" rel="prev" v-if="page != 1"
      >Previous Page</RouterLink
    >
    <RouterLink :to="{ name: 'EventList', query: { page: page + 1 } }" rel="next"
      >Next Page</RouterLink
    >
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
