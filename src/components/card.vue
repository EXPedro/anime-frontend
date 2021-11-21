<template>
  <div>   
    <ul id="Card" class= "area-cards">
      <li 
        v-for="anime in animes" 
        :key="anime.id" 
        class= "card-container"> 

        <img 
          class="imagem"
          :src= anime.imgPath
          alt="figura" />  

        <div class="tamanho-nome">{{ anime.nome }}</div>

        <Episode 
          :epis= anime.ep 
          />
      </li>
    </ul>       
  </div>  
</template>

<script>
  import Episode from './episode';
  import Anime from '../services/animes'

    export default {
      name: 'Card',

      components: {
        Episode,
        
        },

      data: () => ({         
          anime:{
            id: '',
            nome: '',
            imgPath: '',
            ep: '',
          },
          animes: [],
          errors: []
      }),

      mounted(){
        this.listar()
      },

      methods:{    
        listar(){
          //console.log ("Cheguei até aqui " + Anime)
          //  console.log (Anime.listar())
            Anime.listar().then( resposta => {
            console.log(resposta)
            this.animes = resposta.data
            }).catch(e => {
              console.log(e)
            })            
        },
      },
    }  
</script>

<style>
  .card-container {
    color: black;
    background-color: white;
    height: auto;
    width: 11.25rem;    /* 180px */
    display: flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: var(--sombras);
    border-radius: 4px;
    margin: 6px;
    padding: 0px;
    font-family: 'Oxygen', sans-serif;
    font-size: large;
    /*transition: all 0.01s linear;*/
  }

  .card-container:hover {    
    transform: scale(1.005);
  }

  /* no tamanho "natural" = 185px x 278px (1,5x) */
  .imagem {
    height: 12.1875rem;     /* 195px */
    width: 8.125rem;        /* 130px */
    margin-top: 0px;
  }

  .posiciona-final {
    align-self: flex-end;
  }

  .tamanho-nome{
    height: 2.5em;
  }
</style>