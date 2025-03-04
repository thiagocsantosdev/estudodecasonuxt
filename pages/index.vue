<template>
    <div class="main">

   
    <div class="container-main">

  
    <CustomHeader></CustomHeader>

    <CarrosselBannerIndex v-if="!isMobile"></CarrosselBannerIndex>
    <MobileMCarrosselBannerIndex v-if="isMobile"></MobileMCarrosselBannerIndex>

    <OfertasCategorias v-if="!isMobile"></OfertasCategorias>
    <MobileMOfertasCategorias v-if="isMobile"></MobileMOfertasCategorias>    

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

const isMobile = computed(() => width.value < 768);
const isTablet = computed(() => width.value >= 768 && width.value < 1024);
const isDesktop = computed(() => width.value >= 1024);


</script>