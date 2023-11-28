<template>
  <div class="flex flex-col justify-center items-center gap-3 w-full bg-gray-200 text-black text-base p-4">

      <CardView 
          :value="'prod-indiv'"
          :product="product[0]"
      />
      
      <div class="flex justify-start items-center w-full lg:w-5/6 p-4 border-b border-gray-200 shadow bg-white">
            <span>AVALIAÇÕES - em produção</span>
      </div>
      <!-- avaliações em produção -->
      <div class="flex justify-start items-center w-full lg:w-5/6 h-96 p-4 border-b border-gray-200 shadow bg-white">

      </div>
  </div>
</template>

<script>
import CardView from '../components/Card.vue'
export default {
    name : 'ProductView',

    components : {
        CardView
    },

    data() {
      return {
          product : ''
      }
    },

    methods : {
        GetProduct() {
            var products = this.$store.state.product
            var id = this.$store.state.idProduct
            this.product = products.filter(prod => prod.id == id)
        }
    },

    created() {
        this.GetProduct()
    }
}
</script>
