<template>
  <client-only>
    <div class="main">
      <div class="container-main">
        
        <template v-if="isDesktop">
          <CarrosselBannerIndex />
          <OfertasCategorias />
          <SecaoPromocional1 />
          <CarrousselOfertas1 />
          <EscolhaComodos></EscolhaComodos>
          <CarrousselOfertas2 />
          <CarrousselOfertas3 />
          <CarrousselOfertas4 />
          <NewsLetters></NewsLetters>
        </template>

        <template v-else>
          <MobileMCarrosselBannerIndex />
          <MobileMOfertasCategorias />
          <mobile-m-carroussel-ofertas1 />
          <mobile-m-carroussel-ofertas2 />
          <mobile-m-comodos></mobile-m-comodos>
          <mobile-m-carroussel-ofertas3 />
          <mobile-m-carroussel-ofertas4 />
          <mobile-m-NewsLetters></mobile-m-NewsLetters>
         
        </template>

      </div>
    </div>
  
  </client-only>
</template>


<style scoped>


.main{
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

const { width } = useWindowSize();

const isMobile = computed(() => width.value < 1024);

const isDesktop = computed(() => width.value >= 1024);


</script>