<template>
  <div class="home">
    <img alt="Living cells logo" src="../assets/logo2.png" height="150px" width="250px">
    <Main msg="Biology Teaching Materials (Living cells)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'

export default {
  name: 'Home',
  components: {
    Main
  }
}
</script>