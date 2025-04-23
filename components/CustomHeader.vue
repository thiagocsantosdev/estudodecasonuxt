<template>
    <ThemeSwitcher />
    <div class="card" v-cloak>
        <MegaMenu :model="items" class="title" style="border-radius: 3rem">
            <template #start>
                <NuxtLink to="/">
                    <img class="logo" src="/logo.png" alt="" />
                </NuxtLink>
              
            </template>
            <template #item="{ item }">
                
                <NuxtLink v-if="item.root" class="custom-button" :to="item.link">
                  
                    <span>{{ item.label }}</span>
                </NuxtLink>
                <NuxtLink v-else-if="!item.image" class="custom-link" :to="item.link">
                    <span class="custom-badge">
                       

                       
                        <img :src="item.icon" class="icon-image" alt="icon" />
                   
                    </span>
                    <span class="custom-flex-column">
                        <span class="font-bold">{{ item.label }}</span>
                        <span class="whitespace-nowrap">{{ item.subtext }}</span>
                    </span>
                </NuxtLink>
                <div v-else class="custom-flex-column custom-gap">
                    <img alt="megamenu-demo" :src="item.image" class="item-image" />
                    <span>{{ item.subtext }}</span>
                    <Button :label="item.label" outlined />
                </div>
                
            </template>
            <template #end>
                <Avatar image="data:image/png;base64,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" shape="circle" />
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
                        { label: 'Fios e Cabos', icon: '/produto2.png', subtext: 'Flexível, Rígido, Antichamas', link :'/categoria/eletrica'  },
                        { label: 'Disjuntores', icon: '/disjuntor-mono-40a.png', subtext: 'Monofásico, Bifásico, IDR, DPS' },
                        { label: 'Quadro Distribuição', icon: '/quadro.png', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Fitas Isolantes', icon: '/fita-isolante.png', subtext: 'Baixa e Alta Tensão' },
                        { label: 'Conectores e Terminais', icon: '/conector.png', subtext: 'SPlit bolt, Derivação, Sapatinho' },
                        { label: 'Eletrodutos', icon: '/eletroduto.png', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Tomadas e Interruptores', icon: '/tomada.png', subtext: 'Subtext of item' },
                        { label: 'Lâmpadas e Painéis', icon: '/lampada.png', subtext: 'Subtext of item' },
                        { label: 'Sensores', icon: '/sensor.png', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [{ image: 'banner-eletrica-wp.png', label: 'Compre pelo WhatsApp', subtext: 'Antecipe suas compras' }]
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


[v-cloak] {
  display: none !important;
}
</style>
