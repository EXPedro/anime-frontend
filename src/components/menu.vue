<template>
  <div id="menu-container">
    <span> Acrescentar </span>
    <div class="linha"></div>  
    <span> Deletar </span>     
  </div> 
</template>

<script>
  export default {
      name:'Menu',
      }
</script>

<style>
  div #menu-container {
    position: fixed;
    height: 3em;
    width: fit-content;
    top: 26px;
    left: 30px;
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
    width: 5em;
    border-radius: 4px;

    background-color: var(--borda-botao);
    }
</style>