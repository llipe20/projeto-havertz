<template>
    <div 
        :class="bg"
        class="flex justify-center items-center gap-4 w-auto h-auto p-4 pt-2 pb-2 m-2 shadow">
        <span class="text-base text-white">
            {{ msg }}
        </span>
    </div>
</template>

<script>
export default {
    name : 'ModalTV',

    props : {
        msg : String,
        bg : String
    }
}
</script>