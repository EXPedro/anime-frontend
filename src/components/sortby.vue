<template>
  <div id="sortby-container">
    <span> Ordenar por nome </span>
    <div class="linha"></div>  
    <span> Ordenar por  + ep. </span> 
    <div class="linha"></div>   
    <span> Ordenar por  - ep. </span>     
  </div> 
</template>

<script>
  export default {
    name:'sortBy',
    }
</script>

<style>
  div #sortby-container {
    position: fixed;
    height: 4.5em;
    width: fit-content;
    top: 26px;
    right: 15px;
    padding: 4px;
      
    display: flex;
    flex-direction: column;
    align-items: center;
  
    background-color: white;
    box-shadow: var(--sombras);
    border-radius: 4px;
    color: black;
    font-family: 'Oxygen', sans-serif;
    font-size: small;
  
    /*visibility: hidden;*/
    z-index: 999;
    }
  
  .linha{
    height: 0.10em;
    width: 10em;
    border-radius: 4px;
  
    background-color: var(--borda-botao);
    }
</style>