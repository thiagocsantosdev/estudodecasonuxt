<template>

    <p class="title">
        Escolha por cômodos
    </p>
    <ul>
        <li><img src="/categorias_desktop/COZINHA.png" alt=""></li>
        <li><img src="/categorias_desktop/BANHEIRO.png" alt=""></li>
        <li><img src="/categorias_desktop/AREASERVICO.png" alt="" srcset=""></li>
        <li><img src="/categorias_desktop/JARDIM.png" alt=""></li>
  
    </ul>
</template>


<style scoped>


ul{
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    gap: 5px;
  

}

li img{
    border-radius: 15px;
    height: 400px;
}


.title{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    margin-top: 60px;
    margin-left: 40px;
}


</style>