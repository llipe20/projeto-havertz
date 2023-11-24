<template>
  <div class="flex flex-col justify-center items-center gap-4 bg-gray-200 w-full p-4">
      <OutDoor />

      <!-- CAIXA DE CATEGORIAS -->
      <div class="flex flex-wrap justify-center items-center w-full lg:w-5/6 bg-white">
          <div class="flex justify-start items-center w-full p-4 text-black text-base border-b border-gray-200">
              <span>CATEGORIAS</span>
          </div>
          <div class="flex flex-wrap justify-center lg:justify-stretch items-center w-full">
              <CardView :value="'category'"/>
          </div>
      </div>

      <!-- CAIXA DE PRODUTOS -->
      <div class="flex flex-col justify-center items-center w-full lg:w-5/6 box-border mb-4">
          <div class="flex justify-start items-center w-full p-4 text-black text-base border-b border-gray-200 mb-3 box-border bg-white">
              <span>OFERTAS DA SEMANA</span>
          </div>
          <div class="flex flex-wrap justify-center lg:justify-start items-center gap-2 w-full box-border">
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
