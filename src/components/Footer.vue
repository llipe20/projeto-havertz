<template>
    <div class="flex flex-col justify-center items-center gap-10 w-full h-auto bg-palete-400 pt-10">
        <div class="flex flex-wrap gap-y-4 lg:gap-0 justify-between lg:justify-evenly items-start w-5/6">
            <!-- link de footer box 1 - conheça-nos -->
            <div class="flex flex-col justify-center items-start gap-1 w-40 md:w-auto text-base text-white">
                <span class="font-bold">
                    Conheça-nos
                </span>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Sobre</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Comunidade</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Carreiras</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Acessibilidade</a>
            </div> 
            <!-- link de footer box 2 - vendas -->
            <div class="flex flex-col justify-center items-start gap-1 w-40 md:w-auto text-base text-white">
                <span class="font-bold">
                    Vendas
                </span>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Proteja sua marca</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Publique seus livros</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Seja um associado</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Anuncie</a>
            </div> 
             <!-- link de footer box 3 - pagamentos -->
            <div class="flex flex-col justify-center items-start gap-1 w-40 md:w-auto text-base text-white">
                <span class="font-bold">
                    Pagamentos
                </span>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Meios de pagamentos</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Programa de pontos</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Cartão de crédito</a>
            </div>
            <!-- link de footer box 4 - ajuda -->
            <div class="flex flex-col justify-center items-start gap-1 w-40 md:w-auto text-base text-white">
                <span class="font-bold">
                    Ajuda
                </span>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Sua conta</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Frete e entrega</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Devoluções e reembolso</a>
                <a href="#" class="no-underline hover:underline text-sm lg:text-base">
                    Gerencie seu conteúdo</a>
            </div>  
        </div>

        <div class="flex flex-col justify-center items-center w-full text-white p-4 pt-5 pb-10 bg-palete-500 gap-1">
            <!-- BOX DE LOGO -->
            <div class="flex justify-center items-center gap-1 lg:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:w-10 lg:h-10 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>
                <span class="text-base lg:text-xl font-bold">
                    HAVERTZ
                </span>
            </div>
            <!-- Box link de leis de uso -->
            <div class="flex flex-wrap justify-center items-center gap-2 gap-y-1">
                <a href="#" class="no-underline hover:underline text-sm">
                    Condições de uso</a>
                <span>|</span>
                <a href="#" class="no-underline hover:underline text-sm">
                    Notificações de privacidade</a>
                <span>|</span>
                <a href="#" class="no-underline hover:underline text-sm">
                    Cookes</a>
                <span>|</span>
                <a href="#" class="no-underline hover:underline text-sm">
                    Anúncios baseado em interesses</a>
            </div>
            <!-- @ e logotipo -->
            <div class="flex justify-center items-center lg:pt-0 ">
                <span class="text-sm">
                    &copy; 2023 projeto havertz - apenas apresentação
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'FooterView'
}
</script>