<template>
    <div class="card">
        <Carousel :value="products" :numVisible="6" :showNavigators="true" showIndicators="false" :numScroll="1" :responsiveOptions="responsiveOptions" >
            <template #item="slotProps">
                <div class="product-card">
                    <div class="image-container">
                        <img :src="slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                      
                    </div>
                   
                  
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const products = ref([
{ name: "Produto 1", image: "CatagoriasIcons/eletrica.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 2", image: "CatagoriasIcons/hidraulica.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 3", image: "CatagoriasIcons/ferramentas.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 4", image: "CatagoriasIcons/iluminacao.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 5", image: "CatagoriasIcons/pintura.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 5", image: "CatagoriasIcons/smart.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 5", image: "CatagoriasIcons/ventilacao.png", price: 100, inventoryStatus: "INSTOCK" },
]);

const responsiveOptions = ref([
    { breakpoint: '4000px', numVisible: 6, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 6, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
]);




</script>

<style scoped>
.product-card {
    border: 1px solid var(--surface-200);
    border-radius: 8px;
    margin: 8px;
    padding: 16px;
    background-color: white;
}

.image-container {
    position: relative;
    width: 100%;
    text-align: center;
}

.product-image {
   width: 180px;
    border-radius: 8px;
}





</style>
