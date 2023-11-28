<template>
  <div class="flex flex-col justify-center items-center gap-4 bg-gray-200 w-full p-4">
      <OutDoor />

      <!-- CAIXA DE CATEGORIAS -->
      <div class="flex flex-wrap justify-center items-center w-full lg:w-5/6 gap-3">
          <div class="flex justify-start items-center w-full p-4 text-black text-base border-b border-gray-200 bg-white shadow">
              <span>MANGÁS</span>
          </div>
          <div class="grid grid-cols-4 grid-rows-5 md:grid-cols-5 md:grid-rows-4 xl:grid-cols-10 lg:grid-rows-2 justify-center items-center w-full shadow">
              <CardView 
                  v-for="product in products"
                  :key="product.id"
                  :value="'category'"
                  :product="product"
              />
          </div>
      </div>

      <!-- CAIXA DE PRODUTOS -->
      <div class="flex flex-col justify-center items-center w-full lg:w-5/6 box-border gap-3">
          <div class="flex justify-start items-center w-full p-4 text-black text-base border-b border-gray-200 box-border bg-white shadow">
              <span>OFERTAS DA SEMANA</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center lg:justify-start items-center gap-3 w-full box-border mb-2">
              <router-link 
                  to="/product"
                  v-for="product in products"
                  :key="product.id"
                   @click="Mahoraga(product.id)"
              >
                  <CardView 
                      :value="'product'"
                      :product="product"
                  />
              </router-link>
          </div>   
      </div>

      <ButtonView 
        :tag="mais"
        class="flex justify-center items-center w-24 h-10 border-0 outline-0 text-black bg-white mb-2 hover:border border-palete-400"
      />
  </div>
</template>

<script>
import CardView from '../components/Card.vue'
import OutDoor from '../components/OutdoorView.vue'
import ButtonView from '../components/ButtonView.vue'
export default {
  name: 'HomeView',

  components: {
    CardView, OutDoor, ButtonView
  },

  data() {
    return {
        mais : '<span>Ver mais</span>',
    }
  },

  computed: {
      products() {
        return this.$store.state.product
      }
  },

  methods : {
    // manda o id do produto clicado para o states
      Mahoraga(id) {
          this.$store.commit("UpdateId", id)
      }
  },

  async created() {
      await this.$store.dispatch("getProduct")
  }
}
</script>
