<template>
  <div class="bg-gray-200 w-full p-4">
      <div class="flex justify-center items-center w-5/6">
          <CardView />
      </div>
  </div>
</template>

<script>
import CardView from '../components/Card.vue'

export default {
  name: 'HomeView',

  components: {
    CardView
  }
}
</script>
