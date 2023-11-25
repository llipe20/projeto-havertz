<template>
  <div class="flex flex-col justify-center items-center gap-4 bg-gray-200 w-full p-4">
      <OutDoor />

      <!-- CAIXA DE CATEGORIAS -->
      <div class="flex flex-wrap justify-center items-center w-full lg:w-5/6 gap-3">
          <div class="flex justify-start items-center w-full p-4 text-black text-base border-b border-gray-200 bg-white">
              <span>CATEGORIAS</span>
          </div>
          <div class="grid grid-cols-4 grid-rows-5 md:grid-cols-5 md:grid-rows-4 xl:grid-cols-10 lg:grid-rows-2 justify-center items-center w-full">
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
              <CardView :value="'category'"/>
          </div>
      </div>

      <!-- CAIXA DE PRODUTOS -->
      <div class="flex flex-col justify-center items-center w-full lg:w-5/6 box-border gap-3">
          <div class="flex justify-start items-center w-full p-4 text-black text-base border-b border-gray-200 box-border bg-white">
              <span>OFERTAS DA SEMANA</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center lg:justify-start items-center gap-2 w-full box-border mb-2">
              <router-link to="/product">
                  <CardView :value="'product'"/>
              </router-link>

              <router-link to="/product">
                  <CardView :value="'product'"/>
              </router-link>

              <router-link to="/product">
                  <CardView :value="'product'"/>
              </router-link>

              <router-link to="/product">
                  <CardView :value="'product'"/>
              </router-link>

              <router-link to="/product">
                  <CardView :value="'product'"/>
              </router-link>

              <router-link to="/product">
                  <CardView :value="'product'"/>
              </router-link>
          </div>   
      </div>
  </div>
</template>

<script>
import CardView from '../components/Card.vue'
import OutDoor from '../components/OutdoorView.vue'


export default {
  name: 'HomeView',

  components: {
    CardView, OutDoor
  }
}
</script>
