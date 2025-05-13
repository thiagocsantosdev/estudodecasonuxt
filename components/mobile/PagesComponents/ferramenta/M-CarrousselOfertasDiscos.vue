<template>
    <div class="card">
        <p class="title">
            Duchas, Torneira e Cubas
        </p> 
        <Carousel :value="productsFilter" :numVisible="2" :showNavigators="false" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="{ data }">
                <div class="product-card">
                    <div class="image-container">
                        <img :src="getImageUrl(data.image)" :alt="data.name" class="product-image" />
                        <Tag :value="data.inventoryStatus" :severity="getSeverity(data.inventoryStatus)" class="tag"/>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">{{ data.name }}</h3>
                        <div class="product-footer">
                            <span class="product-price">R$:{{ data.price }}</span>
                            <div class="buttons">
                                <Button icon="pi pi-heart" severity="secondary" outlined />
                                <Button icon="pi pi-shopping-cart" class="ml-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([]);
 
const productsFilter = computed(()=>
products.value.filter((item) => item.category1 === "ferramenta" && item.category2 === "discos"))

const responsiveOptions = ref([
    { breakpoint: '1400px', numVisible: 3, numScroll: 1},
    { breakpoint: '1199px', numVisible: 3, numScroll: 1},
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 2, numScroll: 1 }
]);

const fetchProducts = async () => {
    try {
        const response = await fetch("/api/products");
        products.value = await response.json();
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
};

onMounted(fetchProducts);

const getImageUrl = (image) => {
    return image.startsWith("/") ? image : `/produtos/${image}`;
};

const getSeverity = (status) => {
    return {
        INSTOCK: "success",
        SALDAO: "warn",
        OUTOFSTOCK: "danger"
    }[status] || null;
};
</script>

<style scoped>


.card{
    width: 100dvw;
}

.title{
    font-family: 'Helvetica';
    font-size: 1rem;
    margin-left: 10px;
    margin-top: 20px;
    color: #414452;
}




/* Estilização do card de produto */
.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 180px;
    height: 300px;
    margin: 5px;
}

/* Estilização da imagem */
.image-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;


}

.product-image {
    max-width: 100%;
    border-radius: 5px;
    height:140px;
    margin-top: 20px;
   
}

/* Tag de status do produto */
.tag {
    position: absolute;
    top: 5px;
    left: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .6rem;
  
}

/* Nome do produto */
.product-name {
    font-size: 1rem;
    margin: 10px 0;
    font-weight: lighter;
    font-family: Arial, Helvetica, sans-serif;
    height: 40px;

}

/* Rodapé do card com preço e botões */
.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    flex-direction: column;
}

.product-price {
    font-size: 1.4rem;
    
    color: #1f1f1f;
    font-family:'impact'

}

.buttons {
    display: flex;
    gap: 10px;
}
</style>