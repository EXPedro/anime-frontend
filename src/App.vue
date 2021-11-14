<template>
  <section>      
    <div  class= "aplicacao">
      <Header />
      <Menu />
      <SortBy />
        <div class="area-cards"> 
          <Card />
        </div>
    </div>
  </section>
</template>

<script>
  import Header from './components/header';
  import Card from './components/card';
  import Menu from './components/menu';
  import SortBy from './components/sortby';

  export default {
    name: 'App',

    components: {
      Header,
      Card,
      Menu,
      SortBy,
    },

    data: () => ({
      //
    }),
  };
</script>

<style>
  :root {
      --fundo-header: #A52A2A;
      --texto-header: white;
      --fundo-body: #e59a9a;
      --sombras: 3px 2px 3px black;
      --botao: #F5EBD6;
      --borda-botao: #D5AD5D;
  }

  html, body {   
      margin: 0px !important;
      padding: 0px !important;
      background-color: var(--fundo-body);

      overflow: auto;
  }

  .aplicacao{    
      display: flex;
      flex-direction: column; 
  }

  .area-cards{
      display: grid;
      grid-template-columns: auto auto auto auto auto auto;
      /*flex-direction: row;*/
      position: absolute;
      margin: 0px;
      padding: 0px;

      margin-left: 17px;    /* TODO adicionar responsividade */
      top: 1.6875rem;      /* 27px */
  } 
</style>
