const app = Vue.createApp({
  data() {
    const product = 'Socks'
    return {
      product: product,
      description: 'This is a description for ' + product
    }
  }
})
