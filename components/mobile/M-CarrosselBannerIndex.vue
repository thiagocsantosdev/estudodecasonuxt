<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
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
    { name: "Produto 1", image: "banners_index/1mobile.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 2", image: "banners_index/2mobile.png", price: 150, inventoryStatus: "LOWSTOCK" },
    { name: "Produto 1", image: "banners_index/3mobile.png", price: 100, inventoryStatus: "INSTOCK" }
]);

const responsiveOptions = ref([
    { breakpoint: '4000px', numVisible: 1, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
]);




</script>

<style scoped>
.product-card {
    border: 1px solid var(--surface-200);
    border-radius: 8px;
    margin: 2px;
    padding: 2px;
    background-color: white;
}

.image-container {
    position: relative;
    width: 100%;
    text-align: center;
}

.product-image {
    width: 100%;
    border-radius: 8px;
}





</style>
