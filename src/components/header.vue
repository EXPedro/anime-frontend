<template>
  <div class="header">
    <div class="separador-flex">
      <span class="material-icons menu" @click= 'showMenu1'>
        menu
      </span>      
        <h1>Lista de animes</h1>
      <span class="material-icons expand" @click= 'showMenu2'>
        expand_more
      </span>    
       
    </div>
    <div class="rodape"></div>
  </div>
</template>

<script>
  import Menu from './menu';
  import SortBy from './sortby';

  //v-bind:style='{visibility:visible}'

  export default {
    name: 'Header',
    props: {
      menu1: Boolean,
      menu2: Boolean,
    },
    components: {
      // eslint-disable-next-line vue/no-unused-components
      Menu,
      // eslint-disable-next-line vue/no-unused-components
      SortBy,
    },
    data: ()=>({
      menuEsquerda: false,
      menuDireita: false,
    }),
    methods:{
      showMenu1(){
        if (this.menuEsquerda) {
          this.menuEsquerda = !this.menu1;
        }else{
          this.menuEsquerda = this.menu1;
        }
        this.$emit('atualiza:menu1', !this.menuEsquerda)
        },      
      showMenu2(){
        if (this.menuDireita) {
          this.menuDireita = !this.menu2;
        }else{
          this.menuDireita = this.menu2;
        }
        this.$emit('atualiza:menu2', !this.menuDireita)
        }, 
      },  
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