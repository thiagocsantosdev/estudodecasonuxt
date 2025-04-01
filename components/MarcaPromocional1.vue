<template>

<div class="container">

  <ul>
    <li>
      <img src="/icons/1.png" alt="">
      <div class="item">
        <p>desconto</p>
      <p>no pix</p>
      </div>
      
    </li>
    <li>
      <img src="/icons/2.png" alt="">
      <div class="item">
        <p>parcele</p>
      <p>até 10x sem juros</p>
      </div>
 
    </li>
    <li>
      <img src="/icons/3.png" alt="">
      <div class="item">
        <p>retirada</p>
      <p>expressa</p>
      </div>
   
    </li>
    <li>
      <img src="/icons/4.png" alt="">
      <div class="item">
        <p>progama</p>
      <p>de beneficios</p>
      </div>
    
    </li>
  </ul>

</div>


</template>



<style scoped>

.container{

    height: 100px;
  width: 100%;
  border-radius: 15px;
  margin-top: 40px;

}

ul{
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  gap: 100px;
}

li{
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

}

li p:nth-child(2){
  font-weight: 600;
  color: #1d1c1c;
  font-size: 1.2rem;
  margin-top: -10px;
}

li img{
width: 75%;

}

.item{
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

}





</style>