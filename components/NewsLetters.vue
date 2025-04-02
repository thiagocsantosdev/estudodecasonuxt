<template>
    <div class="container">
        <div class="content">
           <p> Fique por dentro das</p>
            <p>Promoções Semanais</p>
        </div>
        <div>
            <form action="">
                <div>
                    <label for="email">Email: </label>
                <input type="email" name="" id="">
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
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
    align-items: center;
    gap: 10px;
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

button{
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: green;
    color: white;
    opacity: .8;
    transition: 600ms;
}

button:hover{
    opacity: 1;
    cursor: pointer;
    transition: 600ms;
}

</style>