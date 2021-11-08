<template>
    <section>
      <Header />
      <div  class= "aplicacao">
        <Card />
        <Card />
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
