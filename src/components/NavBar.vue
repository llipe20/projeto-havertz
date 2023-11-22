<template>
    <div class="flex flex-col justify-center items-center w-full h-auto p-2 bg-red-500 text-white">
        <!-- NAV SUPERIOR -->
        <nav class="flex justify-between items-center w-full lg:w-5/6 text-base font-light">
            <!-- BLOCO 1 -redes -->
            <div class="hidden lg:flex justify-center items-center gap-2">
                <a href="#" class="no-underline">Instagram</a>
                <span>|</span>
                <a href="#" class="no-underline">Github</a>
                <span>|</span>
                <a href="#" class="no-underline">Youtube</a>
                <span>|</span>
                <a href="#" class="no-underline">WhatApp</a>
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
                <div class="flex justify-center items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <span class="hidden lg:flex">Notificações</span>
                </div>
                <div class="flex justify-center items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    <span class="hidden lg:flex">Ajuda</span>
                </div>
                <div class="flex justify-center items-center gap-2 cursor-pointer">
                    <span class="h-6 w-6 bg-black rounded-full"></span>
                    <span>User</span>
                </div>
            </div>
        </nav>
        <!-- NAV INTERMEDIÁRIA -->
        <nav class="flex justify-evenly items-center w-full lg:w-5/6">
             <!-- BOX DE LOGO -->
            <div class="flex justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>
                <span class="text-xl font-bold">
                    HAVERTZ
                </span>
            </div>
            <!-- BARRA DE PESQUEISA -->
            <div class="flex justify-center items-center gap-1">
                <input type="text" class="h-10 w-1/2 bg-white text-black border-0 outline-0 pl-4">
                <button class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>