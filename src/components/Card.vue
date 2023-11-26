<template>
    <!-- CARD PARA EXIBIR PRODUTO -->
    <div 
        v-if="value === 'product'"
        class="flex flex-col justify-between itmes-center w-auto h-72 lg:h-80 bg-white shadow box-border hover:border border-palete-400">
        <div class="w-full h-2/3 bg-red-200">
            <!-- imagem do produto aqui! -->
        </div>
        <div class="flex flex-col justify-around items-start p-2 w-full h-1/3">
            <h2 class="text-sm">
                Nome do produto felipe dilsnds 
            </h2>
            <div class="flex items-end justify-center gap-1">
                <span class="text-sm pb-1">
                    R$
                </span> 
                <h2 class="text-base lg:text-xl">
                    50,00
                </h2>
                <s class="text-xs pl-1 pb-1">
                    R$ 60,00
                </s>
            </div>
            <div class="flex justify-between items-center gap-2 w-full pt-1">
                <!-- 5 estrelas -->
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </div>
                <div class="flex items-center justify-center gap-1">
                     <span class="text-xs">
                        5,2 mil
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
        <div class="w-10 h-10 lg:h-16 lg:w-16 rounded-full border border-black bg-red-200"></div>
        <h2 class="text-base text-center">Moda Feminina</h2>
    </div>

    <!-- CARD PARA MONTAR O CARRINHO -->
    <div
        v-if="value === 'cart'" 
        class="flex justify-between items-center w-full min-h-44 lg:h-44 bg-white text-black border border-gray-200 hover:border-palete-400 p-4"
    >
        <!-- BLOCO 1 - imagem -->
        <div class="w-32 md:w-40 md:h-full h-32 border bg-red-200">

        </div>
        <!-- BLOCO 2 - informações do produto -->
        <div class="flex flex-col justify-between items-start w-3/6 md:w-4/6 h-full text-black text-base p-2 pl-4 lg:pl-6">
            <div class="flex flex-col justify-start items-start">
                <h2 class="font-bold text-sm lg:text-lg pb-1">
                    Nome do produto felip0e da slva verde 
                </h2>
                <h3 class="lg:text-lg">
                <s class="text-xs lg:text-sm">R$ 60,00</s> R$ 50,00
                </h3>
                <h3 class="text-xs">em até x10 de 5,00 sem juros</h3>
            </div>
            <!-- botão de quant. aqui -->
            <div class="grid grid-cols-3 w-20 lg:w-32 h-6 lg:h-8 justify-center items-center text-white mt-2 md:mt-0">
                <ButtonView 
                    :tag="menos"
                    class="flex justify-center items-center bg-palete-400"
                />
                <span class="text-black text-center">
                    2
                </span>
                <ButtonView 
                    :tag="mais"
                    class="flex justify-center items-center bg-palete-400"
                />
            </div>
        </div>
        <!-- BLOCO 3 - excluir -->
        <div class="flex flex-col justify-evenly items-center h-32 w-1/6">
            <input type="checkbox" class="w-4 h-4 lg:h-5 lg:w-5 cursor-pointer">
            <!-- botão de excluir -->
            <ButtonView 
                :tag="excluir"
            />
        </div>
    </div>
</template>

<script>
import ButtonView from '../components/ButtonView.vue'
export default {
    name : 'CardView',

    props : {
        value : String
    },

    components : {
        ButtonView
    },

    data() {
        return {
            mais : '<span>+</span>',
            menos : '<span>-</span>',
            excluir : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>'
        }
    }
}
</script>