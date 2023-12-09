<template>
    <!-- CARD PARA EXIBIR PRODUTO -->
    <div 
        v-if="value === 'product'"
        class="flex flex-col justify-between itmes-center w-auto h-72 lg:h-80 bg-white shadow box-border hover:border border-palete-400">
        <div class="w-full h-2/3 bg-palete-400 overflow-hidden">
            <img 
                :src="product.poster" 
                :alt="product.nome"
                class="w-full"
            >
        </div>
        <div class="flex flex-col justify-between items-start gap-1 p-2 w-full h-28 p-2">
            <h2 class="text-sm">
                {{ product.nome }} 
            </h2>
            <div class="flex items-end justify-center gap-1">
                <span class="text-sm pb-1">
                    R$
                </span> 
                <h2 class="text-base lg:text-xl">
                    {{ product.valor_atual.toFixed(2) }}
                </h2>
                <s class="text-xs pl-1 pb-1">
                    R$ {{ product.valor_antigo.toFixed(2) }}
                </s>
            </div>
            <div class="flex justify-between items-center gap-2 w-full pt-1">
                <!-- 5 estrelas -->
                <div class="flex">
                    <svg
                        v-for="(star, index) in 5"
                        :key="index"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-3 h-3 text-gray-300"
                        
                    >
                        <path
                            fill-rule="evenodd" 
                            :class="{ 'text-yellow-400': index < product.estrelas }"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <div class="flex items-center justify-center gap-1">
                     <span class="text-xs">
                        {{ product.vendas }}
                    </span>
                    <span class="text-xs hidden lg:flex">
                        vendidos
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- CARD PARA MONTAR AS CATEGORIAS --> 
    <div
        v-if="value === 'category'" 
        class="flex flex-col justify-center items-center gap-2 h-36 bg-white text-black border border-gray-200 hover:border-palete-400 p-2 box-border"
    >
        <div class="w-10 h-10 lg:h-16 lg:w-16 rounded-full border border-black bg-palete-400 overflow-hidden">
            <img 
                :src="product.poster" 
                :alt="product.nome" 
                class="w-10 lg:w-16 h-10 lg:h-16"
            >
        </div>
        <h2 class="text-base text-center">
            {{ product.categoria }}
        </h2>
    </div>

    <!-- CARD PARA MONTAR O CARRINHO -->
    <div
        v-if="value === 'cart'" 
        class="flex justify-between items-center w-full min-h-44 lg:h-44 bg-white text-black border border-gray-200 hover:border-palete-400 p-4"
    >
        <!-- BLOCO 1 - imagem -->
        <div class="flex justify-center items-center w-32 md:w-40 md:h-full h-32 border border-2 shadow">
            <img
                :src="product.vol_select.image" 
                :alt="product.nome"
                class="w-1/2"
            >
        </div>
        <!-- BLOCO 2 - informações do produto -->
        <div class="flex flex-col justify-between items-start w-3/6 md:w-4/6 h-full text-black text-base p-2 pl-4 lg:pl-4">
            <div class="flex flex-col justify-start items-start">
                <h2 class="font-bold text-sm lg:text-lg pb-1">
                    {{ `${product.nome} - Vol. ${product.vol_select.id}` }}
                    <span class="text-sm lg:text-lg font-normal">
                        {{ product.vol }}
                    </span>
                </h2>
                <h3 class="lg:text-lg">
                    <s class="text-xs lg:text-sm">
                        R$ {{ product.valor_antigo.toFixed(2)}} 
                    </s> 
                    R$ {{ product.valor_atual.toFixed(2)}}
                </h3>
                <h3 class="text-xs">em até {{ product.credito }} sem juros</h3>
            </div>
            <!-- quant. aqui -->
            <div class="flex gap-2 w-auto justify-center items-center text-white mt-2 md:mt-0">
                <span class="text-black text-center">Quantidade</span>
                <span class="text-black text-center font-bold">
                    {{ product.quantidade }}
                </span>
            </div>
        </div>
        <!-- BLOCO 3 - excluir -->
        <div class="flex flex-col justify-evenly items-center h-32 w-1/6">
            <input type="checkbox" class="w-4 h-4 lg:h-5 lg:w-5 cursor-pointer">
            <!-- botão de excluir -->
            <ButtonView 
                @click="RemoverCart(product.id)"
                :tag="excluir"
            />
        </div>
    </div>

    <!-- CARD PARA VER DETALHES DE UM PRODUTO -->   
    <div 
        v-if="value === 'prod-indiv'" 
        class="flex flex-col lg:flex-row justify-start items-center gap-5 w-full lg:w-5/6 min-h-44 lg:h-auto bg-white text-black border border-gray-200 hover:border-palete-400 p-6"
    >
        <div class="flex justify-center items-center w-full h-64 lg:w-80 lg:h-96 border border-2 overflow-hidden shadow">
            <img 
                :src="Object.values(volSelect).length !== 0 ? volSelect.image : product.poster" 
                :alt="product.nome"
                class="w-1/2 lg:w-56"
            >
        </div>
        <div class="flex flex-col justify-between items-start h-auto lg:h-85 w-full lg:w-4/6">
            <!-- informações de produto -->
            <div class="flex flex-col justify-start items-start w-full gap-1">
                <h2 class="font-bold text-lg lg:text-2xl">
                    {{product.nome}} 
                    {{ Object.values(volSelect).length !== 0 ? `Vol. ${volSelect.id}` : ''}}
                </h2>
                <div class="flex justify-start items-center gap-2 w-2/3">
                    <!-- 5 estrelas -->
                    <div class="flex">
                        <svg
                            v-for="(star, index) in 5"
                            :key="index"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-3 lg:w-4 lg:h-4 h-3 text-gray-300"
                        >
                            <path
                                fill-rule="evenodd"  
                                :class="{ 'text-yellow-400': index <= product.estrelas }"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div class="flex items-center justify-center gap-1">
                        <span class="text-sm lg:text-base">
                           {{ product.vendas}}
                        </span>
                        <span class="text-sm lg:text-base">
                            vendidos
                        </span>
                    </div>
                </div>
                <h3 class="text-lg lg:text-2xl pt-2">
                    <s class="text-base lg:text-xl mr-1">
                        R$ {{product.valor_antigo.toFixed(2)}}
                    </s> 
                    R$ {{product.valor_atual.toFixed(2)}}
                </h3>
                <h3 class="text-sm lg:text-base">
                    em até {{product.credito}} sem juros
                </h3>
                <h3 class="text-sm lg:text-base">
                    frete: 
                    <span class="text-green-800">
                        {{product.frete}}
                    </span>
                </h3>
            </div>
            <!-- variações --> 
            <div class="flex flex-wrap justify-start items-center mt-3 md:mb-3 lg:mb-0 lg:mt-0 gap-3 w-full">
                <ButtonView 
                    v-for="vol in product.volumes"
                    :key="vol.id"
                    :tag="`vol. ${vol.id}`"
                    class="h-auto w-auto p-1 pl-2 pr-2 border border-gray-200 hover:border hover:border-palete-400 shadow"
                    :class="{ 
                        'bg-palete-400': volSelect.id == vol.id, 
                        'text-white': volSelect.id == vol.id, 
                        'bg-gray-200': volSelect.id != vol.id,
                        'text-black': volSelect.id != vol.id }"
                    @click="SelectVol(vol, product)"
                />
            </div>
            <!-- Botões -->
            <div class="flex flex-col items-start gap-4 justify-center">
                <!-- botão de quant. aqui -->
                <div class="grid grid-cols-3 w-20 lg:w-32 h-6 lg:h-9 justify-center items-center text-white mt-4 md:mt-0">
                    <ButtonView 
                        @click="UpdateQuant('-')"
                        :tag="menos"
                        class="flex justify-center items-center h-full bg-palete-400"
                    />
                    <span class="text-black text-center">
                        {{ quantidade }}
                    </span>
                    <ButtonView
                        @click="UpdateQuant('+')" 
                        :tag="mais"
                        class="flex justify-center items-center h-full bg-palete-400"
                    />
                </div>
                <div class="flex justify-center items-center gap-3">
                    <ButtonView 
                        @click="Add()"
                        :tag="add"
                        class="flex justify-center items-center w-28 lg:w-44 h-10 lg:h-12 border-palete-400 text-center text-sm border-2 border-0 outline-0 shadow text-palete-400 hover:scale-105"
                     />
                    <ButtonView
                        @click="Store()" 
                        :tag="comprar"
                        class="flex justify-center items-center w-28 lg:w-44 h-10 lg:h-12 bg-palete-400 text-sm text-center text-white border-0 outline-0 shadow hover:scale-105"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonView from '../components/ButtonView.vue'
