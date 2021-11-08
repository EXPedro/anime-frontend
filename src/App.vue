<template>
    <section>      
      <div  class= "aplicacao">
        <Header />
          <div class="area-cards">  
            <Card />
            <Card />
          </div>
      </div>
    </section>
</template>

<script>
import Header from './components/header';
import Card from './components/card';

require('./assets/css/styles.css');

export default {
  name: 'App',

  components: {
    Header,
    Card,
  },

  data: () => ({
    //
  }),
};
</script>
