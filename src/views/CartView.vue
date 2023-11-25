<template>
    <div class="flex flex-col justify-center items-center gap-3 w-full bg-gray-200 text-black text-base p-4">
        <div class="flex justify-start items-center w-full lg:w-5/6 p-4  border-b border-gray-200 bg-white">
              <span>CARRINHO</span>
        </div>
        <div class="grid grid-cols-1 justify-center items-center w-full lg:w-5/6">
            <CardView :value="'cart'" />
        </div>
    </div>
</template>

<script>
import CardView from '../components/Card.vue'
export default {
    name : 'CartView',

    components : {
        CardView
    }
}
</script>