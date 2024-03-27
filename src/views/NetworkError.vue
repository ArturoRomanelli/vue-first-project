<template>
  <div class="networkError">
    <h1>Uh-oh</h1>
    <h3>
      It looks like you're experiencing some network issiues, please take a breath and
      <a href="#" @click="$router.go(-1)">click here</a> to try again
    </h3>
  </div>
</template>
