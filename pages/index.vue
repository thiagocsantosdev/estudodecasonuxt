<template>
  <client-only>
    <div class="main">
      <div class="container-main">
        
        <template v-if="isDesktop">
          <CarrosselBannerIndex />
          <OfertasCategorias />
          <SecaoPromocional1 />
          <CarrousselOfertas1 />
          <CarrousselOfertas2 />
        </template>

        <template v-else>
          <MobileMCarrosselBannerIndex />
          <MobileMOfertasCategorias />
          <mobile-m-carroussel-ofertas1 />
          <mobile-m-carroussel-ofertas2 />
          <MCustomFooter />
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