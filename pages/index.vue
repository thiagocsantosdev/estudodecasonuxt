<template>
    <div class="main">

   
    <div class="container-main">

  


    <CarrosselBannerIndex v-if="isDesktop"></CarrosselBannerIndex>

    <MobileMCarrosselBannerIndex v-if="isMobile"></MobileMCarrosselBannerIndex>

  
    <OfertasCategorias v-if="isDesktop"></OfertasCategorias>  

      <MobileMOfertasCategorias v-if="isMobile"></MobileMOfertasCategorias>
    
      

    <SecaoPromocional1 v-if="isDesktop"></SecaoPromocional1> 

      <mobileM-CarrousselOfertas1 v-if="isMobile"></mobileM-CarrousselOfertas1>
      <mobileM-CarrousselOfertas2 v-if="isMobile"></mobileM-CarrousselOfertas2>
        
    
      
<CarrousselOfertas1 v-if="isDesktop"></CarrousselOfertas1> 
    

   

   
<CarrousselOfertas2 v-if='isDesktop'></CarrousselOfertas2>  
       


       <CarrousselOfertas2 v-if="isDesktop"></CarrousselOfertas2> 
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

import { ref, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();

const isMobile = ref(false);
const isDesktop = ref(false);

// Atualiza toda vez que o width mudar
watch(width, (newWidth) => {
  isMobile.value = newWidth < 1024;
  isDesktop.value = newWidth >= 1024;
}, { immediate: true });


</script>