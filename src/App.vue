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
    },

    watch: {
    '$route'(to, from) {
      // Rola a página para o topo quando a rota é alterada
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style>
    *::-webkit-scrollbar {
        display: none;
    }
</style>
