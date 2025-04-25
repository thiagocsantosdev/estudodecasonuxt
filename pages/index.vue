<template>
    <div class="main">

   
    <div class="container-main">

  


    <!-- <CarrosselBannerIndex v-if="!isMobile"></CarrosselBannerIndex>--> 
    <MobileMCarrosselBannerIndex v-if="isMobile"></MobileMCarrosselBannerIndex>

  
   <!--  <OfertasCategorias v-if="!isMobile"></OfertasCategorias>  -->
      <MobileMOfertasCategorias v-if="isMobile"></MobileMOfertasCategorias>
    
      

      <!--<SecaoPromocional1 v-if="!isMobile"></SecaoPromocional1>  -->

      <mobileM-CarrousselOfertas1 v-if="isMobile"></mobileM-CarrousselOfertas1>
      <mobileM-CarrousselOfertas2 v-if="isMobile"></mobileM-CarrousselOfertas2>
        
    
      
<!-- <CarrousselOfertas1 v-if="isDesktop"></CarrousselOfertas1>  -->
    

   

   
<!--<CarrousselOfertas2 v-if='isDesktop'></CarrousselOfertas2>  -->
       

<!--
       <CarrousselOfertas2 v-if="isDesktop"></CarrousselOfertas2>  -->
  
        <M-CustomFooter v-if="isMobile"></M-CustomFooter>
       
     
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

const isMobile = computed(() => width.value < 1024);

const isDesktop = computed(() => width.value >= 1024);


</script>