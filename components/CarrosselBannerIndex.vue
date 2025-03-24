<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :showNavigators="false" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
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
    { name: "Produto 1", image: "banners_index/1.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 2", image: "banners_index/2.png", price: 150, inventoryStatus: "LOWSTOCK" },
    { name: "Produto 1", image: "banners_index/03.png", price: 100, inventoryStatus: "INSTOCK" },
    { name: "Produto 1", image: "banners_index/4.png", price: 100, inventoryStatus: "INSTOCK" }
]);

const responsiveOptions = ref([
    { breakpoint: '4000px', numVisible: 1, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '767px', numVisible: 3, numScroll: 1 },
    { breakpoint: '575px', numVisible: 3, numScroll: 1 }
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
    width: 100%;
    border-radius: 8px;
}

.tag-status {
    position: absolute;
    left: 5px;
    top: 5px;
}

.product-name {
    font-weight: 500;
    margin-top: 12px;
}

.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
}

.product-price {
    font-weight: 600;
    font-size: 1.2rem;
}


</style>
