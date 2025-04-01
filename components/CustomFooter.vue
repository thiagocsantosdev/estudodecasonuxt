<template>
    <div class="container">
        <div class="content">
           <p> Fique por dentro das</p>
            <p>Promoções Semanais</p>
        </div>
        <div>
            <form action="">
                <label for="email">Email:</label>
                <input type="email" name="" id="">
            </form>
        </div>
    </div>
</template>



<style scoped>

.container{
    margin-top: 20px;
    margin-bottom: 40px;
    background-color: blue;
    height: 150px;
    width: 100px;
    width: 100%;
    border-radius: 15px;
    display: grid;
    padding: 20px;
    grid-template-columns: 1fr 1fr;
    place-items: center;
}

.content{
    display: flex;
    flex-direction: column;
    font-family: 'Helvetica';
    font-size: 1.2rem;
    justify-content: center;

    margin-left: 100px;
}

.content p:nth-child(2){
    color: #1f1f1f;
    font-weight: 900;
    margin-top: -10px;
    color: white;
}

.content p:nth-child(1){
    color: lightgray;
    font-weight: 600;
}

form{
    display: flex;
    flex-direction: column;
}

label{
    color: white;
    font-family: 'Helvetica';
    font-weight: 600;
}

input{
    border: none;
    border-radius: 5px;
    padding: 10px;
}

</style>