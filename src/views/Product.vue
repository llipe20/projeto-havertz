<template>
  <div class="flex flex-col justify-center items-center gap-3 w-full bg-gray-200 text-black text-base p-4 relative">

        <ModalTV 
            v-if="isModal"
            :bg="bg"
            :msg="msg"
            class="absolute top-10 right-10"
        />

        <CardView 
            :value="'prod-indiv'"
            :product="product[0]"
            @modal="ShowModal"
            @store="ModalStore"
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
import ModalTV from '../components/Modal.vue'
export default {
    name : 'ProductView',

    components : {
        CardView, ModalTV
    },

    data() {
      return {
          product : '',
          msg : '',
          bg : '',
          isModal : false
      }
    },

    methods : {
        GetProduct() {
            var products = this.$store.state.product
            var id = this.$store.state.idProduct
            this.product = products.filter(prod => prod.id == id)
        },

        ShowModal(value) {
            console.log(value)
            if(value == true) {
                this.msg = 'Adicionado ao carrinho!',
                this.bg = 'bg-green-800'
            } else {
                this.msg = 'Escolha um volume antes de adicionar!'
                this.bg = 'bg-red-800'
            }
            
            this.isModal = true
            const Die = setInterval(() => {
                this.isModal = false
                clearInterval(Die)
            }, 2000) 
        },

        ModalStore(value) {
            if(value) {
                this.msg = 'Sistema de pagamento em desenvolvimento!',
                this.bg = 'bg-gray-600'

                this.isModal = true
                const Dead = setInterval(() => {
                    this.isModal = false
                    clearInterval(Dead)
                }, 2000) 
            }
        }
    },

    created() {
        this.GetProduct()
    }
}
</script>
