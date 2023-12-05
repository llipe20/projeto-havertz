<template>
    <div class="flex flex-col justify-center items-center gap-3 w-full bg-gray-200 text-black text-base p-4">
        <div class="flex justify-start items-center w-full lg:w-5/6 p-4  border-b border-gray-200 bg-white shadow">
              <span>CARRINHO</span>
        </div>
        <!-- PRODUTOS -->
        <div class="grid grid-cols-1 justify-center items-center w-full lg:w-5/6 shadow">
            <!-- Carrinho vazio -->
            <div 
                v-if="products.length == 0"
                class="flex items-center justify-center gap-3 w-full h-96 opacity-40 text-2xl"    
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span>
                    Vazio
                </span>
            </div>
            <CardView 
                v-else
                v-for="product in products"
                :key="product.id"
                :product="product"
                :value="'cart'" 
            />
        </div>
        <!-- CAIXA DE RESUMO DE FATURA -->
        <div class="flex flex-col justify-start items-center gap-1 w-full lg:w-5/6 p-4 border-b border-gray-200 bg-white shadow">
            <div class="flex justify-between w-full">
                <span>SUBTOTAL:</span>
                <span>R$ 120,20</span>
            </div>
            <div class="flex justify-between w-full">
                <span>FRETE:</span>
                <span>R$ 20,20</span>
            </div>
            <div class="flex justify-between w-full">
                <span>DESCONTO:</span>
                <span>- R$ 0,20</span>
            </div>
            <div class="flex justify-between w-full font-bold">
                <span>TOTAL:</span>
                <span>R$ 230,20</span>
            </div>
            <div class="flex justify-end w-full pt-2">
                <ButtonView 
                    :tag="comprar"
                    class="flex justify-center items-center w-24 h-10 bg-palete-400 text-white border-0 outline-0 shadow"
                />
            </div>
        </div>
        <!-- CAIXA DE PRODUTOS -->
        <div class="flex flex-col justify-center items-center w-full lg:w-5/6 box-border gap-3 mt-10">
            <div class="flex justify-start items-center w-full p-4 text-black text-base border-b border-gray-200 box-border bg-white">
                <span>VOCÊ TAMBÉM PODE GOSTAR</span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center lg:justify-start items-center gap-2 w-full box-border mb-2">
                <router-link to="/product">
                    <!-- card aqui -->
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
import ButtonView from '../components/ButtonView.vue'
export default {
    name : 'CartView',

    components : {
        CardView, ButtonView
    },

    data() {
        return {
            comprar : '<span>Finalizar</span>',
            mais : '<span>Ver mais</span>',
            products : this.$store.state.cart || []
        }
    },

    watch: {
        '$store.state.cart': {
            handler(newCart) {
            this.products =  newCart ? [...newCart].reverse() : []
            },
            immediate: true // Garante que o handler seja chamado imediatamente ao montar o componente
        }
    }
}
</script>