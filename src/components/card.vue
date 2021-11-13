<template>
  <div>   
      <ul id="Card" class= "area-cards">
        <li v-for="anime in animes" :key="anime.id" class= "card-container"> 
          <img class="imagem"
               :src= anime.img_path
                alt="figura"
          />                           
          <div class="tamanho-nome">{{ anime.nome }}</div>
          <div>Ep. {{ anime.ep }} </div>
          <Buttons class="posiciona-final" :episode.sync= anime.ep v-on:update:ep="atualizador = $event" />          
        </li>
      </ul>       
  </div>  
</template>

<script>
import Buttons from './buttons';

  require('../assets/css/card.css');

  export default {
    name: 'Card',

    components: {
      Buttons,
    },

    data:() => ({  
      atualizador: 0,  
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