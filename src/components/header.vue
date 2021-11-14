<template>
  <div class="header">
    <div class="separador-flex">
      <span class="material-icons menu">
        menu
      </span>
        <h1>Lista de animes</h1>
      <span class="material-icons expand">
        expand_more
      </span>   
    </div>
    <div class="rodape"></div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    }
</script>

<style>
  .header{
    height:53px;
    width: 100vw;
    background-color: var(--fundo-header);
    color: var(--texto-header);
    position: fixed;
    z-index: 990;
    }

  h1 {
    font-family: 'Acme', sans-serif;
    font-size: 2.375rem;    /* 38px */
    margin: 0px;
    padding: 0px;
    }

  .separador-flex{
    display: flex; 
    justify-content: space-between;
    }

  .rodape {
    height: 5px;
    width: 100vw;
    background-color: var(--texto-header);
    }

  .material-icons{
    align-self: center;
    }

  .material-icons:hover{
    cursor: pointer;
    transform: scale(1.025);
    }

  .expand {
    margin-right: 18px;
    }

  .menu {
    margin-left: 18px;
    }
</style>