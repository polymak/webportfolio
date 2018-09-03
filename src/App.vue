<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <MainMenu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    MainMenu,
    Footer
  }
}
</script>

<style>

</style>
