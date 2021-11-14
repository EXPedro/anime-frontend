<template>
  <div>                
    <button type="button" class="botao"> Update {{updater}} </button>
    <button type="button" class="botao" v-on:click="incrementaEp"> +1 </button>
  </div>
</template>

<script>
  export default {
    name: 'Buttons',  
    props:{ episode:Number },
    data: () => ({
        ep: 0,
        updater: 0,
    }),
    methods: {
      incrementaEp(){      
          this.ep++
          this.updater = this.ep + this.episode      
          this.$emit('atualiza:ep', this.updater)
          console.log(this.updater)
        }  
    },
  }
</script>

<style>
  .botao {    
    margin-bottom: 2px;
    margin-right: 2px;
    background-color: var(--botao);
    border-style: solid;   
    border-color: var(--borda-botao);
    border-radius: 25px;
    padding: 4px;
    font-size: xx-small;
    font-weight: bold;
    }

  .botao:hover{
    transform: scale(1.025);
    cursor: pointer;
    }

  .botao:active{
    background-color: var(--borda-botao);
    }
</style>