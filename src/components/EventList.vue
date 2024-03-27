<script setup>
import { RouterLink } from 'vue-router'
import EventService from '../services/EventService.js'
import { watchEffect } from 'vue'
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
      events: null,
      totalEvents: 0
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
    }
  }
}
</script>

<template>
  <main>
    <h1>Events for Good</h1>
    <div class="events"></div>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <RouterLink
      id="page-prev"
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >&#60; Previous Page</RouterLink
    >
    <RouterLink
      id="page-next"
      :to="{ name: 'EventList', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page &#62;</RouterLink
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
