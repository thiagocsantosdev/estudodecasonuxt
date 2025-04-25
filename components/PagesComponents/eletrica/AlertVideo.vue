<template>
    <div class="container">

        <div class="content">
            <p>
                Dicas na hora comprar
            </p>
            <p>
                Cabo Elétrico <span>seguro</span>
            </p>
        </div>

        <div class="movie">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vhejcrfMduM?si=QjXUYBtNlI2AjnK9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>



<style scoped>

.container{
    background-color: #1f1f1f;
    height: 400px;
    width: 100%;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    place-items: center;
}

.content{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 1.8rem;
}

.content span{
    color: yellow;
}

</style>