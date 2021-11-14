<template>
  <div>   
      <ul id="Card" class= "area-cards">
        <li 
        v-for="anime in animes" 
        :key="anime.id" 
        class= "card-container"> 

          <img 
            class="imagem"
            :src= anime.img_path
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

        export default {
          name: 'Card',

          components: {
            Episode,
            },

          data:() => ({    
            animes: [
                      { 
                          id: 1,
                          nome: 'Kimetsu no Yaiba', 
                          ep: 23, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2021/10/dUAmalA1Pay30hYy4Q9pT6vT4pW-185x278.jpg'
                      },
                      { 
                          id: 2,
                          nome: 'Kaguya-sama wa Kokurasetai', 
                          ep: 3, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2019/08/xxdu5VfiQLN4ZhA4VMw3tJ1Pi6T-185x278.jpg'
                      },
                      { 
                          id: 3,
                          nome: 'Tensei Shitara Slime Datta Ken', 
                          ep: 6, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2019/06/jMdGzltegevAmbIkFPcTUaf6eAa-185x278.jpg'
                      },
                      { 
                          id: 4,
                          nome: 'Yakusoku no Neverland', 
                          ep: 7, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2019/06/9B1sz1xvpMyy1KvmbGuCcV2wTDF-185x278.jpg'
                      },
                      { 
                          id: 5,
                          nome: 'Goblin Slayer', 
                          ep: 6, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2020/03/dY2oCQXBGDzoeUu1GxaGynHFs1R-185x278.jpg'
                      },
                      { 
                          id: 6,
                          nome: 'Kaifuku Jutsushi no Yarinaoshi', 
                          ep: 8, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2021/01/uWYp8E45aUl9ctFOkjYDqicC8w4-185x278.jpg'
                      },
                      { 
                          id: 7,
                          nome: 'Shingeki No Kyojin 2', 
                          ep: 1, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2019/06/vlpPH5MhvhLrIsnZlApY5o9zoLH-185x278.jpg'
                      },
                      { 
                          id: 8,
                          nome: 'Otome Game', 
                          ep: 8, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2020/04/s8i37CMNKRWi63Oew50QIWDhkpE-185x278.jpg'
                      },
                      { 
                          id: 9,
                          nome: 'Somali to Mori no Kamisama', 
                          ep: 1, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2020/01/hI4TCUiWP7wKRwjf64mpljl8CN2-185x278.jpg'
                      },
                      { 
                          id: 10,
                          nome: 'Kimetsu no Yaiba', 
                          ep: 23, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2021/10/dUAmalA1Pay30hYy4Q9pT6vT4pW-185x278.jpg'
                      },
                      { 
                          id: 11,
                          nome: 'Kaguya-sama wa Kokurasetai', 
                          ep: 3, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2019/08/xxdu5VfiQLN4ZhA4VMw3tJ1Pi6T-185x278.jpg'
                      },
                      { 
                          id: 12,
                          nome: 'Tensei Shitara Slime Datta Ken', 
                          ep: 6, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2019/06/jMdGzltegevAmbIkFPcTUaf6eAa-185x278.jpg'
                      },
                      { 
                          id: 13,
                          nome: 'Yakusoku no Neverland', 
                          ep: 7, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2019/06/9B1sz1xvpMyy1KvmbGuCcV2wTDF-185x278.jpg'
                      },
                      { 
                          id: 14,
                          nome: 'Goblin Slayer', 
                          ep: 6, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2020/03/dY2oCQXBGDzoeUu1GxaGynHFs1R-185x278.jpg'
                      },
                      { 
                          id: 15,
                          nome: 'Kaifuku Jutsushi no Yarinaoshi', 
                          ep: 8, 
                          img_path: 'https://animesonline.cc/wp-content/uploads/2021/01/uWYp8E45aUl9ctFOkjYDqicC8w4-185x278.jpg'
                      },
                    ]
             })
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