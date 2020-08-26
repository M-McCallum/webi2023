<template>
  <div class="home">
    <landing/>
  </div>
</template>

<script>
// @ is an alias to /src
import landing from '@/components/landing.vue'

export default {
  name: 'home',
  components: {
    landing
  }
}


</script>
