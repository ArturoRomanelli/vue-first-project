<template>
  <p>Register for the event here</p>
  <button @click="register">Register me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['Gstore'],
  methods: {
    register() {
      this.Gstore.flashMessage = 'You are successfully registered for ' + this.event.title
      setTimeout(() => {
        this.Gstore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