export default {
    name : 'CardView',

    props : {
        value : String,
        product : Object,
    },

    components : {
        ButtonView
    },

    data() {
        return {
            productSelect : {},
            quantidade : 1,
            volSelect : {},
            mais : '<span>+</span>',
            menos : '<span>-</span>',
            comprar : '<span class="flex justify-center items-center gap-1" >Comprar <span class="hidden lg:flex">agora</span></span>',
            add : '<span class="flex justify-center items-center gap-1">Adicionar <span class="hidden lg:flex">ao carrinho</span></span>',
            excluir : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:text-red-700"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>',
        }
    },

    methods : {
        // Adiciona produto no carrinho
        Add() {
           const element = this.productSelect && Object.entries(this.productSelect).length > 0 ? this.productSelect : null;

            if(element == null) {
                this.$emit('modal', false)
            } else {
                element.quantidade = this.quantidade
                this.$store.commit("AddCart", element)
                this.$emit('modal', true)
            }
        },

        // remover produto do carrinho
        RemoverCart(product) {
            this.$store.commit("RemoveCart", product)
        },

        // Manipular a quantidade de vezes de comprar um produto
        UpdateQuant(operacion) {
            switch(operacion) {
                case '+':
                    this.quantidade += 1 
                break
                case '-':
                    if(this.quantidade > 0) {
                        this.quantidade -= 1 
                    }
                break
                default:
                    this.quantidade = 1 
            }
        },

        // Selecionar o volume desejado
        SelectVol(vol, product) {
            product.vol_select = vol
            this.productSelect = product
            // add classes para volume selecionado
            this.volSelect = vol
        },

        Store() {
            this.$emit('store', true)
        }
    }
}
</script>