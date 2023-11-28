<template>
    <div class="flex flex-col justify-center items-center gap-3 w-full bg-gray-200 text-black text-base p-4">
        <div class="flex justify-start items-center w-full lg:w-5/6 p-4  border-b border-gray-200 bg-white shadow">
              <span>CARRINHO</span>
        </div>
        <!-- PRODUTOS -->
        <div class="grid grid-cols-1 justify-center items-center w-full lg:w-5/6 shadow">
            <span v-if="products.lenght == 0">
                Vazio
            </span>
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
            products : ''
        }
    },

    methods : {
        GetCart() {
            this.products = this.$store.state.cart
        }
    },

    created() {
        this.GetCart()
    }
}
</script>