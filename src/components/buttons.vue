<template>
    <div class= "buttons" >                
        <button type="button" class="botao"> Update {{updater}} </button>
        <button type="button" class="botao" v-on:click="incrementaEp"> +1 </button>
    </div>
</template>
<script>
require('../assets/css/buttons.css');

export default {
  name: 'Buttons',  

  props:{ episode:Number },

  data: () => ({
    ep: 0,
    updater: 0,
  }),

  methods: {
    incrementaEp(){
      //this.$emit('update:count', this.count + 1)
      this.ep++
      this.updater = this.ep + this.episode      
      this.$emit('update:ep', this.ep + this.episode)
      console.log(this.updater)
    }  
  },
}
</script>