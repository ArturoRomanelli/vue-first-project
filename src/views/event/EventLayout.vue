<template>
  <div v-if="Gstore.event">
    <h1>{{ Gstore.event.title }}</h1>
    <RouterLink :to="{ name: 'EventDetails', params: { id } }">Details</RouterLink>
    <RouterLink :to="{ name: 'EventRegister', params: { id } }">Register</RouterLink>
    <RouterLink :to="{ name: 'EventEdit', params: { id } }">Edit</RouterLink>
    <RouterView :event="Gstore.event"></RouterView>
  </div>
</template>

<script>
export default {
  inject: ['Gstore']
}
</script>
