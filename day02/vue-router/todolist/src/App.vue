<template>
  <div id="app">
    <Navbar></Navbar>

    <div class="container">
      <div class="row">
        <router-view/>
      </div>
    </div>



  </div>
</template>

<script>

  import Navbar from '@/components/Bars/Navbar'
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>
