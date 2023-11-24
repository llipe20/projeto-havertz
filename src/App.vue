<template>
    <div class="w-screen h-scren">
        <NavBar />
        <router-view></router-view>
        <FooterView />
    </div>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
import FooterView from '../src/components/Footer.vue'
export default {
    name : 'App', 

    components : {
      NavBar, FooterView
    }
}
</script>

<style>
    *::-webkit-scrollbar {
        display: none;
    }
</style>
