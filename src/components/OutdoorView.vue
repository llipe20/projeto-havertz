<template>
    <div 
        class="flex justify-center items-center w-full lg:w-5/6 h-40 md:h-80 relative"
        :style="`background-image: url(${url}); background-size: cover; background-position: center center`"
    >
        <ButtonView 
            :tag="arrowLeft"
            class="absolute flex justify-center items-center h-full w-10 text-black left-0 top-0 opacity-30 hover:opacity-100"
        />

        <ButtonView 
            :tag="arrowRight"
            class="absolute flex justify-center items-center h-full w-10 text-black right-0 top-0 opacity-30 hover:opacity-100"
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

            arrowRight : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>',

            banners : [],
            url : 'https://i.ibb.co/wdfLzCL/dd9aad00-4f64-4b19-93eb-4ed4129fdc08.jpg'
        }
    },

    methods : {
        async GetBanners() {
            const req = await fetch('https://json-serve-projeto-havertz-api.vercel.app/banners')
            const res = await req.json()
            this.banners = res
        },

        ShowBanners(value) {
            this.url = this.banners[value].url
        }
    },

    async mounted() {
        await this.GetBanners()
        let i = 0
        setInterval(() => {
            if(i > (this.banners.length - 1)) {
                i = 0
            }
            this.ShowBanners(i)
            i++
        },3000)
    }
}
</script>
