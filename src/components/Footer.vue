<template>
    <div class="flex flex-col justify-center items-center gap-10 w-full h-auto bg-black pt-10">
        <div class="flex justify-evenly items-center w-5/6">
            <div class="flex flex-col justify-center items-center gap-1 text-base text-white">
                <span class="font-bold">
                    Conheça-nos
                </span>
                <span>valor 1</span>
                <span>valor 2</span>
            </div> 
        </div>

        <div class="flex flex-col justify-center items-center w-full text-white pt-4 bg-blue-900">
            <!-- BOX DE LOGO -->
            <div class="flex justify-center items-center gap-1 lg:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:w-10 lg:h-10 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>
                <span class="text-base lg:text-xl font-bold">
                    HAVERTZ
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