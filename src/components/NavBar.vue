<template>
    <div class="flex flex-col justify-center items-center w-full h-auto p-2 lg:gap-2 bg-black text-white">
        <!-- NAV SUPERIOR -->
        <nav class="flex justify-between items-center w-full lg:w-5/6 text-sm font-light">
            <!-- BLOCO 1 -redes -->
            <div class="hidden lg:flex justify-center items-center gap-2">
                <a href="#" class="no-underline hover:scale-105">Instagram</a>
                <span>|</span>
                <a href="#" class="no-underline hover:scale-105">Github</a>
                <span>|</span>
                <a href="#" class="no-underline hover:scale-105">Youtube</a>
                <span>|</span>
                <a href="#" class="no-underline hover:scale-105">WhatApp</a>
            </div>

            <!-- BLOCO ESPECIAL - mobile -->
            <div class="flex justify-center items-center gap-2 lg:hidden">
                <span>a</span>
                <span>b</span>
                <span>c</span>
                <span>d</span>
            </div>

            <!-- BLOCO 2 - notifi e ajuda -->
            <div class="flex justify-center items-center gap-2 lg:gap-4">
                <div class="flex justify-center items-center gap-2 cursor-pointer hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span class="hidden lg:flex">Notificações</span>
                </div>
                <div class="flex justify-center items-center gap-2 cursor-pointer hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    <span class="hidden lg:flex">Ajuda</span>
                </div>
                <div class="flex justify-center items-center gap-2 cursor-pointer hover:scale-105">
                    <span class="h-6 w-6 bg-white rounded-full"></span>
                    <span>User</span>
                </div>
            </div>
        </nav>
        <!-- NAV INTERMEDIÁRIA -->
        <nav class="flex justify-between lg:justify-evenly items-center w-full lg:w-5/6 pt-2 lg:p-2">
             <!-- BOX DE LOGO -->
            <div class="flex justify-center items-center gap-1 lg:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:w-10 lg:h-10 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>
                <span class="text-base lg:text-xl font-bold">
                    HAVERTZ
                </span>
            </div>
            <!-- BARRA DE PESQUEISA -->
            <div class="flex justify-between items-center gap-1 w-3/6 lg:w-3/5 bg-white pr-1">
                <input type="text" class="w-5/6 h-10 bg-white text-black border-0 outline-0 pl-4" placeholder="Pesquisar">
                <button class="flex justify-center items-center w-8 h-8 bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            <!-- BOX DE CARRINHO -->
            <div class="flex justify-center items-center gap-1 text-white cursor-pointer hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span class="hidden lg:flex">
                    Carrinho
                </span>
            </div>
        </nav>
        <!-- NAV INFERIOR -->
        <nav class="flex flex-wrap justify-center lg:justify-evenly lg:justify-evenly items-center gap-4 lg:gap-0 gap-y-2 lg:pt-0 w-full lg:w-5/6 pt-4 pb-2 text-sm">
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                Moda masculina</a>
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                Moda feminina</a>
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                Moda infantil</a>
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                Eletrodomésticos</a>
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                Moveis</a>
             <a href="#" class="no-underline hover:scale-105 hover:underline">
                Acessorios</a>
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                Celulares</a>
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                TV</a>
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                Livros</a>
            <a href="#" class="no-underline hover:scale-105 hover:underline">
                Outros...</a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>