<template>
    <div class="main">

   
    <div class="container-main">

  
    <CustomHeader></CustomHeader>

    <CarrosselBannerIndex v-if="!isMobile"></CarrosselBannerIndex>
    <MobileMCarrosselBannerIndex v-if="isMobile"></MobileMCarrosselBannerIndex>

    <OfertasCategorias v-if="!isMobile"></OfertasCategorias>
      <MobileMOfertasCategorias v-if="!isDesktop"></MobileMOfertasCategorias>
    
      <SecaoPromocional1 v-if="!isMobile"></SecaoPromocional1>

      <mobileM-CarrousselOfertas1 v-if="!isDesktop"></mobileM-CarrousselOfertas1>
      <mobileM-CarrousselOfertas2 v-if="!isDesktop"></mobileM-CarrousselOfertas2>
        
      <CarrousselOfertas1 v-if="!isMobile"></CarrousselOfertas1>
        <mobileM-Product-destaque v-if="isMobile"></mobileM-Product-destaque>

    

        <EscolhaComodos></EscolhaComodos>

        <CarrousselOfertas2></CarrousselOfertas2>
</div>

</div>
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

const isMobile = computed(() => width.value < 868);

const isDesktop = computed(() => width.value >= 1024);


</script>