<template>
    <section>      
      <div  class= "aplicacao">
        <Header />
        <Menu />
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

require('./assets/css/styles.css');

export default {
  name: 'App',

  components: {
    Header,
    Card,
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
