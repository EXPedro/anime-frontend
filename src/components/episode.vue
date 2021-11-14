<template>
    <div>
        <div v-if = "atualizador != 0" >Ep. {{ atualizador }} </div>
        <div v-else>Ep. {{ epis }} </div> 
        <Buttons 
            class="posiciona-final" 
            :episode.sync= epis 
            v-on:atualiza:ep= "atualizador = $event"
        /> 
    </div> 
</template>

<script>
import Buttons from './buttons';

    export default {

        name: 'Episode',

        props: { 
          epis: Number
          },

        components:{
          Buttons,
          },
          
        data: () => ({
          atualizador: 0,
          }),  
    }
</script>

<style>
  .posiciona-final {
      position: relative;   /* relativo à sua posição normal */
      left: 3.125rem;   /* 50px */
  }
</style>