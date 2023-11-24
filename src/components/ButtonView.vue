<template>
    <div v-html="tag" class="cursor-pointer">
        
    </div>
</template>

<script>
export default {
    name : 'ButtonView',

    props : {
        tag : String
    }
}
</script>