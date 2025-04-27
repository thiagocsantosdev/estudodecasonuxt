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
        background-color: blue;
        display: grid;
        place-items: center;
        padding: 20px;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }

    form{
        display: grid;
        place-items: center;
        gap: 20px;
    }

    .content p:nth-child(2){
        font-weight: 900;
        font-size: 1.2rem;
        margin-top: -10px;
    }

    form input{
        border-radius: 5px;
        border: none;
        padding: 10px;
        width: 100%;
        margin-top: 5px;
    }
    button{
        border: none;
        border-radius: 5px;
        padding: 10px;
    }
</style>