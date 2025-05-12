<template>
  <client-only>
    <main>
      <div class="container-main">

        <template v-if="isDesktop">
         
          <PagesComponentsFerramentasCarrousselOfertasFerramentasAcessorios />
        
          <PagesComponentsFerramentasCarrousselOfertasFerramentas/>
  
          <PagesComponentsFerramentasImgBanner/>
          <PagesComponentsFerramentasCarrousselOfertasFerramentasDiscos />
        </template>
 
        <template v-else>
            <MobilePagesComponentsHidraulicaMCarrousselOfertasHidraAcessorios></MobilePagesComponentsHidraulicaMCarrousselOfertasHidraAcessorios>
            <MobilePagesComponentsHidraulicaMCarrousselOfertasHidraConexoes>  </MobilePagesComponentsHidraulicaMCarrousselOfertasHidraConexoes>
                <img class="bannerMobile" src="/banners_hidraulica/bannerMobile.avif" alt="">
            <MobilePagesComponentsHidraulicaMCarrousselOfertasHidraDuchas></MobilePagesComponentsHidraulicaMCarrousselOfertasHidraDuchas>
          
        </template>

      </div>
    </main>
  </client-only>
  </template>
  
  <style scoped>
    .bannerMobile{
        width: 100%;
        border-radius: 5px;
        margin-top: 20px;
    }

    main{
    display: grid;
    place-items: center;
}

.container-main{
    max-width: 1460px;
}
    
  </style>
  
  <script setup>
  import { computed } from "vue";
  import { useWindowSize } from "@vueuse/core";
import { PagesComponentsHidraulicaImgBanner } from "#components";
  
  const { width } = useWindowSize();
  
  const isMobile = computed(() => width.value < 1024);
  const isDesktop = computed(() => width.value >= 1024);
  </script>
  