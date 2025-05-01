<template>
    <div class="card">
        <p class="title">
            Conexoes
        </p> 
        <Carousel :value="productsFilter" :numVisible="6" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="{data}">
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

                               <button>Comprar</button>
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
products.value.filter((item) => item.category1 === "hidraulica" && item.category2 === "conexoes"))

const responsiveOptions = ref([
    { breakpoint: '1400px', numVisible: 6, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 6, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
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
/* Estilização do card de produto */
.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 200px;
    height: 300px;
    margin-top: 20px;
    display: grid;
    place-items: center;
}

.title{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    margin-top: 60px;
    margin-left: 40px;
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
}

/* Tag de status do produto */
.tag {
    position: absolute;
    top: 5px;
    left: 5px;
    font-family: Arial, Helvetica, sans-serif;
}

/* Nome do produto */
.product-name {
    font-size: 1rem;
    margin: 10px 0;
    font-weight: lighter;
    font-family: Arial, Helvetica, sans-serif;
}

/* Rodapé do card com preço e botões */
.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.product-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #27ae60;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

button{
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 4px;
    border-radius: 5px;
    opacity: .8;
    transition: 600ms;
}


button:hover{
    cursor: pointer;
    opacity: 1;
    transition: 600ms;
}
</style>
