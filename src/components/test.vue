<template>
   <ul id="example-1">
        <li v-for="item in items" :key="item.message">
             {{ item.message }}
        </li>
   </ul> 
</template>

<script>

export default {
   name: 'example1',
   data: () => ({
    items: [
      { message: 'Algo' },
      { message: 'Outro' }
    ]
  })
}
</script>

         
          