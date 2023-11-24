<template>
    <div class="flex justify-center items-center w-full lg:w-5/6 h-80 bg-black relative">
        <ButtonView 
            :tag="arrowLeft"
            class="absolute flex justify-center items-center h-full w-10 text-white bg-red-500 left-0 top-0 opacity-30 hover:opacity-100 bgl"
        />

        <span class="text-white">BANNER AQUI</span>

        <ButtonView 
            :tag="arrowRight"
            class="absolute flex justify-center items-center h-full w-10 text-white bg-red-500 right-0 top-0 opacity-30 hover:opacity-100 bgr"
        />
    </div>
</template>

<script>
import ButtonView from './ButtonView.vue'
export default {
    name : 'OutDoor',

    components : {
        ButtonView
    }, 

    data() {
        return {
            arrowLeft : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>',

            arrowRight : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'
        }
    }
}
</script>

<style scoped>
    .bgl {
        background: linear-gradient(to left, transparent, black);
    }

    .bgr {
        background: linear-gradient(to left, black, transparent);
    }
</style>