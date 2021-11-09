<template>
    <div class= "card-container">
            <img class="imagem"
                 src="https://animesonline.cc/wp-content/uploads/2019/06/jMdGzltegevAmbIkFPcTUaf6eAa-185x278.jpg"
                 alt="figura"
            />                
            <div>Nome</div>
            <div>Episódio</div>
            <Buttons class="posiciona-final" />
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
  }
</script>