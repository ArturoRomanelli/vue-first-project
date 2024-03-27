<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <RouterLink :to="{ name: 'EventDetails', params: { id } }">Details</RouterLink>
    <RouterLink :to="{ name: 'EventRegister', params: { id } }">Register</RouterLink>
    <RouterLink :to="{ name: 'EventEdit', params: { id } }">Edit</RouterLink>
    <RouterView :event="event"></RouterView>
  </div>
</template>

<script>
import EventService from '../../services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
