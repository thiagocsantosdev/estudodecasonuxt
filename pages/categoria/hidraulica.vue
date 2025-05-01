

<template>
    <main>
        <div class="container-main">
            
         <PagesComponentsHidraulicaCarrousselOfertasHidra></PagesComponentsHidraulicaCarrousselOfertasHidra>
         <PagesComponentsHidraulicaCarrousselOfertasHidraAcessorios></PagesComponentsHidraulicaCarrousselOfertasHidraAcessorios>
         
         <PagesComponentsHidraulicaCarrousselOfertasHidraDuchas></PagesComponentsHidraulicaCarrousselOfertasHidraDuchas>
         <div class="img-container">
            <img src="/banners_hidraulica/banner.avif" alt="">
         </div>
         
         <PagesComponentsHidraulicaCarrousselOfertasHidraConexoes></PagesComponentsHidraulicaCarrousselOfertasHidraConexoes>
    
        </div>
    </main>
</template>


<style scoped>



main{
    display: grid;
    place-items: center;
}


.container-main{
    max-width: 1460px;
}
.img-container{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
}

img{
    border-radius: 5px;
}
</style>
