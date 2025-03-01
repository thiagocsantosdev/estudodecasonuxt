<template>
    <ThemeSwitcher />
    <div class="card">
        <MegaMenu :model="items" class="title" style="border-radius: 3rem">
            <template #start>
                <img class="logo" src="/logo.png" alt="" />
            </template>
            <template #item="{ item }">
                <a v-if="item.root" class="custom-button">
                    <span>{{ item.label }}</span>
                </a>
                <a v-else-if="!item.image" class="custom-link">
                    <span class="custom-badge">
                        <img :src="item.icon" class="icon-image" alt="icon" />
                    </span>
                    <span class="custom-flex-column">
                        <span class="font-bold">{{ item.label }}</span>
                        <span class="whitespace-nowrap">{{ item.subtext }}</span>
                    </span>
                </a>
                <div v-else class="custom-flex-column custom-gap">
                    <img alt="megamenu-demo" :src="item.image" class="item-image" />
                    <span>{{ item.subtext }}</span>
                    <Button :label="item.label" outlined />
                </div>
            </template>
            <template #end>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
        </MegaMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Elétrica',
        root: true,
        items: [
            [
                {
                    items: [
                        { label: 'Fios e Cabos', icon: '/produto2.png', subtext: 'Flexível, Rígido, Antichamas' },
                        { label: 'Disjuntores', icon: 'menuIcons/disjuntor-mono-40a.png', subtext: 'Monofásico, Bifásico, IDR, DPS' },
                        { label: 'Quadro Distribuição', icon: 'menuIcons/quadro.png', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Fitas Isolantes', icon: 'menuIcons/fita-isolante.png', subtext: 'Baixa e Alta Tensão' },
                        { label: 'Conectores e Terminais', icon: 'menuIcons/conector.png', subtext: 'SPlit bolt, Derivação, Sapatinho' },
                        { label: 'Eletrodutos', icon: 'menuIcons/eletroduto.png', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Tomadas e Interruptores', icon: 'menuIcons/tomada.png', subtext: 'Subtext of item' },
                        { label: 'Lâmpadas e Painéis', icon: 'menuIcons/lampada.png', subtext: 'Subtext of item' },
                        { label: 'Sensores', icon: 'menuIcons/sensor.png', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [{ image: 'menuIcons/eletricaBannerMenu.png', label: 'Compre pelo WhatsApp', subtext: 'Antecipe suas compras' }]
                }
            ]
        ]
    },
]);
</script>

<style scoped>
.title {
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}

.logo {
    width: 100px;
}

.custom-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 16px;
    overflow: hidden;
    position: relative;
    font-weight: 600;
    font-size: 14px; /* Aproximadamente 0.875rem */
    text-transform: uppercase;
    border-radius: 2rem;
}

.custom-link {
    display: flex;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    margin-bottom: 8px;
    gap: 12px;
}

.custom-link img {
    width: 100px;
}

.custom-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--primary);
    color: var(--primary-contrast);
    width: 48px;
    height: 48px;
}

/* Estilo para as imagens que se comportam como ícones */
.icon-image {
    width: 60px;
    height: 60px;
    border-radius: 50%; /* Faz as imagens ficarem circulares */
    object-fit: cover; /* Ajusta a imagem para cobrir o espaço sem distorção */
}

/* Para a imagem maior no menu */
.item-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 16px;
}

/* Estilos gerais */
.custom-flex-column {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.font-bold {
    font-weight: bold;
}

.whitespace-nowrap {
    white-space: nowrap;
}

.full-width {
    width: 100%;
}

.custom-gap {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px;
}
</style>
